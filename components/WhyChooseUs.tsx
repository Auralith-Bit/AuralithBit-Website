
import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { View } from '../types';

interface WhyChooseUsProps {
  onNavigate: (view: View) => void;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate }) => {
  return (
    <section className="py-10 xs:py-12 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-xl xs:rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" alt="Team collaborating around a table" className="w-full object-cover aspect-square" />
            </div>
            {/* Floating card - visible on tablet and up */}
            <div className="hidden sm:block absolute -bottom-4 xs:-bottom-6 sm:-bottom-10 -right-2 xs:-right-4 sm:-right-10 bg-white px-5 py-3 sm:px-7 sm:py-5 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100">
              <p className="text-slate-800 font-bold text-sm sm:text-base">AuralithBit</p>
              <span className="text-xs sm:text-sm text-slate-500">Bhairahawa, Nepal</span>
            </div>
          </div>
          
          <div className="space-y-6 xs:space-y-8 lg:space-y-12 mt-6 xs:mt-8 lg:mt-0">
            <div>
              <h2 className="text-[10px] xs:text-xs sm:text-sm font-bold tracking-widest text-indigo-600 uppercase mb-1.5 xs:mb-2 sm:mb-4">Why AuralithBit?</h2>
              <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 xs:mb-4 sm:mb-6">Practical Learning & Digital Services</h3>
              <p className="text-[11px] xs:text-sm sm:text-base lg:text-lg text-slate-600">Explore IT courses, internship tracks, and digital services from a team based in Bhairahawa, Nepal.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 xs:p-5 sm:p-8 bg-white border border-teal-500/30 rounded-xl sm:rounded-3xl group cursor-pointer hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 flex flex-col"
                  onClick={() => onNavigate('about')}
                >
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-lg xs:rounded-xl sm:rounded-2xl bg-white text-teal-600 flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 border border-slate-50">
                    {item.icon}
                  </div>
                  <h4 className="text-base xs:text-lg sm:text-xl font-bold text-slate-900 mb-1.5 xs:mb-2 sm:mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-[11px] xs:text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
