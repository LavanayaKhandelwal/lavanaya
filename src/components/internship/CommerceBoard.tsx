import React from 'react';
import {
  Annotation,
  COMMERCE_SHEET,
  SectionLabel,
  SketchArrow,
  SketchHeart,
  SparkBurst,
  useBoardScale,
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
 * The e-commerce and website management half of the same internship, on a
 * 1536 by 1024 sheet, sitting a screen below the social media board rather than
 * on a route of its own. It is a different shape from that board, which is the
 * point: the social board is 16:9 because its brief called for 16:9, and this
 * one is 3:2 because this brief said 16:9 and then gave a resolution of 1536 by
 * 1024, and 1536 by 1024 is 3:2. The number won, because the number is the one
 * all the pixel positions in the brief were written against.

 * The two sheets keep different shapes even though they are now on one page,
 * and the divider between them is the thing that has to carry the difference
 * rather than the join. The boards' grounds are two and three points apart in
 * green and blue — the same light pink, arrived at twice — so the shape is the
 * only honest signal that the second composition is a different one.
 *
 * THE FIVE SECTIONS RUN LEFT TO RIGHT, TOP TO BOTTOM, and they are in the order
 * the work was done. The website is what existed. The backend is where it was
 * managed. The catalogue is what was maintained. The banners are what was
 * designed. The other pages are what was extended. Reading order and working
 * order are the same sequence, so the board does not need a legend.
 *
 * THE LEFT COLUMN IS THE ONLY COLUMN THAT IS NOT A SECTION. The title and the
 * introduction sit there and nothing else does, because the brief asks for
 * generous negative space around the main title and every square inch a section
 * takes from that column is a square inch the title loses. The two rows of
 * sections begin at 430 and run to the right margin, and the top row's two
 * sections are wider than the bottom row's three for the same reason the bottom
 * row's three are narrower than they would otherwise be: five objects, two
 * slots and three slots, divided honestly.
 */

/* ————————————————————————————————————————————————————————————
   THE PAPER.

   Six washes, per the brief, and they are laid down in a specific order that
   matters: the two largest sit at the corners the composition is heaviest —
   top right, where the laptop's screen and the admin panel both throw light —
   and bottom left, where the catalogue's shadow falls. The two small ones go
   where there is paper to spare, which is the left margin above the title and
   the gap between the bottom row's first two sections.

   Each is an eight-number percentage radius rather than a border-radius class,
   because an organic brush shape needs a different radius on every corner and
   a four-value class would have to encode all of them as a single arbitrary
   value with four slashes in it. The blur is heavy because the brief asks for
   shapes with no findable edge; at 40 pixels a 340-pixel blob has no edge left
   to find.
   ———————————————————————————————————————————————————————————— */

const WASHES = [
  /* top left — the largest cream, under the title */
  {
    left: -90,
    top: -80,
    w: 640,
    h: 400,
    colour: '#FFF5EF',
    opacity: 0.9,
    rotate: -6,
  },
  /* top centre right — the pale yellow, behind the laptop's upper half */
  {
    left: 820,
    top: -150,
    w: 820,
    h: 520,
    colour: '#FFF2A4',
    opacity: 0.85,
    rotate: 8,
  },
  /* left middle — the small brush stroke, in the margin beside the laptop */
  {
    left: -40,
    top: 300,
    w: 300,
    h: 210,
    colour: '#FFF2A4',
    opacity: 0.8,
    rotate: 16,
  },
  /* bottom left — large pale yellow, under the catalogue */
  {
    left: -110,
    top: 700,
    w: 700,
    h: 460,
    colour: '#FFF1A6',
    opacity: 0.85,
    rotate: -10,
  },
  /* bottom centre — soft pink, in the gap between sections four and five */
  {
    left: 660,
    top: 780,
    w: 640,
    h: 380,
    colour: '#F6C8D2',
    opacity: 0.7,
    rotate: 6,
  },
  /* bottom right — large pale yellow, behind the product and collection pages */
  {
    left: 1080,
    top: 760,
    w: 620,
    h: 420,
    colour: '#FFF2A4',
    opacity: 0.85,
    rotate: -12,
  },
] as const;

/**
 * The grain. One fractal-noise tile over the whole sheet at low opacity, laid
 * down under the content rather than over it, so nothing in the artwork is ever
 * dulled by it. The tile is 600 rather than 1536 so the noise repeats at a
 * scale that reads as paper fibre rather than as a single visible pattern.
 */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='600' height='600' filter='url(%23n)'/%3E%3C/svg%3E\")";

/* The board's own ink values, named so the sections below do not repeat them. */
const INK = '#16202A';
const LABEL_INK = '#121A20';
const BODY_INK = '#394047';
const NOTE_INK = '#D96C8A';
const GROUND = '#F8DDE3';

const Paper: React.FC = () => (
  <>
    {WASHES.map((wash, index) => (
      <div
        key={index}
        className="pointer-events-none absolute"
        style={{
          left: wash.left,
          top: wash.top,
          width: wash.w,
          height: wash.h,
          background: wash.colour,
          opacity: wash.opacity,
          transform: `rotate(${wash.rotate}deg)`,
          borderRadius: '44% 56% 52% 48% / 50% 42% 58% 50%',
          filter: 'blur(40px)',
        }}
      />
    ))}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply"
      style={{ backgroundImage: GRAIN, backgroundSize: '600px 600px' }}
    />
  </>
);

/* ————————————————————————————————————————————————————————————
   THE FIVE HEADINGS AND THE FIVE SENTENCES UNDER THEM.

   The descriptions are the brief's own words, kept verbatim and set to their
   own measures: 290 for the first, 390 for the second and the fifth, 330 for
   the third and the fourth. Those widths are not decoration. They are the
   columns' widths, and a description set to a measure its column does not have
   is the single most common way a board like this looks assembled rather than
   drawn.
   ———————————————————————————————————————————————————————————— */

export const CommerceBoard: React.FC = () => {
  const { frameRef, scale } = useBoardScale(COMMERCE_SHEET.width, COMMERCE_SHEET.height);

  return (
    <div
      ref={frameRef}
      className="w-full flex items-center justify-center bg-[#10090B] py-8 lg:min-h-svh lg:py-0"
    >
      {/* The outer box reserves the board's SCALED size and the inner one
          carries the sheet at full size with the transform on it, so that below
          the large breakpoint the section can end where the artwork ends. */}
      <div
        style={{
          width: COMMERCE_SHEET.width * scale,
          height: COMMERCE_SHEET.height * scale,
        }}
        className="relative shrink-0"
      >
        <div
          style={{
            width: COMMERCE_SHEET.width,
            height: COMMERCE_SHEET.height,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
          className="absolute left-0 top-0 overflow-hidden shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute inset-0" style={{ background: GROUND }} />
          <Paper />

          {/* ————— TOP NAVIGATION —————
            The left label and its 350px rule, then the right label and its 70px
            rule. The right label is 49 characters of upper case at 3px of
            tracking and it is the longest single line on the sheet, so it is
            the one thing that most needed measuring rather than estimating:
            Plus Jakarta Sans at 400 gives it 445.5 pixels, which leaves 280
            pixels of clear paper between it and the left label's rule and
            keeps the header from reading as one continuous band. */}
          <div className="absolute inset-x-[48px] top-[40px] flex items-center justify-between">
            <div className="flex items-center gap-5">
              <span
                className="font-body text-[11px] uppercase tracking-[4px]"
                style={{ color: INK }}
              >
                Internship Experience
              </span>
              <span className="h-px w-[350px]" style={{ background: '#8C8585' }} />
            </div>
            <div className="flex items-center gap-5">
              <span
                className="font-body text-[10px] uppercase tracking-[3px]"
                style={{ color: INK }}
              >
                E-commerce&nbsp; / &nbsp;Website Management&nbsp; / &nbsp;Data Management
              </span>
              <span className="h-px w-[70px]" style={{ background: '#8C8585' }} />
            </div>
          </div>

          {/* ————— THE TITLE —————
            Three lines at 55px on 0.92 leading with -2px of tracking, which is
            the setting the brief asks for, and the box is 382 rather than the
            350 the brief also asks for. Those two numbers disagree, and the
            box lost: measured against Bodoni Moda at 400, "E-commerce &" is
            350.6 pixels wide at 55 with -2 of tracking, so a 350 box puts the
            ampersand one pixel past the edge and CSS wraps it onto a fourth
            line, orphaning it under a two-word line. 382 is the width the left
            column actually has — it runs from the 48 margin to section one at
            430 — so the widest line ends at 398.6 and clears the section by 31
            pixels, and the title keeps the size the brief asked for instead of
            being shrunk to 54 to fit a number that was never going to.

            The inline sizing is deliberate. These are the most argued-over
            numbers on the sheet, and inline puts them beside the copy. */}
          <h1
            className="font-editorial absolute"
            style={{
              left: 48,
              top: 105,
              width: 382,
              fontSize: 55,
              lineHeight: 0.92,
              letterSpacing: '-2px',
              fontWeight: 400,
              color: '#08090C',
            }}
          >
            E-commerce &amp;
            <br />
            Website
            <br />
            Management
          </h1>

          {/* ————— THE INTRODUCTION —————
            330px wide at 14px on 1.55, which is a 45-character measure and
            therefore about six lines and 130 pixels. It starts at 285, which is
            28 pixels below where the title's descenders end — the gap the brief
            asks for by saying the title should have generous space around it,
            and the only place on the sheet where a gap is specified as a feeling
            rather than a number. */}
          <p
            className="font-body absolute"
            style={{
              left: 48,
              top: 285,
              width: 330,
              fontSize: 14,
              lineHeight: 1.55,
              color: BODY_INK,
            }}
          >
            Supported the brand&rsquo;s Shopify website and product catalogue, managing product
            uploads, website updates, banners and product organisation. I also worked on Google
            Sheets for product and content data management, helping keep information organised and
            up to date.
          </p>

          {/* ————— SECTION 01, WEBSITE INTERFACE —————
            The board's focal point, and the largest object on it. The laptop
            sits at 180 rather than higher because the two lines of description
            above it end at 160 and a laptop with twenty pixels of air under its
            last line reads as attached to the text rather than as an object
            hanging below a heading. */}
          <SectionLabel colour={LABEL_INK} style={{ position: 'absolute', left: 430, top: 100 }}>
            WEBSITE INTERFACE
          </SectionLabel>
          <p
            className="font-body absolute"
            style={{
              left: 430,
              top: 124,
              width: 290,
              fontSize: 13,
              lineHeight: 1.4,
              color: '#42474B',
            }}
          >
            Updated banners, curated collections and ensured a seamless shopping experience.
          </p>

          <WebsiteLaptop style={{ left: 444, top: 180 }} />
          {/* The phone's top is set so its foot lands at 554, twenty pixels above
            the bottom row's headings at 560. Any lower and the device's shadow
            crosses the label; any higher and it stops overlapping the laptop's
            lower right, which is the only reason it is there. */}
          <WebsitePhone style={{ left: 856, top: 318 }} />

          {/* ————— SECTION 02, WEBSITE BACKEND ————— */}
          <SectionLabel colour={LABEL_INK} style={{ position: 'absolute', left: 1000, top: 100 }}>
            WEBSITE BACKEND
          </SectionLabel>
          <p
            className="font-body absolute"
            style={{
              left: 1000,
              top: 124,
              width: 390,
              fontSize: 13,
              lineHeight: 1.45,
              color: '#42474B',
            }}
          >
            Managed product uploads, updated site content, added banners and organised collections.
          </p>

          <ShopifyPanel style={{ left: 1000, top: 180 }} />

          {/* ————— SECTION 03, PRODUCT CATALOGUE MANAGEMENT —————
            The bottom row's first column, and the sheet's longest heading at
            288 pixels in a 340-pixel column. It takes the same 3px of tracking
            as the four shorter headings rather than a tighter variant of its
            own: the shorter measure was tried and there is 52 pixels of spare
            column, so tightening it would have made this one label differ from
            the other four for no gain. */}
          <SectionLabel colour={LABEL_INK} style={{ position: 'absolute', left: 430, top: 560 }}>
            PRODUCT CATALOGUE MANAGEMENT
          </SectionLabel>
          <p
            className="font-body absolute"
            style={{
              left: 430,
              top: 584,
              width: 330,
              fontSize: 13,
              lineHeight: 1.45,
              color: '#42474B',
            }}
          >
            Maintained product details, images, pricing and organised the catalogue for easy access
            and quick updates.
          </p>

          <ProductCatalogue style={{ left: 430, top: 655 }} />
          <ContentTracker style={{ left: 430, top: 863 }} />
          <ImageFolder style={{ left: 605, top: 863 }} />

          {/* ————— SECTION 04, SITE UPDATES & BANNERS —————
            Three objects and the only place on the board with two of them
            deliberately overlapping, because the brief asks for exactly that
            and because a wide banner, a pop-up and a mobile banner are three
            sizes of the same idea and only look like that when they touch. */}
          <SectionLabel colour={LABEL_INK} style={{ position: 'absolute', left: 790, top: 560 }}>
            SITE UPDATES &amp; BANNERS
          </SectionLabel>
          <p
            className="font-body absolute"
            style={{
              left: 790,
              top: 584,
              width: 330,
              fontSize: 13,
              lineHeight: 1.45,
              color: '#42474B',
            }}
          >
            Designed and updated banners, pop-ups and landing pages to keep the website fresh and
            aligned with brand campaigns.
          </p>

          <WideBanner style={{ left: 790, top: 655 }} />
          <NewsletterPopup style={{ left: 800, top: 800 }} />
          <MobileBanner style={{ left: 940, top: 795 }} />

          {/* ————— SECTION 05, WEBSITE INTERFACE / OTHER PAGES —————
            The sheet's last section, and the only one whose two objects are the
            same size. A product page and a collection page are peers in the
            work, so they are peers on the board; the asymmetry that works
            elsewhere here would be a lie about their relationship. */}
          <SectionLabel colour={LABEL_INK} style={{ position: 'absolute', left: 1150, top: 560 }}>
            WEBSITE INTERFACE / OTHER PAGES
          </SectionLabel>
          <p
            className="font-body absolute"
            style={{
              left: 1150,
              top: 584,
              width: 338,
              fontSize: 13,
              lineHeight: 1.45,
              color: '#42474B',
            }}
          >
            Worked on product pages, collection pages and other key website sections for a smooth
            and consistent user experience.
          </p>
          {/* The brief asks for this sentence at 390px and it is 338px here. The
            brief's number does not fit the column it was specified for: section
            five runs from 1150 to the 1488 right margin, which is 338. Widening
            the measure to 390 would put the block four pixels off the sheet, so
            the column wins. The other two 390 measures — sections two and four
            — are kept exactly as written, because those columns are wide enough
            to hold them. */}

          <ProductPage style={{ left: 1150, top: 655 }} />
          <CollectionPage style={{ left: 1300, top: 690 }} />

          {/* ————— THE THREE DRAWN MARKS —————
            The brief asks for exactly three decorative annotations and gets
            exactly three, which is the only reliable way to satisfy a brief
            that says sparingly: a count rather than an adjective.

            The strokes beside the laptop are three short irregular lines, drawn
            as one path with three subpaths so they read as a single hand's
            gesture rather than as three rules. The arrow between the catalogue
            and the banner section is one curve, and the one to the left of the
            final section is two short lines at a different angle. */}
          <svg
            width="34"
            height="46"
            viewBox="0 0 34 46"
            fill="none"
            aria-hidden="true"
            focusable="false"
            className="absolute"
            style={{ left: 396, top: 300 }}
          >
            <g stroke="#1F1A1C" strokeWidth="1.4" strokeLinecap="round">
              <path d="M6 2c-1.6 7 1 12.5 4.4 16.6" />
              <path d="M16.6 6.5c-1.3 8 1.2 14 4.8 18.2" />
              <path d="M27 12.4c-.9 6.6.8 11.4 3.4 14.8" />
            </g>
          </svg>

          {/* The arrow is in the gutter between the catalogue column and the
            banner column, which is the only place on the sheet where the brief's
            "between catalogue and banner sections" can be taken literally: the
            twenty-pixel gap at x 770, run vertically from the catalogue's foot
            down towards the banner section. It is a tall thin curve rather than
            a wide flat one because the gap is tall and thin, and a wide curve
            laid across it would have to cross a thumbnail. */}
          <SketchArrow
            viewBox="0 0 20 58"
            className="absolute"
            style={{ left: 770, top: 690, width: 20, height: 58 }}
            from={[2, 2]}
            to={[17, 56]}
            bow={[-4, 30]}
            colour="#1F1A1C"
            width={1.4}
          />

          {/* These two strokes sit in the gutter to the left of section five, at
            x 1132, clear of both the banner section's right edge at 1130 and
            the product page's left edge at 1150. */}
          <svg
            width="18"
            height="34"
            viewBox="0 0 18 34"
            fill="none"
            aria-hidden="true"
            focusable="false"
            className="absolute"
            style={{ left: 1132, top: 700 }}
          >
            <g stroke="#1F1A1C" strokeWidth="1.4" strokeLinecap="round">
              <path d="M4 3c-1.2 6 .6 11 3.6 15" />
              <path d="M12 1.4c-1 6.4.8 11.6 3.6 15.4" />
            </g>
          </svg>

          {/* ————— THE CLOSING NOTE —————
            Four lines of brush lettering in the bottom right with a small
            heart, per the brief. It is the board's last word and the only warm
            colour on the sheet, and it sits below the collection page rather
            than beside it because beside it there is no room: the page runs to
            1488 and the sheet ends at 1536, which is 48px, and four lines of
            script want closer to a hundred.

            Seventeen pixels, not the twenty it first went in at. At twenty the
            block is 90 tall and its foot lands on 996, which is twenty pixels
            past the sheet's own 48-pixel bottom margin. Seventeen puts it at
            976, exactly on the margin, and 17px in a brush script is still
            comfortably the largest handwriting on either board. */}
          <Annotation
            size={17}
            colour={NOTE_INK}
            style={{
              position: 'absolute',
              left: 1372,
              top: 900,
              transform: 'rotate(-6deg)',
            }}
          >
            {'Better\nDesigns\nSmoother\nExperiences'}
          </Annotation>

          <span className="absolute" style={{ left: 1336, top: 906 }}>
            <SketchHeart size={16} colour={NOTE_INK} />
          </span>

          {/* A spark, once, at the top of the sheet where the composition is
            heaviest and the paper is emptiest. */}
          <span className="absolute" style={{ left: 1444, top: 64 }}>
            <SparkBurst size={20} colour="#1F1A1C" />
          </span>
        </div>
      </div>
    </div>
  );
};
