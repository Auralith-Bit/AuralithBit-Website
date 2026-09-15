import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { STATS } from '../constants';
import { View } from '../types';

interface HeroProps {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenEnrollment }) => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden min-h-[85vh] flex items-center"
      style={{
        backgroundImage: 'url(/Hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Directional scrim: dark only behind the text, transparent by the right
          third, so the photo stays genuinely visible rather than tinted out. */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-6 sm:space-y-8">

          <div className="animate-in fade-in slide-in-from-bottom-5 duration-500 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-white text-indigo-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3 h-3" />
            Innovating the Digital Frontier
          </div>

          <h1
            className="animate-in fade-in slide-in-from-bottom-5 duration-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.35)]"
            style={{ animationDelay: '80ms' }}
          >
            Design. Develop.
            <br />
            <span className="text-teal-300">Deliver.</span>
          </h1>

          <p
            className="animate-in fade-in slide-in-from-bottom-5 duration-500 text-sm sm:text-base lg:text-lg text-slate-100 leading-relaxed font-medium [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]"
            style={{ animationDelay: '160ms' }}
          >
            We design with vision, develop with passion, and deliver with excellence.
            AuralithBit empowers the next generation of tech leaders.
          </p>

          <div
            className="animate-in fade-in slide-in-from-bottom-5 duration-500"
            style={{ animationDelay: '240ms' }}
          >
            <button
              onClick={onOpenEnrollment}
              className="group bg-primary-gradient text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold flex items-center gap-2 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all hover:-translate-y-1 active:scale-95 text-sm"
            >
              Join our Courses
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Stats — light cards, kept as a quiet supporting row, not the main event */}
          <div
            className="animate-in fade-in slide-in-from-bottom-5 duration-500 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4"
            style={{ animationDelay: '320ms' }}
          >
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/95 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-indigo-700 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;