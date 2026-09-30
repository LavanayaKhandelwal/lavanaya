import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { FlowerMark } from '../CustomDoodles';
import {
  Annotation,
  SectionLabel,
  SketchArrow,
  SketchHeart,
  SparkBurst,
} from './aadiyaMarks';
import { WebsiteLaptop, WebsitePhone } from './commerceInterface';
import { ShopifyPanel } from './commerceBackend';
import { ContentTracker, ImageFolder, ProductCatalogue } from './commerceData';
import {
  CollectionPage,
  MobileBanner,
  NewsletterPopup,
  ProductPage,
  WideBanner,
} from './commercePages';

/**
 * INTERNSHIP — AADIYA JEWELS, SECTION TWO: E-COMMERCE AND WEBSITE MANAGEMENT.
 *
 * This section was a 1536 by 1024 art-directed sheet until this revision. It is
 * now a fluid, max-w-7xl editorial section in the interface of the internship
 * page in the reference project: a large title and subtitle, one big object
 * beside one paragraph, and then a row of equal interface cards.
 *
 * WHAT WAS KEPT AND WHAT CAME FROM THE REFERENCE.
 *
 * Every word, every drawn object and every decorative mark is the sheet's own.
 * Nothing was rewritten and nothing was added. What changed is the frame: the
 * cream ground, the near-black ink, the card chrome, the type scale and the
 * scroll-in behaviour all come from the reference's own section, and the five
 * sections of work were re-hung inside that frame rather than redrawn.
 *
 * The mapping was not arbitrary. The reference's section is a title, then one
 * large object on the left with a single paragraph on the right, then a row of
 * cards. That is four slots. The sheet has five sections of work, and they fell
 * into those four slots because they are the same four kinds of thing: WEBSITE
 * INTERFACE is the large object, because the website is the one thing on the
 * board that is a whole site; the introduction is the single paragraph, because
 * the reference's single paragraph is the one that says what the work was; and
 * the other four are the row of cards, because a card is exactly what the
 * reference's cards are — one piece of interface, framed, described, lifted on
 * hover.
 *
 * THE FIVE SECTIONS STILL READ IN WORKING ORDER: the website is what existed,
 * the backend is where it was managed, the catalogue is what was maintained,
 * the banners are what was designed, the other pages are what was extended.
 * Left to right on one row now instead of two rows of two and three, but the
 * sequence is unchanged.
 *
 * WHAT DID NOT SURVIVE THE MOVE, AND WHY.
 *
 * The paper. Six blurred washes, a grain tile and a pink ground belonged to a
 * single sheet with a single horizon; spread over a section that reflows, they
 * would either have to be re-authored against a shape that no longer exists or
 * left as decoration with nothing to decorate. The reference's section has a
 * flat cream ground and nothing behind it, and that is what this has now.
 *
 * The per-description measures. The sheet set the five sentences at 290, 390,
 * 330, 330 and 338 pixels — the widths of five hand-drawn columns, argued over
 * in this file's earlier revision at some length. Those numbers described the
 * sheet and are meaningless here, where a sentence is a fluid block of whatever
 * width its card happens to be. Every one of the five is now a full measure,
 * which is the same sentence and the correct amount of it for its column.
 *
 * THE FILE KEEPS ITS NAME. It is a section, not a board, and renaming it would
 * touch the one file above that is not allowed to change in this pass. The name
 * is historical, not descriptive.
 */

/* ————————————————————————————————————————————————————————————
   A DRAWN OBJECT, FITTED TO THE SPACE IT IS GIVEN.

   The eleven objects in this section are not images. Each one is a hand-built
   arrangement of divs at absolute pixel positions inside a fixed box, and the
   pixel positions are the artwork — a 112-pixel sidebar next to a 376-pixel
   table is what makes a Shopify admin panel read as a Shopify admin panel. So
   none of them is rewritten to be responsive, and none of them is replaced by
   a screenshot.

   What they need instead is a way to sit in a fluid column without losing
   those numbers, and that is all this is. It measures the space it was given,
   works out the scale that fills it, and applies it as a transform.

   TWO THINGS WORTH KNOWING ABOUT HOW IT MEASURES.

   The drawing's own size is read once, on the first layout pass, before any
   transform is on the stage — so the rectangles come back in the drawing's own
   pixels. It is read from the children's rects rather than from their
   offsetLeft and offsetWidth because two of the objects overflow their own root
   box: the laptop's base is pulled sixteen pixels out on each side by a
   negative margin, and a union of offset boxes would have cut both ends off.
   After that first pass the size is kept, because it is a property of the
   drawing and not of the window; a resize recomputes the scale and nothing
   else.

   The scale is allowed to go above one. This is the opposite of the social
   board's rule, where a sheet shrinks to fit and never grows, and the reason is
   the opposite too. A sheet is a spread: enlarging one past its authored size
   is a mistake, because every number in it was written for that size. These
   objects are not sized to anything — the reference's cards hold real
   screenshots, which fill their card exactly, and a card whose contents stop
   two thirds of the way across is a different-looking object. So each cluster
   fills the card it is in, the way the reference's images do, and the ceiling of
   two is there only to catch a pathological column rather than to express an
   opinion. Everything being scaled is CSS and SVG, so a transform keeps it
   sharp; the smallest type in here is five and a half pixels and enlarging it
   makes it easier to read, not harder.
   ———————————————————————————————————————————————————————————— */

type Fit = { width: number; height: number; scale: number };

const Fitted: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  const slotRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  /* The drawing's own size, read once and then trusted. */
  const natural = useRef<Fit | null>(null);
  const [fit, setFit] = useState<Fit | null>(null);

  useLayoutEffect(() => {
    const slot = slotRef.current;
    const stage = stageRef.current;
    if (!slot || !stage) return;

    const measure = () => {
      if (!natural.current) {
        const origin = stage.getBoundingClientRect();
        let width = 0;
        let height = 0;
        for (const child of Array.from(stage.children) as HTMLElement[]) {
          const rect = child.getBoundingClientRect();
          width = Math.max(width, rect.right - origin.left);
          height = Math.max(height, rect.bottom - origin.top);
        }
        if (width === 0 || height === 0) return;
        natural.current = { width, height, scale: 1 };
      }

      const available = slot.clientWidth;
      if (available === 0) return;
      setFit({ ...natural.current, scale: Math.min(available / natural.current.width, 2) });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(slot);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={slotRef} className={`flex w-full items-center justify-center ${className}`}>
      {/* The middle box is what the parent sees: the drawing's size multiplied
          by the scale, so the layout reserves exactly the space the artwork will
          occupy once the transform is applied. Without it the untransformed
          width would still be in the flow and every cluster would overflow its
          column. */}
      <div
        style={{
          width: fit ? fit.width * fit.scale : 0,
          height: fit ? fit.height * fit.scale : 0,
        }}
      >
        <div
          ref={stageRef}
          className="relative"
          style={{
            width: fit?.width ?? 0,
            height: fit?.height ?? 0,
            transform: fit ? `scale(${fit.scale})` : undefined,
            transformOrigin: 'top left',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

/* ————————————————————————————————————————————————————————————
   ONE CARD.

   The reference's card is an image with a hairline border, a soft shadow and a
   lift on hover, and it is the only chrome in the reference section. This is
   that chrome around our own three-part object: the heading that names it, the
   sentence that describes it, and the thing itself.

   The heading and the sentence are ours and the reference has nothing to say
   about them — its cards are bare. They are set in the codebase's own label
   face and body face at a size that suits a four-across row, which is the one
   place in this section the reference offered no precedent to follow.
   ———————————————————————————————————————————————————————————— */

const InterfaceCard: React.FC<{
  label: string;
  description: string;
  index: number;
  children: React.ReactNode;
}> = ({ label, description, index, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
    className="group flex h-full flex-col overflow-hidden rounded-md border border-[#DDD5C8] bg-[var(--c-bg)] p-4 shadow-[0_2px_8px_rgba(80,70,55,0.08)] transition-all duration-300 hover:-translate-y-1 hover:aj-shadow sm:p-5"
  >
    <SectionLabel colour="var(--c-ink)">{label}</SectionLabel>
    <p className="mt-2.5 font-body text-[0.8125rem] leading-relaxed text-[var(--c-ink)]/80">
      {description}
    </p>
    {/* The artwork takes the rest of the card and sits in the middle of it, so
        that four cards of four different heights still read as one row. */}
    <div className="mt-4 flex flex-1 items-center">
      <Fitted className="h-full">{children}</Fitted>
    </div>
  </motion.div>
);

export const CommerceBoard: React.FC = () => (
  <MotionConfig reducedMotion="user">
    <section id="ecommerce" className="aj-ecom scroll-mt-24 bg-[var(--c-bg)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* ————— THE HEADER —————
            The reference's own header, with the sheet's running head kept as the
            eyebrow it now has to be. The reference has no eyebrow here, so the
            row is borrowed from the reference's hero: a small tracked label and a
            short rule, which is the same shape the rest of this site uses for
            the same job.

            The flower mark sits in a flex row beside the subtitle rather than
            absolutely in the corner as the reference does it, and that is a
            deliberate correction rather than a variation. The reference's title
            is the two words E-COMMERCE and clears the corner at every width; this
            one is four words at 60 pixels, and it wraps to two lines at 768
            before the corner has cleared it. A flow position cannot collide. */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-5 flex items-center gap-5">
            <span className="font-mono-code text-xs uppercase tracking-[0.35em] text-[var(--c-ink)]/70">
              Internship Experience
            </span>
            <span className="h-px w-24 origin-left bg-[var(--c-ink)]/30" />
          </div>

          <h2 className="font-serif-display text-4xl uppercase leading-none tracking-tight text-[var(--c-ink)] sm:text-6xl">
            E-commerce &amp; Website Management
          </h2>

          <div className="mt-3 flex items-end justify-between gap-6">
            <p className="font-serif-display text-2xl text-[var(--c-ink)]/85 sm:text-3xl">
              E-commerce&nbsp; / &nbsp;Website Management&nbsp; / &nbsp;Data
              Management
            </p>
            <span className="hidden shrink-0 items-center gap-4 opacity-70 sm:flex">
              {/* A spark, once, at the top of the section where the composition
                  is heaviest and the paper is emptiest — the same place it was
                  on the sheet. */}
              <SparkBurst size={20} colour="var(--c-ink)" />
              <FlowerMark size={30} />
            </span>
          </div>
        </motion.div>

        {/* ————— THE MAIN SHOWCASE —————
            Seven columns of website, five of prose, on the reference's twelve-
            column grid. The paragraph is the one the reference puts at the head
            of the column and it slides in from the right, which is the one
            directional move in the reference's whole section and it is worth
            keeping. */}
        <div className="mb-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-9">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <SectionLabel colour="var(--c-ink)">WEBSITE INTERFACE</SectionLabel>
            <p className="mt-2.5 max-w-[34rem] font-body text-[0.8125rem] leading-relaxed text-[var(--c-ink)]/80">
              Updated banners, curated collections and ensured a seamless shopping experience.
            </p>
            <div className="mt-6">
              {/* The board's focal point, and the largest object on it. The
                  phone's offset is recomputed, not inherited: the drawn laptop
                  it used to sit against was 546 by 356, and the real MacBook
                  frame that replaced it is 654 by 390, so the old 412/138 would
                  have landed the phone in the middle of the screen rather than
                  across its lower right.

                  What the new numbers preserve is the relationship rather than
                  the pixels. The phone overlaps about a sixth of the 500-pixel
                  panel instead of the drawn laptop's fifth, stops 30 pixels
                  short of the frame's right edge so it reads as sitting in
                  front of the machine rather than beside it, and its foot lands
                  24 pixels below the base — which is exactly how far it hung
                  below the drawn laptop, and is the whole reason it overlaps at
                  all. */}
              <Fitted>
                <WebsiteLaptop style={{ left: 0, top: 0 }} />
                <WebsitePhone style={{ left: 500, top: 172 }} />
              </Fitted>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:col-span-5"
          >
            <p className="font-serif-display text-xl italic leading-[1.35] text-[var(--c-ink)]/80 sm:text-2xl lg:pt-6">
              Supported the brand&rsquo;s Shopify website and product catalogue, managing
              product uploads, website updates, banners and product organisation. I also
              worked on Google Sheets for product and content data management, helping keep
              information organised and up to date.
            </p>
          </motion.div>
        </div>

        {/* ————— THE FOUR INTERFACE CARDS —————
            The reference's card row is three across at large. This one is four,
            because the sheet has four sections left over after the website takes
            the showcase. Everything else about the row is the reference's: a
            gap of 12, equal columns, the same border, the same shadow, the same
            lift, and the same collapse — one column on a phone, two from the
            medium breakpoint, four at the large one. */}
        <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-2 xl:grid-cols-4">
          <InterfaceCard
            index={0}
            label="WEBSITE BACKEND"
            description="Managed product uploads, updated site content, added banners and organised collections."
          >
            <ShopifyPanel style={{ left: 0, top: 0 }} />
          </InterfaceCard>

          <InterfaceCard
            index={1}
            label="PRODUCT CATALOGUE MANAGEMENT"
            description="Maintained product details, images, pricing and organised the catalogue for easy access and quick updates."
          >
            {/* The catalogue and the two trackers beneath it, at the sheet's own
                offsets: straight below, and 175 across to the second. */}
            <ProductCatalogue style={{ left: 0, top: 0 }} />
            <ContentTracker style={{ left: 0, top: 208 }} />
            <ImageFolder style={{ left: 175, top: 208 }} />
          </InterfaceCard>

          <InterfaceCard
            index={2}
            label="SITE UPDATES &amp; BANNERS"
            description="Designed and updated banners, pop-ups and landing pages to keep the website fresh and aligned with brand campaigns."
          >
            {/* The only cluster with two objects deliberately overlapping, for
                the same reason it had them on the sheet: a wide banner, a pop-up
                and a mobile banner are three sizes of one idea, and three sizes
                of one idea only look like that when they touch. */}
            <WideBanner style={{ left: 0, top: 0 }} />
            <NewsletterPopup style={{ left: 10, top: 145 }} />
            <MobileBanner style={{ left: 150, top: 140 }} />
          </InterfaceCard>

          <InterfaceCard
            index={3}
            label="WEBSITE INTERFACE / OTHER PAGES"
            description="Worked on product pages, collection pages and other key website sections for a smooth and consistent user experience."
          >
            {/* A product page and a collection page are peers in the work, so
                they are peers here too, at the sheet's 150 across and 35 down. */}
            <ProductPage style={{ left: 0, top: 0 }} />
            <CollectionPage style={{ left: 150, top: 35 }} />
          </InterfaceCard>
        </div>

        {/* ————— THE CLOSING NOTE —————
            Four lines of brush lettering and a small heart. On the sheet it sat
            in the bottom right corner, in the ninety pixels the page and the
            sheet's edge left between them. There is no corner here that is that
            shape, so it sits centred under the card row instead, in the same
            soft pill the reference closes its own section with — a rose
            lozenge, a little hand-written line, and a heart, which is very
            nearly the reference's arrangement, down to the heart.

            The pill is a stadium around a four-line block rather than around a
            single line, and it is worth saying why the line count survived: the
            four words are the last word of the section, and rejoining them into
            one line would have been rewriting the copy to suit the container. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-col items-center"
        >
          {/* The arrow ran down the twenty-pixel gutter between the catalogue
              column and the banner column, and it pointed between two cards. A
              card row has no gutter to run down, so it points at the one thing
              that is still below everything else. */}
          <SketchArrow
            viewBox="0 0 20 58"
            className="mb-1"
            style={{ width: 20, height: 58 }}
            from={[2, 2]}
            to={[17, 56]}
            bow={[-4, 30]}
            colour="var(--c-ink)"
            width={1.4}
          />

          <div className="flex items-center gap-5">
            {/* The three short strokes that sat beside the laptop. */}
            <svg
              width="34"
              height="46"
              viewBox="0 0 34 46"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <g stroke="var(--c-ink)" strokeWidth="1.4" strokeLinecap="round">
                <path d="M6 2c-1.6 7 1 12.5 4.4 16.6" />
                <path d="M16.6 6.5c-1.3 8 1.2 14 4.8 18.2" />
                <path d="M27 12.4c-.9 6.6.8 11.4 3.4 14.8" />
              </g>
            </svg>

            <div className="group inline-flex items-center gap-3 rounded-full border border-[var(--c-warm)] bg-[var(--c-warm-light)] px-8 py-4 transition-all duration-300 hover:-translate-y-1 hover:aj-shadow">
              <Annotation
                size={17}
                colour="var(--c-ink)"
                className="rotate-[-6deg] text-center leading-[1.05]"
              >
                {'Better\nDesigns\nSmoother\nExperiences'}
              </Annotation>
              <SketchHeart size={16} colour="var(--c-ink)" />
            </div>

            {/* The two strokes that sat in the gutter beside the last section. */}
            <svg
              width="18"
              height="34"
              viewBox="0 0 18 34"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <g stroke="var(--c-ink)" strokeWidth="1.4" strokeLinecap="round">
                <path d="M4 3c-1.2 6 .6 11 3.6 15" />
                <path d="M12 1.4c-1 6.4.8 11.6 3.6 15.4" />
              </g>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  </MotionConfig>
);
