import React from 'react';

interface ProjectCardMediaProps {
  image?: string;
  alt?: string;
  ratio?: string;
}

export const ProjectCardMedia: React.FC<ProjectCardMediaProps> = ({ image, alt = '', ratio = 'aspect-[16/10]' }) => {
  if (image) {
    return (
      <figure className="plate">
        <div className={`${ratio} overflow-hidden bg-[#3E2723]`}>
          <img src={image} alt={alt} className="w-full h-full object-cover" />
        </div>
      </figure>
    );
  }

  return (
    <figure className="plate flex flex-col items-center justify-center gap-2 aspect-[16/10]">
      <span className="font-mono-code text-xs uppercase tracking-widest text-[#F8E5D7]/50 font-bold">
        Placeholder Image
      </span>
      <span className="font-mono-code text-[10px] text-[#F8E5D7]/40">
        Project cover image goes here
      </span>
    </figure>
  );
};