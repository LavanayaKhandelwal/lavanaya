import React from 'react';
import { SlidePhoto } from '../SlidePhoto';

const process = ['PITCH', 'TEST', 'FEEDBACK', 'ITERATE'];

const boothPhotos = [
  {
    src: '/portfolio-assets/04_students_testing_fragrances.jpg',
    alt: 'College students gathered around a table testing and smelling fragrance products with multiple perfume bottles and product boxes displayed',
    label: 'Students Testing Fragrances',
    caption: 'STUDENTS TESTING THE FRAGRANCES',
  },
  {
    src: '/portfolio-assets/04_presenter_at_booth.jpg',
    alt: 'Student presenter standing beside the product pitch booth explaining the Uniqlo fragrance concept to visitors',
    label: 'Presenter At Booth',
    caption: 'THE PRODUCT PITCH AT THE BOOTH',
  },
  {
    src: '/portfolio-assets/04_students_interacting.jpg',
    alt: 'Students interacting with the fragrance display and asking questions about the product concept',
    label: 'Students Interacting',
    caption: 'AUDIENCE INTERACTION &amp; QUESTIONS',
  },
  {
    src: '/portfolio-assets/04_students_at_booth.jpg',
    alt: 'Group of college students gathered at the Uniqlo fragrance product pitch booth during the college activation',
    label: 'Students At Booth',
    caption: 'COLLEGE ACTIVATION BOOTH',
  },
];

/**
 * The activation half of PAGE 4 — the college product-pitch booth.
 * Rebuilt from the old standalone 16:9 deck into the page's editorial system.
 */
export const ActivationSection: React.FC = () => {
  return (
    <section className="mb-24 lg:mb-32">
      <div className="rule-t-light pt-8 mb-14 max-w-4xl">
        <p className="eyebrow text-[#705955] mb-3">THE ACTIVATION</p>
        <h3 className="font-display text-3xl sm:text-4xl text-[#3E2723] tracking-tight mb-4">
          The Booth, Built for Students
        </h3>
        <p className="font-body text-base text-[#3E2723]/80 leading-loose">
          A four-step loop that took the concept from pitch to refinement — every round fed the next.
        </p>
      </div>

      {/* Process loop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 mb-16">
        {process.map((step, idx) => (
          <div key={step} className="rule-t-light pt-6 flex items-baseline gap-4">
            <span className="index-figure text-3xl text-[#705955]/60">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className="eyebrow text-[#3E2723]">{step}</span>
          </div>
        ))}
      </div>

      {/* Booth photography */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-12">
        {boothPhotos.map((photo) => (
          <figure key={photo.src} className="rule-t-light pt-6">
            <div className="plate-light p-2">
              <SlidePhoto
                src={photo.src}
                alt={photo.alt}
                label={photo.label}
                className="w-full h-auto object-cover aspect-[16/10]"
              />
            </div>
            <figcaption className="plate-caption-light mt-3">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      {/* Feedback documentation */}
      <figure className="rule-t-light pt-8 mt-16">
        <div className="plate-light p-2">
          <SlidePhoto
            src="/portfolio-assets/04_feedback_documents.jpg"
            alt="Printed feedback forms, response sheets and evaluation notes collected from students during the fragrance product pitch"
            label="Feedback Documents"
            className="w-full h-auto object-cover aspect-[21/9]"
          />
        </div>
        <figcaption className="plate-caption-light mt-3">
          FEEDBACK FORMS &amp; EVALUATION NOTES COLLECTED FROM STUDENTS
        </figcaption>
      </figure>
    </section>
  );
};
