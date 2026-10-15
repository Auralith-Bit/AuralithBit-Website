import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
  ctaText?: string;
  onCta?: () => void;
}

const GlassHero: React.FC<Props> = ({ title, subtitle, image, ctaText, onCta }) => {
  return (
    <section className="relative min-h-auto sm:min-h-[60vh] flex items-center overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0 z-0">
        {image ? (
          <img src={image} alt="hero" className="absolute inset-0 w-full h-full object-cover opacity-30 sm:opacity-40" />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-4xl bg-white/6 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">{title}</h1>
          {subtitle ? <p className="text-sm sm:text-base text-slate-200 max-w-3xl">{subtitle}</p> : null}
          {ctaText ? (
            <div className="mt-6">
              <button onClick={onCta} className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                {ctaText} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default GlassHero;
