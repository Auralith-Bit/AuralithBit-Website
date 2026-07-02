
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-8 xs:py-10 sm:py-12 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-2.5 xs:px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-5 xs:mb-6 sm:mb-8 lg:mb-12 space-y-1.5 xs:space-y-2 sm:space-y-3">
          <h2 className="text-[8px] xs:text-[9px] sm:text-xs font-bold tracking-widest text-indigo-600 uppercase">Trust & Reviews</h2>
          <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-slate-900">What Our Global Community Says</h3>
        </div>

        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-3.5 xs:p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <Quote className="w-4 h-4 xs:w-5 xs:h-5 sm:w-8 lg:w-10 text-indigo-100 mb-1.5 xs:mb-2 sm:mb-4 lg:mb-6" />
                <p className="text-slate-600 text-[10px] xs:text-[11px] sm:text-sm lg:text-base xl:text-lg leading-relaxed italic">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 lg:gap-4 mt-2.5 xs:mt-3 sm:mt-6 lg:mt-10 pt-2.5 xs:pt-3 sm:pt-6 lg:pt-8 border-t border-slate-50">
                <img src={t.avatar} alt={t.name} className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 lg:w-12 rounded-full ring-2 sm:ring-4 ring-indigo-50" />
                <div>
                  <h4 className="font-bold text-slate-900 text-[10px] xs:text-xs sm:text-sm lg:text-base">{t.name}</h4>
                  <p className="text-[7px] xs:text-[8px] sm:text-[10px] lg:text-xs text-slate-500 font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
