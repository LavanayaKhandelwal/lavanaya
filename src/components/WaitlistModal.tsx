import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Copy, Sparkles, ArrowRight } from 'lucide-react';
import { FlowerMark, HandDrawnStar, WashiTape } from './CustomDoodles';
import { WaitlistSubmission } from '../types';
import { portfolioData } from '../data/portfolioData';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose, initialRole = 'Exhibition / Curator' }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(initialRole);
  const [submitted, setSubmitted] = useState<WaitlistSubmission | null>(() => {
    try {
      const saved = localStorage.getItem('aria_portfolio_inquiry_ticket');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newSubmission: WaitlistSubmission = {
        email: email.trim(),
        role,
        submittedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        ticketNumber: Math.floor(1000 + Math.random() * 9000),
      };
      setSubmitted(newSubmission);
      try {
        localStorage.setItem('aria_portfolio_inquiry_ticket', JSON.stringify(newSubmission));
      } catch {
        // ignore
      }
      setIsSubmitting(false);
    }, 600);
  };

  const copyTicket = () => {
    if (!submitted) return;
    navigator.clipboard.writeText(`STUDIO-INQUIRY-PASS-#${submitted.ticketNumber} (${submitted.email})`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop with faint paper blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#3E2723]/40 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 24, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-2xl p-6 sm:p-8 paper-shadow-lg z-10 overflow-hidden"
          >
            {/* Washi tape decoration */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <WashiTape color="#FADBD9" width="w-28" />
            </div>

            {/* Close button */}
            <button
              id="close-waitlist-modal"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full border border-[#A38D89]/30 hover:border-[#A38D89] hover:bg-[#3E2723]/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 text-[#F8E5D7]" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FlowerMark size={22} />
                  <span className="font-mono-code text-xs uppercase tracking-widest text-[#F8E5D7]/60">
                    Studio Inquiries • Class of '26
                  </span>
                </div>

                <h3 className="font-serif-display text-3xl sm:text-4xl leading-tight text-[#F8E5D7] mb-3">
                  Request Full Portfolio & Studio Visit
                </h3>

                <p className="font-body text-sm text-[#F8E5D7]/80 leading-relaxed mb-6">
                  Inquire about visual merchandising commissions, freelance retail strategy, exhibition catalogs, or schedule an in-person studio visit in New York or London.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono-code text-xs uppercase tracking-wider text-[#F8E5D7] mb-1.5">
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="curator.studio@gallery.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#F8E5D7] border-[1.5px] border-[#A38D89] rounded-xl px-4 py-3 font-mono-code text-sm text-[#3E2723] placeholder-[#3E2723]/40 focus:outline-hidden focus:ring-2 focus:ring-[#FADBD9]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-code text-xs uppercase tracking-wider text-[#F8E5D7] mb-1.5">
                      Nature of Correspondence
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        'Exhibition / Curator',
                        'Retail Brand VM',
                        'Editorial Styling',
                        'Agency Role',
                        'Studio Visit',
                        'Thesis Catalog PDF'
                      ].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRole(r)}
                          className={`py-2 px-2 text-xs font-mono-code rounded-lg border-[1.5px] transition-all text-center leading-tight ${
                            role === r
                              ? 'bg-[#FADBD9] border-[#A38D89] font-bold paper-shadow-sm'
                              : 'bg-transparent border-[#A38D89]/40 hover:border-[#A38D89] text-[#F8E5D7]/80'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-[#D69589] text-[#3E2723] hover:bg-[#A38D89] border-[1.5px] border-[#A38D89] py-3.5 px-6 rounded-xl font-mono-code text-sm tracking-wider uppercase paper-shadow-hover transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Inscribing Studio Log...</span>
                      ) : (
                        <>
                          <span>Submit Studio Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="font-mono-code text-[11px] text-center text-[#A38D89] mt-3">
                    ✦ Responses typically dispatched within 24–48 hours.
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center py-2">
                {/* Physical ticket look */}
                <div className="relative bg-[#3E2723] border-[1.5px] border-[#A38D89]/40 rounded-xl p-6 mb-6 paper-shadow text-left overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[#FADBD9]/30 border border-[#A38D89]/10" />
                  
                  <div className="flex items-start justify-between border-b border-[#A38D89]/20 pb-4 mb-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono-code uppercase text-[#F8E5D7]/60">
                        <FlowerMark size={16} />
                        {portfolioData.student.name} Studio Pass
                      </div>
                      <div className="font-serif-display text-2xl text-[#F8E5D7] mt-1">
                        Inquiry Received
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-[#FADBD9] text-[#3E2723] border border-[#A38D89] px-2 py-0.5 rounded text-[11px] font-mono-code font-bold">
                        #{submitted.ticketNumber}
                      </span>
                      <div className="font-mono-code text-[10px] text-[#A38D89] mt-1">
                        {submitted.submittedAt}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs font-mono-code">
                    <div className="flex justify-between">
                      <span className="text-[#A38D89]">CONTACT:</span>
                      <span className="font-bold text-[#F8E5D7] truncate max-w-[200px]">{submitted.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A38D89]">INQUIRY TYPE:</span>
                      <span className="text-[#F8E5D7]">{submitted.role}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A38D89]">STATUS:</span>
                      <span className="text-[#F8E5D7] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-[#D69589]" />
                        Queued for Response
                      </span>
                    </div>
                  </div>

                  {/* Perforation line */}
                  <div className="border-t-2 border-dashed border-[#A38D89]/30 mt-4 pt-3 flex justify-between items-center text-[10px] font-mono-code text-[#A38D89]">
                    <span>PORTFOLIO DOSSIER PASS</span>
                    <span>NEW YORK / LONDON</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#D69589]" />
                  <span className="font-serif-display text-xl text-[#F8E5D7]">Inquiry Logged</span>
                </div>
                <p className="font-body text-xs text-[#F8E5D7]/80 max-w-sm mx-auto mb-6">
                  Thank you for reaching out. A complete high-resolution PDF portfolio dossier and thesis catalog will be dispatched to your inbox shortly.
                </p>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={copyTicket}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#705955] border border-[#705955] rounded-lg text-xs font-mono-code text-[#F8E5D7] paper-shadow-sm hover:translate-y-[-1px] transition-all cursor-pointer"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied to Clipboard' : 'Copy Reference #'}</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-transparent hover:bg-[#3E2723]/5 border border-[#A38D89]/40 rounded-lg text-xs font-mono-code text-[#F8E5D7] transition-all cursor-pointer"
                  >
                    Return to Portfolio
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
