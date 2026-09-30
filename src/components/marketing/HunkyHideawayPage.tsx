import React from 'react';
import {
  BrandMark,
  BrushMark,
  CATEGORY,
  Slot,
} from './hunkyScrapbook';

/**
 * PROJECT 04, PAGE 01 — HUNKY HIDEAWAY
 *
 * Rebuilt from the "Hunky Hideaway" specification: one landscape board in a
 * pink scrapbook idiom. Upper left the editorial title block, upper right the
 * large event photograph, then the three activations as three cream boxes in a
 * clean grid — each carrying its own photograph, numeral, title, tagline,
 * description and its final detail line (ExperienceBox, below). The reflection
 * board that follows it is WhatITookAwayPage, and the drawn marks both pages
 * share are in hunkyScrapbook.
 *
 * COLOUR. Hunkemöller's identity is a hot dusty pink on near-black, and the
 * specification is emphatic that the pink carries the whole page. The site's
 * light palette already contains that pink in blush, terracotta and wine, so
 * the identity is mapped onto it rather than imported as new hues:
 *
 *   canvas pink     #F8E5E6  →  blush      #FADBD9   (the ground)
 *   hot dusty pink  #E96F88  →  terracotta #D69589   (every brush mark)
 *   deep pink       #C83F61  →  wine       #7A2A2E   (accent italic, hand)
 *   near black      #181414  →  ink        #3E2723
 *   white           #FFFFFF  →  cream      #F9F8F2   (photo paper, tape)
 *
 * The ground is blush rather than cream, which is what keeps this page from
 * reading as Project 3 in a different colour — here the paper is the accent.
 * The cream appears as the three activation boxes and the two photographic
 * mounts, so it marks an object rather than being the field they sit on.
 *
 * PLATES. Every photograph is a wordless hairline plate until its file lands
 * in /public/portfolio-assets. Nothing is invented to fill a missing image.
 */

const PROJECT_NAME = 'Hunky Hideaway';
const HEADING = ['PLAY.', 'PERSONALISE.', 'EXPERIENCE.'] as const;

const ACTIVATIONS = [
  {
    number: '01',
    /* The bow rides the top-left corner here and the bottom-right on 03. Only
       the outer two cards carry one; 02 is left plain. See ExperienceBox. */
    corner: 'top-left' as const,
    title: 'BEDAZZLING STATION',
    tagline: 'Pick it. Place it. Make it yours.',
    description: 'Personalise your lingerie, hair or face with decorative stickers.',
    photo: {
      src: '/portfolio-assets/04_bedazzling_station.jpg',
      alt: 'The Bedazzling Station — small glasses across a table, a pink handwritten sign on a wooden easel, and containers of beads and embellishments',
      label: 'The Bedazzling Station',
      ratio: 'aspect-[1206/1237]',
    },
  },
  {
    number: '02',
    title: 'POLAROID PHOTO CORNER',
    tagline: 'Capture it. Create it. Take it home.',
    description:
      'Take a Polaroid and decorate your own frame using Hunkemöller waste fabric/materials.',
    photo: {
      src: '/portfolio-assets/04_polaroid_corner.jpg',
      alt: 'The Polaroid Photo Corner — attendees decorating instant-photo frames with Hunkemöller offcuts, and the finished photographs displayed on a board',
      label: 'The Polaroid Photo Corner',
      ratio: 'aspect-[1200/1280]',
    },
  },
  {
    number: '03',
    corner: 'bottom-right' as const,
    title: 'NICE VS NAUGHTY',
    tagline: 'Discover your vibe.',
    description: 'Take a personality quiz and get a customised Bacardi drink based on your result.',
    photo: {
      src: '/portfolio-assets/04_nice_vs_naughty_quiz.jpg',
      alt: "The Nice vs Naughty quiz result screen — “BOLD & A LITTLE NAUGHTY” over “20% Nice · 80% Naughty”, a rating bar filled 20% and 80%, the line “You don't just wear the outfit, you run it. Main-character energy, zero apologies — let's find you the set that keeps up.” and a Take it again button",
      label: 'The Nice vs Naughty quiz result screen',
      /*
       * The one portrait plate of the three. At its own 950x1280 it is 1.347x
       * its width, against 1.026x for the Bedazzling Station's 1206x1237 and
       * 1.067x for the Polaroid corner's 1200x1280 — so its bottom edge ran
       * some 26% past the other two and pulled the whole box out of line.
       *
       * It is set to the taller neighbour's 1200x1280 and the surplus is taken
       * off the BOTTOM only, which is what `position: 'top'` does: the plate
       * keeps its top edge and gives up its foot, so the crop lands at 1014 of
       * the screen's 1280 rows. That clears the retake button at ~925 and the
       * last line of copy at ~700, and discards only empty ground and the faint
       * decorative shape in the bottom-left corner. Nothing legible is lost.
       */
      ratio: 'aspect-[1200/1280]',
      position: 'top',
    },
  },
] as const;

/* ——— The page ——————————————————————————————————————————————————— */

export const HunkyHideawayPage: React.FC = () => {
  return (
    <div className="paper-grain-light bg-[#FADBD9]">
      {/* ——— Band 1 — the title block and the event ——————————— */}
      <section className="relative overflow-hidden px-5 sm:px-5 lg:px-6 pt-12 pb-14 lg:pt-16 lg:pb-20">
        {/* No background paint mark here. A 60%-wide brush stroke anchored
            top-right used to sit behind the cover and read as texture while the
            cover was narrow; now that the photograph fills the whole col-span-8
            the stroke only shows as pink fringes around its edges. The other two
            BrushMarks on this page — the one under the project name and the one
            in band 2 — are unrelated and stay.

            The right-side ribbon artwork that used to be anchored here is
            removed: the photograph and the title block carry the composition on
            their own. The content grid below keeps its z-10; nothing else in
            this band paints, so the stacking stays deterministic. */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-x-10 lg:gap-x-8 items-start">
          {/* Title block.

              The whole stack — lockup, heading, project name, category — is
              pushed down off the section's own padding, so it starts below the
              top of the photograph rather than level with it. The grid is
              items-start, so this moves the title block alone; the photograph
              in col-span-8 is untouched and still starts at the section's
              padding.

              A positive margin is safe on a grid item: item margins do not
              collapse with the grid container, and the section carries
              padding-top, so nothing here can collapse out and drag the
              photograph down with it.

              40px on mobile, 48px from lg. The gap is there for balance rather
              than rhythm — the title block runs about 396px tall against a
              432px photograph, so dropping it 48px leaves the category line
              finishing roughly level with the foot of the image instead of
              stopping 36px short of it. */}
          <div className="mt-10 lg:mt-12 lg:col-span-4 reveal">
            {/* The lockup, left-aligned to the heading and scaled to the column.

                align defaults to centre, which is what put the two out of step:
                the heading is a plain block with no indent, so its text starts
                on the column's left edge, while a centred lockup floated in the
                middle of the same column. Nothing about the two elements needed
                matching widths — only matching edges.

                The size is a ladder rather than one fixed width, because the
                column is not a fixed width. At 1024 — where the grid first
                splits into 12 — col-span-4 is 304px; at 1920 it is 603px. A
                single value large enough to feel present on a wide screen
                would take 84% of the column at 1024 and crowd it. So: 160px
                below sm, 192px at sm, 240px from lg (79% of the narrowest
                column), 288px from xl — which is 74% at 1280 and 48% at 1920.
                The old default was 176px at every width, so the smallest step
                here is only slightly larger and the largest is 1.6x.

                At 6.32:1 the lockup is only 25px tall at 160px wide and 46px at
                288px, so it grows without ever crowding the heading
                vertically. The gap below it is unchanged. */}
            <BrandMark align="left" size="w-40 sm:w-48 lg:w-60 xl:w-72" />

            <h1 className="mt-10 font-display text-[clamp(2.75rem,5.4vw,4.25rem)] leading-[0.9] tracking-[-0.02em] text-[#3E2723]">
              {HEADING.slice(0, 2).map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              <span className="font-editorial italic text-[#7A2A2E]">{HEADING[2]}</span>
            </h1>

            {/* The project name. It used to sit on a painted stroke — a
                terracotta BrushMark behind the script text — and that stroke is
                gone, removed on its own with nothing put in its place. The
                wrapper keeps its relative and inline-block because they are what
                size the block to the text rather than to the column; the
                position is now doing no work, but it is not this change's
                business to prune. The other two BrushMarks on the page — band
                2's, and the one under each card's numeral — are untouched. */}
            <div className="relative mt-8 inline-block">
              <p className="relative font-script text-[2.25rem] sm:text-[2.75rem] leading-none text-[#3E2723] -rotate-[3deg]">
                {PROJECT_NAME}
              </p>
            </div>

            <p className="mt-9 eyebrow text-[#3E2723] tracking-[0.34em]">{CATEGORY}</p>
          </div>

          {/* The event photograph, unframed. This was a polaroid — a bespoke
              figure with an off-white #FDFCF8 mat, 14px of padding down three
              sides, 56px underneath where the caption would go, and a single
              soft lift. All of it is gone; the photograph now sits directly on
              the blush and Slot is the only wrapper.

              The mat was asked for and then withdrawn, and the reason it kept
              being a problem is worth recording. The figure's own shadow was
              measured at zero lateral reach — blur/2 plus spread came to 12 - 12
              — so it was a pure downward lift and never an outline. What read
              as a border was always the 14px strip of #FDFCF8 down the right
              side: at 1.26 contrast against #FADBD9 it is nearly invisible as
              a tone, but a crisp straight edge sitting on a large flat field is
              read as a line regardless of how little contrast separates the two
              values. No amount of softening inside the frame would have fixed
              it, because the frame was the edge.

              The image keeps its own 1920/1080 ratio, so nothing is cropped.
              16:9 against the previous 1206/674 is very nearly the same shape
              (1.778 vs 1.789), but the ratio is written from the file rather
              than rounded to the old one: Slot renders object-cover, so a stale
              aspect box would crop by a fraction of a percent rather than
              announce itself.

              CAPPED AT 48rem, a step up from the 42rem it used to be. The cap
              was dropped entirely at one point so the photograph would fill its
              col-span-8 track, which is correct as a maximum and wrong as a
              size: the track runs 811px at a 1280 viewport and 1237px at 1920,
              so unconstrained the hero grew by up to 1.84x and stopped being a
              photograph sitting beside a title. 48rem is 768px, 1.14x the old
              672px and a little under the 811px track at 1280 — larger than
              before, but only just, and short of the grid's own ceiling.

              This also puts the 1920px source back in reach. At 1920 viewport
              the track wanted 2474px for a full 2x and the file would have been
              served at 1.55x, visibly soft on a large retina display; capped at
              768px the same file is 2.5x, comfortably sharp everywhere. The
              source was over-provisioned at 42rem and under-provisioned at no
              cap, so 48rem is the size it is actually right for. */}
          <div className="lg:col-span-8">
            <Slot
              src="/portfolio-assets/04_hunky_hideaway_event.png"
              alt="The Hunky Hideaway event space"
              label="The event space"
              className="mx-auto aspect-[1920/1080] w-full max-w-[48rem]"
            />
          </div>
        </div>
      </section>

      {/* ——— Band 2 — the three experiences, as three boxes —————
          The band's own ground is the palette cream #F9F8F2, so the cards read
          as pink objects laid on paper rather than as pale holes cut into the
          blush. The page wrapper above still supplies the blush for band 1, and
          this section simply covers it from here down.

          Scoped to this band on purpose. Taking the whole page to cream would
          put the hero on the same paper as page two and lose the alternation
          the two-board split exists for.

          paper-grain-light is not re-applied here because it is not a texture —
          the rule is only position: relative — so nothing is lost by covering
          the wrapper's background. */}
      {/* No background wash here. A 55%-wide, 150px-tall terracotta BrushMark,
          flipped on x and anchored -bottom-6 -left-20, used to sit behind the
          three cards. At that width and offset it stopped reading as paper
          texture and became a visible pink shape with a hard leading edge
          crossing under card 01, which is what made it a design element rather
          than a wash. Removed on its own, with nothing in its place. The
          section keeps overflow-hidden, which it needs for nothing now but is
          not this change's business to prune. */}
      <section className="relative overflow-hidden rule-t-light bg-[#F9F8F2] px-5 sm:px-5 lg:px-6 pt-14 pb-20 lg:pt-20 lg:pb-28">
        {/* A clean grid of three, `items-stretch` so the boxes finish level:
            the photographs keep their own ratios, so the cards are only equal
            because they are told to fill the row. */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-x-10 lg:gap-x-8 gap-y-12 lg:gap-y-14 items-stretch reveal">
          {ACTIVATIONS.map((block) => (
            <ExperienceBox
              key={block.number}
              block={block}
              /* Card 03 is pinned explicitly. The link below 02 is a grid item
                 of its own, so once it takes column two of row two the
                 auto-placement cursor is already past it and card 03 would
                 otherwise drop into row two beside the link instead of
                 finishing the top row. */
              className={block.number === '03' ? 'lg:col-start-3 lg:row-start-1' : undefined}
            />
          ))}

          {/* The strategy deck, linked from below card 02 and outside it.

              It is a sibling of the cards in the same grid rather than a child
              of card 02, which is the only way to sit below the card without
              being inside it — the card is a flex column that fills the row, so
              anything appended inside it lands on the pink.

              lg:col-start-2 lg:row-start-2 places it directly under the second
              card. The grid's own gap-y-14 supplies the space above it, so
              there is no margin here; the row is otherwise empty and the link
              sits alone under the middle column.

              justify-self-center, so the link is centred within that column
              rather than hanging off its left edge. It was justify-self-start
              first, which put the text directly under the card's left border
              and made it read as a caption belonging to the card above it.

              On a phone the grid is one column, so the link simply follows the
              three cards in source order — still after card 02's content, still
              outside any card, just no longer specifically under the middle
              one because there is no middle one.

              The href is a Google Drive folder rather than a file, so it opens
              the deck's folder. rel=noopener with target=_blank: the target is
              a third-party origin and this must not hand it a window handle.
              The underline is the site's own editorial-link treatment, which is
              what the onward link on the next page uses. */}
          <a
            href="https://drive.google.com/drive/folders/1O_FnWQoBbshh4yd6wSFmYnCCDhPOg7yl"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-start-2 lg:row-start-2 justify-self-center inline-flex items-center gap-2 font-editorial italic text-[1.125rem] leading-tight text-[#7A2A2E] editorial-link"
          >
            Hunkemoller&rsquo;s CX Stratergy
          </a>
        </div>
      </section>

    </div>
  );
};

/* ——— One experience box —————————————————————————————————————— */

/**
 * One activation, as its own box.
 *
 * The page used to set the three experiences as three loose columns: a small
 * print on paper, then the written experience floating on the blush ground
 * beneath it. They are now three defined boxes — a cream card, a hairline and a
 * very light lift off the blush — so each experience reads as one object rather
 * than as a photograph with a caption nearby.
 *
 * HIERARCHY. Three sizes now, in descending order: the display title, the
 * italic tagline, then the body description. A fourth step used to follow — a
 * closing line in smaller taupe text, hung under a hairline at the foot of the
 * card. All three have been removed and the hairline is now the card's bottom
 * edge, so the type ends at the description and the box ends at the rule. The
 * hairline itself is unchanged and still does the job the closing line used to
 * interrupt.
 *
 * The numeral stays on its painted stroke, because that stroke is this board's
 * own mark — but it is set at 1.5rem rather than the 2.125rem it used to be.
 * "Small editorial section number" and "visually prominent title" cannot both
 * be true while the numeral is the tallest thing in the column.
 *
 * PHOTOGRAPHS. Each box keeps its own photograph at its own ratio, with one
 * exception: the quiz screen is the only portrait plate of the three and its
 * foot was running well past the two beside it, so its ratio and crop origin are
 * stated per photo in ACTIVATIONS — see the note on 03. Nothing else is cropped.
 * The paper mount, tilt and tape that used to carry these plates are gone —
 * inside a card that is already cream paper, a second sheet of the same cream
 * at a second angle reads as a mistake. The hairline around the plate is what
 * says "mounted" now.
 *
 * COPY. Every word below the photograph is the specification's, verbatim. The
 * three closing lines are gone from the page and from ACTIVATIONS — the Polaroid
 * corner detail, the Nice vs Naughty table detail, and the Hunkemöller × Bacardi
 * partnership credit. They were carried in the supplied order rather than
 * reassigned, so the first named the Polaroid corner while sitting under the
 * Bedazzling Station, and the second described the Nice vs Naughty table under
 * the Polaroid Photo Corner. Whether that pairing was intended is a question the
 * page no longer raises, since none of the three is rendered. Git holds the
 * removed strings if any of them is wanted back.
 */
const ExperienceBox: React.FC<{
  block: (typeof ACTIVATIONS)[number];
  /* Applied to the article itself, so it stays a direct grid item. The grid
     placement for card 03 has to live on the article, not on a wrapper — a
     wrapper would break h-full, which resolves against the wrapper rather than
     against the stretched row. */
  className?: string;
}> = ({ block, className = '' }) => (
  /* THE DIVIDER IS THE CARD'S FOOT, and that is load-bearing rather than
     incidental. It began as a rule under a closing line of text; the text went
     and the rule was left holding the bottom of the box, and it was briefly
     removed by mistake — a request about a background wash in band 2 was read as
     being about this rule instead. Everything below is back exactly as it was:
     the span, the mt-auto, and the cut bottom border.

     The card is border-x border-t only, and has been ever since the divider
     became its foot. rule-t-light is 1px solid rgba(112,89,85,0.22) — the same
     declaration the card's own border already carries — so a rule sitting flush
     on the card's border-bottom would stack the two and draw a 2px line where
     every other edge is 1px. Dropping the border is what keeps the card
     outlined on all four sides while the foot is only 1px.

     The card's bottom padding is off for the same reason. It carried 36px,
     rising to 44px from sm, under the closing text; with the text removed that
     padding would open a band of empty card below the divider. The 36px gap
     ABOVE the divider is untouched — that is the description's own mb-9, so the
     rule sits exactly where it did.

     mt-auto is what makes the three land level. The cards are equal height
     because the grid stretches them, not because their content matches, and the
     quiz plate is the tallest of the three by some 300px. Without mt-auto the
     divider would stop 36px under each description and leave the rest of the
     shorter cards as empty pink below it. With it, every divider is pushed to
     its own card's foot, so all three land on one line across the row.

     CARD AND GROUND TRADE PLACES. The cards are blush #FADBD9 and band 2's own
     ground is the palette cream #F9F8F2 — the reverse of what this page started
     with, where the cards were cream on a blush field. Cream cards on a blush
     ground was tried first and reads as pale holes cut into the page rather than
     as objects sitting on paper. The palette's own words support the swap: the
     board header maps the identity's #FFFFFF onto cream #F9F8F2 for photo paper
     and tape, so the cream is the paper and the cards are the printed thing on
     it.

     Blush is the right pink here rather than terracotta #D69589. Terracotta is
     reserved for the brush marks, and at this area it would be heavy enough to
     swallow the numeral's own painted stroke — which is #D69589 — leaving that
     mark invisible on its own card.

     Neither value carries the card edge. Blush on cream is 1.22:1, far under
     the 3:1 WCAG asks of a visible non-text boundary, so the 1px border — and
     the divider standing in for its bottom side — is what defines the card,
     exactly as it did when the card was the lighter cream.

     A BOW AT TWO OF THE CORNERS. The card is position: relative for this alone
     — it had no positioning context before, since the brush mark under the
     numeral positions itself against the inline-block wrapper instead.

     The bow is 04_card_bow.png, 1303x1207, a pair of loops with two tails
     splaying down. It is placed on the first and last cards only, never the
     middle one, so the three read as outer-outer rather than a repeated motif.
     Which corner comes from the `corner` field on each block rather than from
     its index, so the placement is declared in the data next to the content it
     decorates instead of being inferred from array position.

     Both are negative-offset so the bow straddles the card's corner rather than
     sitting inside it — that overlap is the whole scrapbook read, and a bow set
     flush inside the edge would just look like a picture on the card. The
     offsets are small (-8px) because the tails already point out of the shape;
     a larger push would send the tail tips past the photograph entirely.

     No rotation. Every other mark on this page is straight, and a tilted bow
     would read as a different, looser idea than the rest of the board.

     z-10 puts the bow above the photograph, which is static and would
     otherwise paint over it. The card has no overflow-hidden and neither does
     the grid, so the corners that hang outward are not clipped. The band 2
     section does carry overflow-hidden, but only because it once held the
     bottom-left wash, and the grid sits far inside that section's padding. */
  <article className={`relative flex h-full flex-col border-x border-t border-[#705955]/22 bg-[#FADBD9] px-7 pt-8 shadow-[0_16px_38px_-30px_rgba(62,39,35,0.5)] sm:px-9 sm:pt-10 hover-lift hover-warm ${className}`}>
    {/* `in` rather than a plain read, because card 02 has no corner key at
        all and TypeScript narrows this union to members that declare it. Same
        guard the photo's optional position uses a few lines below. */}
    {'corner' in block && (
      <img
        src="/portfolio-assets/04_card_bow.png"
        alt=""
        aria-hidden="true"
        width={1303}
        height={1207}
        className={`pointer-events-none absolute z-10 w-20 aspect-[1303/1207] object-contain sm:w-24 ${
          block.corner === 'top-left' ? '-left-2 -top-2' : '-bottom-2 -right-2'
        }`}
      />
    )}
    <Slot
      src={block.photo.src}
      alt={block.photo.alt}
      label={block.photo.label}
      position={'position' in block.photo ? block.photo.position : undefined}
      className={`${block.photo.ratio} border border-[#705955]/25`}
    />

    <div className="relative mt-7 inline-block self-start pl-1">
      <BrushMark className="pointer-events-none absolute inset-x-[-6%] top-1/2 h-9 w-[112%] -translate-y-1/2" />
      <p className="relative font-editorial italic text-[1.5rem] leading-none text-[#3E2723]">
        {block.number}
      </p>
    </div>

    <h2 className="mt-5 font-display text-[1.75rem] leading-[1.05] tracking-[-0.01em] text-[#3E2723] sm:text-[1.875rem]">
      {block.title}
    </h2>

    <p className="mt-3 font-editorial italic text-[1.0625rem] leading-snug text-[#3E2723]">
      {block.tagline}
    </p>

    <p className="mt-2.5 mb-9 font-body text-sm leading-[1.5] text-[#3E2723]/80">
      {block.description}
    </p>

    {/* The end of the card. A zero-height span, so its 1px top border is the
        last pixel of the box and there is no padding, margin or content below
        it. Decorative — it separates nothing now, so it carries no semantics. */}
    <span className="rule-t-light mt-auto" aria-hidden="true" />
  </article>
);
