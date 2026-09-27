import React from 'react';
import { SlidePhoto, PhotoPlate } from './SlidePhoto';

interface ProjectCardMediaProps {
  image?: string;
  alt?: string;
  ratio?: string;
  /** Caption typeset on the plate when the cover photo is missing. */
  label?: string;
}

/**
 * Homepage project card media.
 *
 * Both branches render the same frame: a card whose cover photo has not been
 * supplied gets the site's empty hairline frame rather than a separate
 * placeholder treatment, and a card whose file 404s falls back to it too.
 */
export const ProjectCardMedia: React.FC<ProjectCardMediaProps> = ({
  image,
  alt = '',
  ratio = 'aspect-[16/10]',
  label = 'Project cover',
}) => {
  const card =
    'plate transition-all duration-300 group-hover:border-[#D69589]/50 group-hover:shadow-[4px_4px_0px_rgba(214,149,137,0.25)]';
  const frame = `${ratio} overflow-hidden bg-[#3E2723]`;

  if (!image) {
    return (
      <figure className={card}>
        <div className={frame}>
          <PhotoPlate label={label} />
        </div>
      </figure>
    );
  }

  return (
    <figure className={card}>
      <div className={frame}>
        <SlidePhoto
          src={image}
          alt={alt}
          label={label}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
    </figure>
  );
};
