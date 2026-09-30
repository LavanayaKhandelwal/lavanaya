import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Mail, MapPin, Phone, Linkedin, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

/**
 * Contact section.
 *
 * Structure is mirrored from the curio contact section: one heading over a
 * single hairline — followed by a centred column of icon rows (email,
 * location, phone, socials) that fade and slide in with a small stagger.
 *
 * Colour, typefaces and copy stay Lavanaya's: espresso band, cream ink, rose
 * italic accent and umber hairlines.
 */
export const ContactSection: React.FC = () => {
  const { contact } = portfolioData;
  const reduceMotion = useReducedMotion();
  const revealInitial = reduceMotion ? false : { opacity: 0, y: 15 };
  const revealWhileInView = reduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    /* Top padding is what separates this espresso band from the blush skills
       band above it, so it stays. The bottom is not: this section is the last
       thing on the home page and there is no footer under it, so the old
       py-20 lg:py-28 put 80–112px of dead espresso below the Resume link with
       nothing ever following it. */
    <section id="contact" className="bg-[#3E2723] pt-20 lg:pt-28 pb-10 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER — heading over a single hairline */}
        <div className="rule-b flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4">
          <motion.div
            initial={revealInitial}
            whileInView={revealWhileInView}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
          >
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F8E5D7]">
              Contact &{' '}
              <span className="font-serif-display italic font-normal text-[#D69589]">
                Inquiries
              </span>
            </h2>
          </motion.div>
        </div>

        {/* CONTACT ROWS — centred block, left-aligned rows */}
        <div className="flex justify-center">
          <div className="flex flex-col space-y-7">
            <motion.a
              initial={revealInitial}
              whileInView={revealWhileInView}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.5 }}
              href={`mailto:${contact.email}`}
              className="group flex min-h-11 items-center gap-3 font-mono-code text-lg text-[#F8E5D7]/80 hover:text-[#F8E5D7] hover:underline underline-offset-4 decoration-[#D69589] break-all transition-colors"
            >
              <Mail
                aria-hidden="true"
                className="w-6 h-6 text-[#F8E5D7]/60 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-[#F8E5D7]"
              />
              <span>{contact.email}</span>
            </motion.a>

            <motion.p
              initial={revealInitial}
              whileInView={revealWhileInView}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.05 }}
              className="group flex min-h-11 items-center gap-3 font-mono-code text-lg text-[#F8E5D7]/80"
            >
              <MapPin
                aria-hidden="true"
                className="w-6 h-6 text-[#F8E5D7]/60 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <span>{contact.location}</span>
            </motion.p>

            <motion.a
              initial={revealInitial}
              whileInView={revealWhileInView}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.08 }}
              href={`tel:+91${contact.phone.replace(/\s/g, '')}`}
              className="group flex min-h-11 items-center gap-3 font-mono-code text-lg text-[#F8E5D7]/80 hover:text-[#F8E5D7] hover:underline underline-offset-4 decoration-[#D69589] transition-colors"
            >
              <Phone
                aria-hidden="true"
                className="w-6 h-6 text-[#F8E5D7]/60 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:text-[#F8E5D7]"
              />
              <span>+91 {contact.phone}</span>
            </motion.a>

            {contact.socials.map((soc, i) => (
              <motion.a
                key={i}
                initial={revealInitial}
                whileInView={revealWhileInView}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.12 + i * 0.05 }}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-11 items-center gap-3 font-mono-code text-lg text-[#F8E5D7]/80 hover:text-[#F8E5D7] hover:underline underline-offset-4 decoration-[#D69589] transition-colors"
              >
                <Linkedin
                  aria-hidden="true"
                  className="w-6 h-6 text-[#F8E5D7]/60 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-[#F8E5D7]"
                />
                <span>
                  {soc.name} — {soc.handle} <span className="sr-only">(opens in a new tab)</span>
                </span>
              </motion.a>
            ))}

            <motion.a
              initial={revealInitial}
              whileInView={revealWhileInView}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.27 }}
              href="https://drive.google.com/drive/folders/1aLpe3kiK4BZkfIPav7x9KKTFRxnh9sKZ"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-11 items-center gap-3 font-mono-code text-lg text-[#F8E5D7]/80 hover:text-[#F8E5D7] hover:underline underline-offset-4 decoration-[#D69589] transition-colors"
            >
              <Download
                aria-hidden="true"
                className="w-6 h-6 text-[#F8E5D7]/60 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-[#F8E5D7]"
              />
              <span>Resume</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};