import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F4C9D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-[#3E2723]/10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="relative z-10 font-serif-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#3E2723]">
              Contact &{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="absolute inset-0 -inset-x-2 bottom-1 bg-[#D69589] -rotate-1 rounded-sm -z-10 opacity-90 border-b-2 border-[#3E2723]/20" />
                <span className="relative z-10 italic font-serif-display font-normal">
                  Inquiries
                </span>
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Contact Details (Centered, No Labels) */}
        <div className="flex flex-col items-center text-center space-y-7">
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            href={`mailto:${contact.email}`}
            className="flex items-center justify-center gap-3 font-serif-display text-3xl sm:text-4xl text-[#3E2723] hover:underline underline-offset-4 decoration-[#D69589] break-all"
          >
            <Mail className="w-7 h-7 text-[#3E2723]/60 shrink-0" />
            <span>{contact.email}</span>
          </motion.a>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-center justify-center gap-3 font-mono-code text-lg text-[#3E2723]/80"
          >
            <MapPin className="w-6 h-6 text-[#3E2723]/60 shrink-0" />
            <span>{contact.location}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-3 font-mono-code text-lg text-[#3E2723]/80"
          >
            <Phone className="w-6 h-6 text-[#3E2723]/60 shrink-0" />
            <span>{contact.phone}</span>
          </motion.p>

          {contact.socials[0] && (
            <motion.a
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              href={contact.socials[0].url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 font-mono-code text-lg font-bold text-[#3E2723] border-b border-[#3E2723]/30 hover:border-[#3E2723]"
            >
              <Linkedin className="w-6 h-6 text-[#3E2723]/60 shrink-0" />
              <span>LinkedIn — {contact.socials[0].handle}</span>
            </motion.a>
          )}
        </div>
      </div>
    </section>
  );
};