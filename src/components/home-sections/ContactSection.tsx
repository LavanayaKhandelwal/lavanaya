import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="rule-b pb-6 mb-16 lg:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-9"
          >
            <p className="eyebrow text-[#A38D89] mb-3">Contact</p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1] tracking-tight text-[#F8E5D7]">
              Contact &{' '}
              <span className="font-serif-display italic font-normal text-[#F4C9D6]">
                Inquiries
              </span>
            </h2>
          </motion.div>
          <p className="eyebrow text-[#A38D89] lg:col-span-3 lg:text-right">Open to opportunities</p>
        </div>

        {/* Contact Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <motion.a
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              href={`mailto:${contact.email}`}
              className="rule-t pt-6 flex items-baseline justify-between gap-6 group"
            >
              <span className="eyebrow text-[#D69589] shrink-0">Email</span>
              <span className="font-serif-display text-2xl sm:text-4xl text-[#F8E5D7] break-all editorial-link">
                {contact.email}
              </span>
            </motion.a>

            {[
              { icon: MapPin, text: contact.location },
              { icon: Phone, text: contact.phone }
            ].map((row, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * (idx + 1) }}
                className="rule-t pt-6 flex items-baseline justify-between gap-6"
              >
                <span className="eyebrow text-[#D69589] shrink-0">
                  {idx === 0 ? 'Location' : 'Phone'}
                </span>
                <span className="font-mono-code text-lg text-[#F8E5D7]/85">
                  {row.text}
                </span>
              </motion.p>
            ))}

            {contact.socials[0] && (
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                href={contact.socials[0].url}
                target="_blank"
                rel="noreferrer"
                className="rule-t py-6 flex items-baseline justify-between gap-6 group"
              >
                <span className="eyebrow text-[#D69589] shrink-0">Social</span>
                <span className="font-mono-code text-lg font-bold text-[#F8E5D7] editorial-link">
                  LinkedIn — {contact.socials[0].handle}
                </span>
              </motion.a>
            )}
            <div className="rule-b" />
          </div>

          <div className="lg:col-span-5 relative hidden lg:block" aria-hidden="true">
            <div className="border-l border-[#A38D89]/20 h-full pl-10 -ml-px space-y-6">
              <p className="eyebrow text-[#A38D89]">Correspondence</p>
              <p className="font-body text-sm text-[#F8E5D7]/50 leading-relaxed max-w-xs">
                Responses typically dispatched within 24–48 hours.
              </p>
              <p className="font-serif-display italic text-2xl text-[#A38D89]/60 leading-snug">
                {contact.availability}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};