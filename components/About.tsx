
import React from 'react';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import { View } from '../types';

interface AboutProps {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-8 xs:py-10 sm:py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 xl:gap-16 items-center">
          
          <div className="space-y-5 xs:space-y-6 lg:space-y-8">
            <div className="space-y-2 xs:space-y-3 sm:space-y-4">
              <h2 className="text-[9px] xs:text-[10px] sm:text-xs font-bold tracking-widest text-indigo-600 uppercase">Our Story</h2>
              <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-slate-900">Your Global Partner in IT Excellence</h3>
              <p className="text-[11px] xs:text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                AuralithBit is a premier nexus of innovation where cutting-edge technology meets world-class education. We bridge the gap between academic theory and industry reality through immersive learning and enterprise delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 lg:gap-6">
              {[
                { title: 'Mission', icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, text: 'Empowering global talent through technical mastery.' },
                { title: 'Vision', icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, text: 'Defining the future of digital product delivery.' },
                { title: 'Values', icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, text: 'Innovation, Integrity, and Human Impact.' }
              ].map((item, i) => (
                <div key={i} className="group p-2.5 xs:p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 xs:space-y-2 sm:space-y-3 hover:bg-white hover:shadow-lg hover:border-teal-500/30 transition-all">
                  <div className="w-7 h-7 xs:w-8 sm:w-10 lg:w-12 bg-white text-teal-600 flex items-center justify-center rounded-lg sm:rounded-xl shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-[11px] xs:text-xs sm:text-sm lg:text-base">{item.title}</h4>
                  <p className="text-[9px] xs:text-[10px] sm:text-xs lg:text-sm text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-6 xs:mt-8 lg:mt-0">
            <div className="bg-slate-50 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] p-4 xs:p-5 sm:p-8 lg:p-12 xl:p-16 border border-slate-100">
              <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 xs:mb-3 sm:mb-4 lg:mb-6">Why We Lead</h3>
              <div className="space-y-2 xs:space-y-3 sm:space-y-4 lg:space-y-6">
                {[
                  "Global standard curriculum updated monthly",
                  "Direct mentorship from Fortune 500 engineers",
                  "Live project integration with real clients",
                  "Comprehensive career placement support"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-1.5 xs:gap-2 sm:gap-3 lg:gap-4">
                    <div className="bg-teal-100 text-teal-600 p-1 rounded-full mt-0.5">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <p className="text-[11px] xs:text-xs sm:text-sm lg:text-base text-slate-600 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => onNavigate('about')}
                className="mt-4 sm:mt-6 lg:mt-8 bg-primary-gradient text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl sm:rounded-xl lg:rounded-2xl font-bold hover:shadow-xl transition-all w-full sm:w-auto"
              >
                Discover More
              </button>
            </div>
            {/* Background Accent */}
            <div className="absolute -z-10 -top-10 -right-10 w-32 sm:w-40 lg:w-64 h-32 sm:h-40 lg:h-64 bg-indigo-100 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
