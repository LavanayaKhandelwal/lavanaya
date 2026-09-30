import React, { useEffect, useRef, useState } from 'react';

/**
 * SHARED FURNITURE FOR THE AADIYA JEWELS WORK.
 *
 * The hook that scales a sheet to the window, the photograph wrapper, the
 * hand-drawn marks, and the label and annotation faces. It is shared because the
 * social sheets and the e-commerce section were specified as two separate
 * pieces of work and happen to need the same four things, and putting the
 * shared four in one place is what stops them drifting into two slightly
 * different versions of the same label.
 *
 * Nothing in this file carries a colour. The social sheets and the e-commerce
 * section are built to two different palettes, and a shared file that quietly
 * preferred one of them would put the other's palette at the mercy of whichever
 * file was edited last, so every colour is passed in or taken from a token.
 */

/* ————————————————————————————————————————————————————————————
   A SHEET IS A FIXED SHEET.

   The social media specification is an art-directed board with absolute pixel
   positions in it — a 410x280 calendar, a 48px margin, a 55px title. Those
   numbers only mean anything against one fixed sheet, so the sheet is fixed,
   every object is positioned in stage pixels, and the whole thing is scaled as a
   unit to whatever the window happens to be.

   Scaling is done with a transform rather than with fluid units because the
   alternative changes the design. A percentage width would make the 410px
   calendar 24.5% of the board at 1600 and 24.5% of the board at 900, which is
   the same proportion and the wrong object. The brief is a spread, and a
   spread gets smaller, not denser.

   There is no single sheet size to record here. The social work was one
   1600x900 board and is now three sheets of 1600 wide, 680, 600 and 680 tall,
   because three bands inside 900 pixels could only be had by halving every
   print; three numbers where there used to be one is the honest description.

   The e-commerce half of the internship used to be a sheet too — 1536 by 1024,
   three by two — and stopped being one. It is a fluid section now, in the
   interface of the reference project's internship page, and it fits its drawn
   objects to their columns individually rather than scaling one canvas as a
   unit. It still keeps its artwork in absolute pixels inside each object; what
   it gave up is the single sheet they all shared. Its own fit lives in
   CommerceBoard, next to the objects it is fitting, rather than here, because
   there is no longer anything in common between the two halves for a shared
   hook to do.
   ———————————————————————————————————————————————————————————— */

/**
 * The width Tailwind's `lg` breakpoint sits at.
 *
 * The boards need to know whether the window is wide enough to centre a sheet
 * in a full screen or narrow enough to have the section hug it, and that
 * decision has to agree with the classes on the frame. Duplicating the number
 * in JS and in a class name is how the two drift apart — a breakpoint gets
 * raised in the CSS and the boards keep centring on screens that should hug.
 * So the number lives here once, and the frames' `lg:` prefix is the CSS half
 * of the same agreement.
 */
const WIDE_FROM = 1024;

/**
 * Measures the space the board has been given and returns the single scale
 * factor that fits the sheet inside it without ever enlarging past 1:1.
 *
 * The shorter side wins, so on a wide window the board is limited by height and
 * sits centred with dark space either side, which is what a mounted print does.
 * A ResizeObserver does the measuring so the board re-fits on rotation and on
 * the mobile URL bar collapsing, neither of which fire a window resize event.
 *
 * `hug` exists because the sheets are a section of one scrolling page rather
 * than a page of their own, and a section that claims a whole screen is only
 * affordable when the sheet is the whole page. A 16:9 sheet on a phone is 219
 * pixels tall inside an 844-pixel screen, so a full-height section around it
 * spends 625 pixels on letterbox — and with three sheets stacked that is a long
 * scroll through nothing to reach the work. The frame takes the sheet's own
 * height, the width alone decides the scale, and the section ends where the
 * artwork does. The sheet is exactly as large either way; only the padding
 * around it changes.
 *
 * The decision is made from the width the hook has already measured rather than
 * from a breakpoint read at render time, because a value read once during
 * render is stale the moment the window crosses that width — the scale would
 * keep updating on resize while the framing it belongs to did not. Measuring
 * both from the same number keeps them in step on every resize.
 *
 * `fillWidth` is for a run of sheets that is the page rather than an object on
 * a page. The default fits the sheet to the window and centres it, which puts
 * the page's own ground either side of it and above and below it — correct for
 * a mounted print, wrong for a continuous surface, which reads as three boards
 * floating on a background rather than as one piece of paper. With it set, the
 * width alone decides and the height is free, so the sheets meet their margins
 * at the edges of the window and the page ground never appears between them.
 * The social run is currently the only caller and it always fills.
 */
export function useBoardScale(
  sheetWidth: number,
  sheetHeight: number,
  options: { fillWidth?: boolean } = {},
): { frameRef: React.RefObject<HTMLDivElement | null>; scale: number } {
  const { fillWidth = false } = options;
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => {
      const { width, height } = frame.getBoundingClientRect();
      if (width === 0) return;
      const byWidth = width / sheetWidth;
      const byHeight = width < WIDE_FROM ? Number.POSITIVE_INFINITY : height / sheetHeight;
      setScale(fillWidth ? byWidth : Math.min(byWidth, byHeight, 1));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [sheetWidth, sheetHeight, fillWidth]);

  return { frameRef, scale };
}

/* ————————————————————————————————————————————————————————————
   A PHOTOGRAPH, FILLED.

   Photographs on these boards are always cropped to a frame, because a phone
   screen, a grid cell, a category tile and an Instagram post are all rectangles
   with their own proportions and a square original will not fit any of them
   without a crop. The crop is done by the browser rather than baked into the
   files, so replacing a picture never means regenerating an asset.

   Two details are passed in rather than hardcoded because both belong to the
   board and not to the photograph. The alt text names the job the picture does,
   which is known at the call site and not here. The plate colour is what shows
   through in the moment before the file lands, and the two boards' grounds are
   different enough that one fixed tint would be wrong on one of them.

   THE INTRINSIC SIZE IS A THIRD, and it is the only one with a default that is
   right about half the time rather than all of it. The default is the e-commerce
   half of `photos.ts`, where all eleven files really are 1600 square, so those
   need no per-file table. The twelve social files are not square at all — they
   are 1280 tall, or 1206 by 670 for the calendar — and the default is wrong for
   every one of them. That was true before this revision and nothing shows it,
   because the frame is sized in CSS and the image is `object-cover`, so the
   browser's own ratio is overridden either way. What the attributes buy is that
   the element is not lying to the parser about a file's shape while that file is
   still in flight, which is the one moment the ratio is read.

   The seven files the cards use instead of that pool now pass their own numbers,
   and not one of them is square: the backend pair, the catalogue pair, the two
   banner designs and the mobile page in the last card. Three of them are 1206
   wide, one is 1600 and one is 648 — which is why they are named individually
   here rather than left to the default.
   ———————————————————————————————————————————————————————————— */

export const BoardPhoto: React.FC<{
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Ground shown while the file loads. Must come from the board's own palette. */
  plate?: string;
  loading?: 'eager' | 'lazy';
  /** Intrinsic width of the file. Defaults to the pool's 1600. */
  width?: number;
  /** Intrinsic height of the file. Defaults to the pool's 1600. */
  height?: number;
}> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  plate = '#EFD3D9',
  loading = 'lazy',
  width = 1600,
  height = 1600,
}) => (
  <div className={`relative overflow-hidden ${className}`} style={{ background: plate }}>
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      className={`h-full w-full object-cover ${imgClassName}`}
    />
  </div>
);

/* ————————————————————————————————————————————————————————————
   THE DESIGNER'S HAND.

   Three marks, all of them drawn rather than typed: an arrow that curves the
   way a hand draws one, a six-line spark, and a heart. They appear sparingly
   because the brief says sparingly, and their strokes are thin because on a
   board this dense a heavy mark reads as a mistake.

   The arrow is a quadratic curve with a head derived from the tangent at its
   end point rather than a fixed glyph rotated by hand, so it can point
   anywhere without the head detaching from the shaft.
   ———————————————————————————————————————————————————————————— */

type SketchArrowProps = {
  from: readonly [number, number];
  to: readonly [number, number];
  /** Control point. Defaults to a bow that arcs above the midpoint. */
  bow?: readonly [number, number];
  colour: string;
  width?: number;
  viewBox: string;
  className?: string;
  style?: React.CSSProperties;
};

export const SketchArrow: React.FC<SketchArrowProps> = ({
  from,
  to,
  bow,
  colour,
  width = 1.5,
  viewBox,
  className = '',
  style,
}) => {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const [cx, cy] = bow ?? [(x1 + x2) / 2, Math.min(y1, y2) - 16];

  /* The tangent at the end of a quadratic is simply the vector from the
     control point to the endpoint, which is all the head orientation needs. */
  const dx = x2 - cx;
  const dy = y2 - cy;
  const length = Math.hypot(dx, dy) || 1;
  const ux = dx / length;
  const uy = dy / length;

  const headLength = 9;
  const spread = 0.4;
  const barA: readonly [number, number] = [
    x2 - ux * headLength + uy * headLength * spread,
    y2 - uy * headLength - ux * headLength * spread,
  ];
  const barB: readonly [number, number] = [
    x2 - ux * headLength - uy * headLength * spread,
    y2 - uy * headLength + ux * headLength * spread,
  ];

  return (
    <svg
      viewBox={viewBox}
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
        stroke={colour}
        strokeWidth={width}
        strokeLinecap="round"
      />
      <path
        d={`M ${barA[0]} ${barA[1]} L ${x2} ${y2} L ${barB[0]} ${barB[1]}`}
        stroke={colour}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SparkBurst: React.FC<{
  size?: number;
  colour?: string;
  className?: string;
}> = ({ size = 26, colour = '#20232C', className = '' }) => (
  <svg
    viewBox="-12 -12 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <g stroke={colour} strokeWidth="1.2" strokeLinecap="round">
      <line x1="0" y1="-11" x2="0" y2="-4" />
      <line x1="0" y1="4" x2="0" y2="11" />
      <line x1="-11" y1="0" x2="-4" y2="0" />
      <line x1="4" y1="0" x2="11" y2="0" />
      <line x1="-7.8" y1="-7.8" x2="-3" y2="-3" />
      <line x1="3" y1="3" x2="7.8" y2="7.8" />
    </g>
  </svg>
);

export const SketchHeart: React.FC<{
  size?: number;
  colour?: string;
  className?: string;
}> = ({ size = 15, colour = '#26303B', className = '' }) => (
  <svg
    viewBox="0 0 24 22"
    width={size}
    height={size * 0.92}
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M12 20.6C12 20.6 3 15.1 3 9.3 3 6.4 5.2 4 8 4c1.6 0 3.1.8 4 2.1C12.9 4.8 14.4 4 16 4c2.8 0 5 2.4 5 5.3 0 5.8-9 11.3-9 11.3Z"
      fill="none"
      stroke={colour}
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

/* ————————————————————————————————————————————————————————————
   SECTION LABELS.

   The label is the grid each board is hung on, so it is the one thing on the
   two sheets that is byte-identical: same face, same size, same tracking, same
   weight, always sitting above the object it names. Only the ink differs,
   because the two palettes do, and a label that drifted between boards would
   be the first thing anyone would notice as a mistake.
   ———————————————————————————————————————————————————————————— */

/* One tracking value for both boards, and it is written out as literal class
   text rather than assembled at runtime, because the class generator that
   builds the CSS reads source files as raw text and never runs them — a class
   name that only exists after string concatenation is a class name it will
   never find.

   An earlier version of this had a second, tighter value for the two longest
   labels, on the theory that they would collide with their neighbour. Measured
   against Plus Jakarta Sans at 500, the longest of them comes to 288 pixels in
   a 340-pixel column, so there was never a collision to solve and the second
   value only made the two boards' label grid subtly different from each
   other, which is the one thing this component exists to prevent. */
export const SectionLabel: React.FC<{
  children: string;
  /** Ink, from the board's own palette. */
  colour?: string;
  style?: React.CSSProperties;
}> = ({ children, colour = '#071326', style }) => (
  <p style={style} className="font-body text-[11px] font-medium uppercase tracking-[3px]">
    <span style={{ color: colour }}>{children}</span>
  </p>
);

/* ————————————————————————————————————————————————————————————
   HANDWRITTEN ANNOTATIONS.

   Three of them, in the same hand, each one attached to the object it is
   talking about by a drawn arrow. They are set in the site's existing script
   face rather than a new one, and they are rotated by hand rather than aligned
   to anything, because a perfectly level annotation reads as a caption and a
   tilted one reads as something written on the page.
   ———————————————————————————————————————————————————————————— */

export const Annotation: React.FC<{
  children: string;
  size?: number;
  colour?: string;
  style?: React.CSSProperties;
  className?: string;
}> = ({ children, size = 18, colour = '#20202A', style, className = '' }) => (
  <p
    style={{ fontSize: `${size}px`, color: colour, lineHeight: 1.12, ...style }}
    className={`font-hand whitespace-pre-line ${className}`}
  >
    {children}
  </p>
);
