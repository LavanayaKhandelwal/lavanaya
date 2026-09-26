import { useState } from 'react';

import { portfolioData } from '../../data/portfolioData';

/**
 * Section 2 — "About me!" plate on soft pink (#FADBD9).
 * Three-column composition: the About / journey copy on the left, the central
 * portrait (/portfolio-assets/lavanaya-portrait.jpg), and the education /
 * interests / exploring credentials stacked tight on the right.
 */

const { student } = portfolioData;

/** About copy — the journey so far, then today's focus. */
const ABOUT = [student.secondaryStatement, student.currentFocus];

/** Small caps plate label used by the right-hand credential column. */
function PlateHeading({ icon, children }: { icon: string; children: string }) {
  return (
    <p className="font-inter text-sm font-bold text-[#3E2723]" style={{ letterSpacing: '0.2em' }}>
      <span aria-hidden className="mr-2">{icon}</span>
      {children}
    </p>
  );
}

function Portrait() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="relative mx-auto h-[400px] w-[300px] md:h-[540px] md:w-[400px]">
      <div className="relative mx-auto h-full w-[280px] overflow-hidden md:w-[360px]">
        {/* Graceful fallback — abstract figure in deeper burgundy tones */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 top-4 flex flex-col items-center justify-end">
          <div className="h-24 w-20 rounded-[48%] bg-[#7A2A2E] md:h-28 md:w-24" />
          <div className="-mt-3 h-52 w-60 rounded-t-[120px] bg-[#5E1F22] md:h-64 md:w-72" />
        </div>

        {imgOk && (
          <img
            src="/portfolio-assets/lavanaya-portrait.jpg"
            alt="Portrait of Lavanaya Khandelwal"
            className="absolute inset-0 h-full w-full object-cover object-[50%_45%]"
            onError={() => setImgOk(false)}
          />
        )}
      </div>

      {/* Hand-drawn dotted arrow removed — clean gutter beside the portrait */}
    </div>
  );
}

export function WhyMeSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#FADBD9] px-6 pt-6 md:px-16 md:pt-8" aria-label="About me">
      <div className="grid items-center gap-8 md:mx-auto md:min-h-[540px] md:w-full md:max-w-6xl md:grid-cols-[1fr_auto_1fr] md:gap-12">
        {/* Left column — about me */}
        <div className="space-y-6">
          {ABOUT.map((copy) => (
            <p key={copy.slice(0, 24)} className="mx-auto max-w-[34ch] text-justify hyphens-auto font-body text-[15px] leading-relaxed text-[#3E2723]/85 md:text-base">
              {copy}
            </p>
          ))}
        </div>

        {/* Portrait — "About me!" sits above the image in flow (Times New
            Roman), so it never overlaps the photo */}
        <div className="relative">
          <h2 className="font-wordmark-serif mb-5 text-center text-5xl leading-none text-[#3E2723] md:text-7xl">
            About <em className="italic">me!</em>
          </h2>
          <Portrait />
        </div>

        {/* Right column — education, interests and explorations on an even,
            compact rhythm (equal block height + fixed gap, no forced spread) */}
        <div className="space-y-8 md:flex md:h-full md:flex-col md:justify-center md:gap-8 md:justify-self-start md:pb-0">
          {/* Blocks share one height so the three headings stay in rhythm,
              with no dead space under the shorter content */}
          <div className="max-w-[30ch]">
            <PlateHeading icon="🎓">EDUCATION</PlateHeading>
            <p className="mt-5 font-body text-[15px] font-medium leading-relaxed text-[#3E2723] md:text-base">
              {student.degree}
            </p>
            <p className="mt-1 font-body text-[15px] leading-relaxed text-[#3E2723]/75 md:text-base">
              {student.institution} | {student.year}
            </p>
          </div>

          {/* What I'm interested in — one line with pipe separators */}
          <div className="max-w-[34ch]">
            <PlateHeading icon="🎯">{student.interests.heading}</PlateHeading>
            <p className="mt-4 font-body text-sm leading-snug text-[#3E2723]/75">
              {student.interests.chips.join(' | ')}
            </p>
          </div>

          {/* What I love exploring — one line with pipe separators */}
          <div className="max-w-[34ch]">
            <PlateHeading icon="🔍">{student.exploring.heading}</PlateHeading>
            <p className="mt-4 font-body text-sm leading-snug text-[#3E2723]/75">
              {student.exploring.chips.join(' | ')}
            </p>
          </div>
        </div>
      </div>

      {/* Lace trim — a fixed-height window cropped around the lace band itself
          (band centre ≈ 67% of the 2172×724 asset), so the whole band shows
          while the transparent padding above/below stays cropped out. vw
          heights keep the full band visible at any viewport width. Full-bleed
          (100vw) so the pattern keeps running past the viewport. */}
      <div className="relative -mx-6 mt-8 h-[10vw] w-screen max-w-none overflow-hidden md:-mx-16 md:h-[7vw]" style={{ left: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src="/portfolio-assets/lace-border.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[50%_67%]"
        />
      </div>
    </section>
  );
}
