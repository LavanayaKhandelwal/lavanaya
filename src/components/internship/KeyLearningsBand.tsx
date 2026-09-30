import React from 'react';
import { motion } from 'motion/react';
import { ProjectSectionHeader } from '../ProjectSectionHeader';
import { portfolioData } from '../../data/portfolioData';

/**
 * THE KEY LEARNINGS BAND — the last section of the internship page.
 *
 * This band was on the page from the first long-scroll build and was taken off
 * it in 6d41b95, when the internship was rebuilt as two fixed boards and the
 * synthesis moved to being a route of its own. It is restored here from de7f6bc,
 * which is the version to restore from and not merely the closest one: de7f6bc
 * is both the commit that tightened the band and the last commit before it was
 * removed, so the reduced gap and the final form are the same revision. What it
 * changed was the band's own air — `py-16 lg:py-20` to `py-10 lg:py-14`, the
 * `mb-20 lg:mb-24` below it to `mb-12 lg:mb-16` (since gone entirely — see the
 * end of this comment), and each outcome row from `py-8` to `py-5` — plus the
 * header, which gained `fullWidth` and lost its
 * hairline, and the closing link through to the synthesis page, which went
 * because the rows already carry their own top rules and a rule under the header
 * as well read as a fifth row. That link is deliberately still not here. The
 * synthesis page at /internship/learnings is a route in its own right and this
 * band is not the way in to it.
 *
 * The four outcomes are the internship's own conclusions rather than a summary of
 * the two halves above them, which is why they are allowed to be prose and why
 * they do not try to be a third board. They arrive on a blush band because they
 * are a change of voice: everything above is evidence, and this is the reading
 * of it.
 *
 * ONE CLASS IS DELIBERATELY NOT HERE. The band was written as
 * `-mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12` inside a page whose body was
 * wrapped in `px-5 sm:px-8 lg:px-12`, so the negative margins were not spacing
 * at all — they cancelled a container that no longer exists, which is how the
 * band got its full-bleed edge. This page has no padded wrapper: the two boards
 * are full-bleed sections of `<main>` and this band is a third one, so the band
 * is already edge to edge and keeping the negative margins would pull it 20, 32
 * and 48 pixels outside the viewport rather than inside it. The padding is kept
 * exactly, which is what makes the rendered result the same band.
 *
 * The ground under it is likewise not the band's own. It was cream, from the
 * page wrapper this band used to sit in, and it is recreated here as a wrapper
 * of this component's own, so that the page still ends on the colour it ended
 * on when this band was last there.
 *
 * THE PAGE NOW ENDS ON THE BAND ITSELF, and this wrapper carries no padding at
 * all. It used to be `pb-16 lg:pb-24`, under a band that also carried
 * `mb-12 lg:mb-16`, which put 112 pixels of empty cream below the last row on a
 * phone and 160 on a desktop — the largest gap on the page, at the one place a
 * reader reaches the end and expects the end to be there. Both are gone. The
 * band's own `py-10 lg:py-14` is still its air, so the last outcome sits 40 or
 * 56 pixels above the band's lower edge rather than 152 or 216, and the wrapper
 * is now a background and nothing else.
 */
export const KeyLearningsBand: React.FC = () => {
  const { internship } = portfolioData;

  return (
    <div className="bg-[#F9F8F2]">
      <section
        id="internship-learnings"
        className="bg-[#FADBD9] px-5 sm:px-8 lg:px-12 py-10 lg:py-14 scroll-mt-24"
      >
        <ProjectSectionHeader fullWidth rule={false} eyebrow="PAGE 4 — KEY LEARNINGS" title="Key Learnings" />

        <div>
          {internship.learningOutcomes.map((l) => (
            <motion.div
              key={l.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rule-t-light grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-5 items-baseline"
            >
              <div className="md:col-span-2">
                <span className="index-figure text-5xl text-[#705955]/60">{l.number}</span>
              </div>
              <div className="md:col-span-3">
                <span className="font-body text-sm sm:text-base font-medium uppercase tracking-[0.12em] text-[#3E2723]">
                  {l.title}
                </span>
              </div>
              <div className="md:col-span-7">
                <p className="font-body text-sm text-[#3E2723]/80 leading-relaxed">{l.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="rule-b-light" />
        </div>
      </section>
    </div>
  );
};
