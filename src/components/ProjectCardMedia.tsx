import React from 'react';

interface ProjectCardMediaProps {
  image?: string;
  alt?: string;
}

export const ProjectCardMedia: React.FC<ProjectCardMediaProps> = ({ image, alt = '' }) => {
  if (image) {
    return (
      <div className="mb-5 overflow-hidden rounded-xl border-[1.5px] border-[#A38D89] bg-[#F8E5D7]">
        <img src={image} alt={alt} className="w-full aspect-[16/9] object-cover" />
      </div>
    );
  }

  return (
    <div className="mb-5 aspect-[16/9] rounded-xl border-2 border-dashed border-[#A38D89]/30 bg-[#A38D89] flex flex-col items-center justify-center gap-2">
      <span className="font-mono-code text-xs uppercase tracking-widest text-[#F8E5D7]/50 font-bold">
        Placeholder Image
      </span>
      <span className="font-mono-code text-[10px] text-[#F8E5D7]/40">
        Project cover image goes here
      </span>
    </div>
  );
};