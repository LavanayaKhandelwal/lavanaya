/**
 * One IntersectionObserver for the whole page, started by `AppShell` on every
 * route change. It does exactly one thing: when an element carrying `.reveal`
 * (or `.reveal-fade`) crosses into view, it adds `.reveal-in` and stops watching
 * that element. All of the movement lives in index.css, so nothing here knows
 * anything about durations, distances or which page it is on.
 *
 * WHY AN OBSERVER AND NOT `whileInView` ON EVERY SECTION. `motion/react` is the
 * right tool where an element is already a motion component, and the homepage
 * keeps using it. But a reveal that reaches every section of every project page
 * would otherwise mean converting several hundred plain `div`, `figure` and
 * `li` elements — some of which are laid out to the pixel in a fixed-composition
 * board — into motion components, and a `transform` left on an ancestor by a
 * finished animation silently re-anchors every `position: fixed` and `sticky`
 * descendant under it. Here the markup gains a class name and keeps its element.
 *
 * `motion-ready` is added only once this is watching, and the CSS keys off it:
 * a page whose script never booted shows everything, still and complete.
 *
 * The MutationObserver is not decoration. Several boards on these pages
 * measure themselves in an effect and mount or re-render their contents after
 * the first paint (the social sheets, the e-commerce cards), so a scan that ran
 * once at mount would miss elements that arrive later — and one that ran once
 * per mutation would query the document on every keystroke of a state update.
 * The scan is therefore debounced to one pass per frame.
 */
export function startScrollReveal(): () => void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Nothing to hide and nothing to watch: the page renders exactly as authored.
  if (reduced.matches) return () => {};

  const root = document.getElementById('root') ?? document.body;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('reveal-in');
        observer.unobserve(entry.target);
      }
    },
    /* An element reveals as soon as a sliver of it is on screen (0.01, not 0,
       so an element sitting exactly on the fold edge at load is not counted as
       seen before it is painted) and stops early enough that the last of its
       travel is finished by the time it is properly reading distance —
       64px of margin, not a percentage, because a very tall board would
       otherwise wait for a third of itself to appear. */
    { threshold: 0.01, rootMargin: '0px 0px -64px 0px' }
  );

  const scan = () => {
    root.querySelectorAll<HTMLElement>('.reveal:not(.reveal-in), .reveal-fade:not(.reveal-in)').forEach(
      (el) => observer.observe(el)
    );
  };

  document.documentElement.classList.add('motion-ready');
  scan();

  let queued = 0;
  const mutations = new MutationObserver(() => {
    if (queued) return;
    queued = requestAnimationFrame(() => {
      queued = 0;
      scan();
    });
  });
  mutations.observe(root, { childList: true, subtree: true });

  return () => {
    if (queued) cancelAnimationFrame(queued);
    mutations.disconnect();
    observer.disconnect();
    document.documentElement.classList.remove('motion-ready');
  };
}
