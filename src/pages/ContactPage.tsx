import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const { contact, student } = portfolioData;

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Folio rule */}
        <div className="flex items-center justify-between eyebrow text-[#A38D89] pb-4 rule-b mb-14">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#F8E5D7]">HOME</Link>
            <span>/</span>
            <span className="text-[#F8E5D7] font-semibold">CORRESPONDENCE &amp; INQUIRIES</span>
          </div>
          <span>STUDIO DISPATCH // {student.name.toUpperCase()}</span>
        </div>

        {/* Intro */}
        <div className="max-w-3xl mb-20 lg:mb-28">
          <p className="eyebrow text-[#D69589] border-l-2 border-[#D69589] pl-4 mb-4">
            STUDIO INTAKE &amp; DIALOGUE
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F8E5D7] leading-[1] tracking-tight mb-6">
            Contact &amp; Inquiries
          </h1>
          <p className="font-body text-base text-[#F8E5D7]/85 leading-loose">
            Open to opportunities across fashion marketing, visual merchandising, content creation and photography. Feel free to send a note or request complete project catalogs.
          </p>
        </div>

        {/* Two-column spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          {/* Correspondence column */}
          <div className="lg:col-span-5">
            <p className="eyebrow text-[#D69589] mb-6 pb-2 rule-b inline-block">Direct Correspondence</p>

            <div>
              <div className="rule-t py-6 grid grid-cols-1 gap-2">
                <span className="eyebrow text-[#A38D89] inline-flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D69589]" />
                  ELECTRONIC MAIL
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-serif-display text-2xl sm:text-3xl text-[#F8E5D7] editorial-link break-all"
                >
                  {contact.email}
                </a>
              </div>

              <div className="rule-t py-6 flex flex-col gap-2">
                <span className="eyebrow text-[#A38D89] inline-flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D69589]" />
                  LOCATION
                </span>
                <p className="font-body text-sm text-[#F8E5D7]">
                  {contact.location}
                </p>
                <p className="plate-caption">Available for on-site &amp; remote projects</p>
              </div>

              <div className="rule-t py-6 flex flex-col gap-2">
                <span className="eyebrow text-[#A38D89] inline-flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D69589]" />
                  TELEPHONE &amp; SIGNAL
                </span>
                <p className="font-mono-code text-sm text-[#F8E5D7]">
                  {contact.phone}
                </p>
              </div>
              <div className="rule-b" />
            </div>

            {/* Socials */}
            <div className="mt-10">
              <p className="eyebrow text-[#D69589] mb-4">Digital Channels &amp; Profiles</p>
              <div>
                {contact.socials.map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rule-t py-5 flex items-center justify-between gap-4 group"
                  >
                    <div>
                      <p className="font-mono-code text-xs font-bold text-[#F8E5D7] uppercase tracking-wider group-hover:text-[#FADBD9] transition-colors">
                        {soc.name}
                      </p>
                      <p className="plate-caption mt-1">{soc.handle}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#A38D89] group-hover:text-[#FADBD9] transition-colors" />
                  </a>
                ))}
                <div className="rule-b" />
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="lg:col-span-7 lg:col-start-7 lg:pt-16">
            <div className="plate">
              <img
                src="/portfolio-assets/IMG_2187.jpg"
                alt="Portrait — curated creative exploration"
                className="w-full h-[420px] lg:h-[560px] object-cover"
              />
            </div>
            <div className="flex items-center justify-between pt-3 mt-3 rule-t">
              <span className="plate-caption">CLOSER LOOK</span>
              <Link
                to="/about"
                className="plate-caption text-[#F8E5D7] editorial-link"
              >
                More About Me →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};