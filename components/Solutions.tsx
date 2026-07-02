
import React from 'react';
import { SOLUTIONS } from '../constants';
import { View } from '../types';

interface SolutionsProps {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onNavigate, onOpenEnrollment }) => {
  return (
    <section id="solutions" className="py-10 xs:py-12 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 xs:mb-8 sm:mb-16 lg:mb-20 space-y-3 xs:space-y-4">
          <h2 className="text-[10px] xs:text-xs sm:text-sm font-bold tracking-widest text-indigo-600 uppercase">Our Expertise</h2>
          <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">Innovative IT Solutions for Scaling Businesses</h3>
          <p className="text-[11px] xs:text-sm sm:text-base lg:text-lg text-slate-600">From concept to deployment, we build digital products that set you apart from the competition.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
          {SOLUTIONS.map((sol) => (
            <div 
              key={sol.id} 
              onClick={() => onNavigate('solutions')}
              className="bg-white p-4 xs:p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-500 transition-all duration-300 group cursor-pointer text-center flex flex-col items-center"
            >
              <div className="w-10 h-10 xs:w-12 sm:w-14 sm:h-14 rounded-lg xs:rounded-xl sm:rounded-2xl bg-white text-teal-600 flex items-center justify-center mb-3 xs:mb-4 sm:mb-8 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                {sol.icon}
              </div>
              <h4 className="text-base xs:text-lg sm:text-xl font-bold text-slate-900 mb-2 xs:mb-3 sm:mb-4">{sol.title}</h4>
              <p className="text-slate-500 text-[11px] xs:text-sm leading-relaxed">{sol.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 xs:mt-8 sm:mt-16 lg:mt-20 text-center">
           <button 
            onClick={onOpenEnrollment}
            className="bg-primary-gradient text-white px-5 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 rounded-full text-[10px] xs:text-xs sm:text-sm font-bold hover:shadow-lg transition-all active:scale-95"
           >
             Get a Free Quote
           </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
