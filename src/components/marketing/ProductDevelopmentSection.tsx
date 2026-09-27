import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SlidePhoto } from '../SlidePhoto';

const stages = [
  {
    src: '/portfolio-assets/03_concept_sketches.jpg',
    alt: 'Hand-drawn fragrance concept sketches exploring bottle proportions and cap design',
    label: 'Concept Sketches',
    caption: 'CONCEPT SKETCHES',
  },
  {
    src: '/portfolio-assets/03_prototype_products.jpg',
    alt: 'Early fragrance prototypes and test bottles produced during development',
    label: 'Prototype Products',
    caption: 'PROTOTYPE SAMPLES',
  },
  {
    src: '/portfolio-assets/03_branded_packaging.jpg',
    alt: 'Branded packaging mockups for the Uniqlo fragrance line in minimal white and red packaging',
    label: 'Branded Packaging',
    caption: 'BRANDED PACKAGING',
  },
  {
    src: '/portfolio-assets/03_final_products.jpg',
    alt: 'Final production fragrance bottles presented in a clean studio arrangement',
    label: 'Final Products',
    caption: 'FINAL PRODUCTS',
  },
];

/**
 * The product half of PAGE 4 — concept to finished product.
 * Rebuilt from the old standalone portrait deck into the page's editorial system.
 */
export const ProductDevelopmentSection: React.FC = () => {
  return (
    <section className="mb-24 lg:mb-32">
      <div className="rule-t-light pt-8 mb-14 max-w-4xl">
        <p className="eyebrow text-[#705955] mb-3">CONCEPT TO PRODUCT</p>
        <h3 className="font-display text-3xl sm:text-4xl text-[#3E2723] tracking-tight mb-4">
          Making the Idea Real
        </h3>
        <p className="font-body text-base text-[#3E2723]/80 leading-loose">
          The fragrance family that came out of the research — drawn, prototyped, packaged and finalised.
        </p>
      </div>

      {/* Hero plate-light */}
      <figure className="mb-16">
        <div className="plate-light p-2">
          <SlidePhoto
            src="/portfolio-assets/03_four_bottles_hero.jpg"
            alt="The four finished Uniqlo fragrance bottles — Hana, Kaze, Mizu and Sora — arranged together in a studio still life"
            label="Four Bottles Hero"
            className="w-full h-auto object-cover aspect-[21/9]"
          />
        </div>
        <figcaption className="plate-caption-light mt-3 text-center">
          HANA · KAZE · MIZU · SORA
        </figcaption>
      </figure>

      {/* Development stages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
        {stages.map((stage, idx) => (
          <figure key={stage.src} className="rule-t-light pt-6">
            <div className="flex items-baseline gap-3 mb-5">
              <span className="index-figure text-3xl text-[#705955]/60">
                {String(idx + 1).padStart(2, '0')}
              </span>
              {idx < stages.length - 1 && (
                <ArrowRight className="w-4 h-4 text-[#705955] ml-auto" aria-hidden="true" />
              )}
            </div>
            <div className="plate-light p-2">
              <SlidePhoto
                src={stage.src}
                alt={stage.alt}
                label={stage.label}
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            <figcaption className="plate-caption-light mt-3">{stage.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
