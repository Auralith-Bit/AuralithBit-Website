import React from 'react';
import { ArrowRight, Calendar, User, Clock, Sparkles } from 'lucide-react';
import { UPCOMING_CLASSES, STATS } from '../constants';
import { View } from '../types';

interface HeroProps {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenEnrollment }) => {
  return (
    <section
      id="home"
      className="relative pt-16 pb-4 xs:pb-6 sm:pb-8 lg:pt-20 lg:pb-16 overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(/Hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/70 z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-2.5 xs:px-3 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-3 xs:gap-4 sm:gap-6 lg:gap-8 xl:gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-3 xs:space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-12">
            <div className="space-y-2.5 xs:space-y-3 sm:space-y-4 lg:space-y-6">

              <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2 xs:px-2.5 sm:px-4 py-1 xs:py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-[8px] xs:text-[9px] sm:text-xs font-bold uppercase tracking-widest animate-pulse backdrop-blur-md">
                <Sparkles className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline">Innovating the Digital Frontier</span>
                <span className="sm:hidden">AuralithBit</span>
              </div>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
                Design. Develop.<br />
<span className="text-teal-300">
                  Deliver.
                </span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-100 max-w-xl leading-relaxed font-medium">
                We design with vision, develop with passion, and deliver with excellence.
                AuralithBit empowers the next generation of tech leaders.
              </p>

              <div className="flex flex-col xs:flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 pt-2 lg:pt-4">
                <button
                  onClick={onOpenEnrollment}
                  className="bg-primary-gradient text-white px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-3 lg:py-4 rounded-xl sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all hover:-translate-y-1 active:scale-95 text-xs sm:text-sm"
                >
                  Join our Courses
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('solutions')}
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-3 lg:py-4 rounded-xl sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all hover:-translate-y-1 active:scale-95 text-xs sm:text-sm"
                >
                  Explore Solutions
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md p-2 sm:p-3 lg:p-5 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-extrabold text-teal-400 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-[8px] sm:text-[10px] lg:text-[12px] font-bold text-slate-200 uppercase tracking-widest mt-1 sm:mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Widget - Hidden on mobile, shown on tablet+ */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-2xl p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-white/20">

              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Upcoming Live Classes
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 font-medium">
                    Expert-led technical workshops
                  </p>
                </div>
                <span className="text-[10px] font-black text-teal-300 bg-teal-500/20 px-3 py-1.5 rounded-full uppercase tracking-widest border border-teal-400/40">
                  Live Soon
                </span>
              </div>

              <div className="space-y-4">
                {UPCOMING_CLASSES.slice(0, 3).map((cls) => (
                  <div
                    key={cls.id}
                    className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/10 border border-teal-400/20 hover:border-teal-400 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <div className="w-10 h-10 sm:w-12 shrink-0 rounded-xl sm:rounded-2xl bg-white/20 text-teal-300 flex items-center justify-center">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-white truncate text-sm lg:text-base">
                            {cls.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-4 gap-y-1 text-[10px] sm:text-[11px] text-slate-200 mt-1 sm:mt-1.5 font-medium">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-400" />
                              {cls.time}
                            </span>
                            <span className="flex items-center gap-1 text-teal-300 font-bold">
                              <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              {cls.instructor}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={onOpenEnrollment}
                        className="bg-primary-gradient text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-[10px] sm:text-[11px] font-black hover:scale-110 transition-transform active:scale-95 uppercase tracking-widest shrink-0"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20 text-center">
<button
                  onClick={() => onNavigate('courses')}
                  className="bg-primary-gradient text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-[10px] sm:text-[11px] font-black hover:scale-110 transition-transform active:scale-95 uppercase tracking-widest flex items-center gap-2 mx-auto"
                >
                  View Full Schedule
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute -top-8 sm:-top-12 -right-8 sm:-right-12 w-32 sm:w-48 h-32 sm:h-48 bg-teal-400/20 rounded-full blur-[60px] sm:blur-[80px] -z-10" />
            <div className="absolute -bottom-8 sm:-bottom-12 -left-8 sm:-left-12 w-32 sm:w-48 h-32 sm:h-48 bg-indigo-400/20 rounded-full blur-[60px] sm:blur-[80px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
