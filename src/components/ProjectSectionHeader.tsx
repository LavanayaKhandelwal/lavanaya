import React from 'react';

export interface ProjectSectionHeaderProps {
  /** Page marker, e.g. PAGE 3 — VISUAL BOARDS */
  eyebrow: string;
  title: string;
  /** One-paragraph lead under the title. */
  lead?: string;
  /**
   * Run the block edge to edge: drop the `max-w-4xl` measure cap and pull the
   * air out of it. Project 3 uses this — its cover, blush bands and closing
   * wave are all full bleed, so a header capped at 896px with 24px of air
   * under the title would strand the marker and read as a separate object.
   */
  fullWidth?: boolean;
  /**
   * Draw the hairline under the header. On by default. The Internship key
   * learnings band turns it off — its four rows already carry their own
   * top rules, so a closing rule as well doubled the lines and read as a
   * fifth row.
   */
  rule?: boolean;
}

/**
 * Section header used across the project pages, matching Project 1's own
 * rhythm: a hairline, a taupe page marker, a display heading and an optional
 * lead paragraph. On cream and on the blush band alike.
 */
export const ProjectSectionHeader: React.FC<ProjectSectionHeaderProps> = ({
  eyebrow,
  title,
  lead,
  fullWidth = false,
  rule = true,
}) => {
  return (
    <div
      className={`${rule ? 'rule-b-light' : ''} ${fullWidth ? 'pb-2 mb-6' : 'pb-6 mb-12 lg:mb-14 max-w-4xl'}`}
    >
      {/* The three lines arrive in the order they are read — marker, heading,
          lead — 90ms apart. It is the one animation every section header on
          every project page shares, so the page has a single rhythm for
          arriving rather than one per file. index.css `.reveal`. */}
      <p className="reveal eyebrow text-[#705955] mb-3">{eyebrow}</p>
      <h2 className="reveal reveal-d1 font-display text-4xl sm:text-5xl text-[#3E2723] tracking-tight mb-4">
        {title}
      </h2>
      {lead && <p className="reveal reveal-d2 font-body text-base text-[#3E2723]/80 leading-loose">{lead}</p>}
    </div>
  );
};
