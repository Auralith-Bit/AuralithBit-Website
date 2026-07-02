
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COURSES } from '../constants';
import { View } from '../types';

interface CoursesProps {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
}

const Courses: React.FC<CoursesProps> = ({ onNavigate, onOpenEnrollment }) => {
  return (
    <section id="courses" className="py-8 xs:py-10 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 xs:mb-8 sm:mb-12 lg:mb-16 gap-2 xs:gap-3 sm:gap-4 lg:gap-6">
          <div className="max-w-xl">
            <h2 className="text-[9px] xs:text-[10px] sm:text-xs font-bold tracking-widest text-indigo-600 uppercase mb-1.5 xs:mb-2 sm:mb-3 lg:mb-4">Master Your Craft</h2>
            <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-slate-900 leading-tight">Flagship Training Programs</h3>
            <p className="text-[11px] xs:text-xs sm:text-sm lg:text-lg text-slate-600 mt-1.5 xs:mt-2 sm:mt-3 lg:mt-4">Accelerate your career with industry-vetted courses designed to make you hireable in the global market.</p>
          </div>
          <button 
            onClick={() => onNavigate('courses')}
            className="bg-primary-gradient text-white px-3 xs:px-4 sm:px-5 lg:px-6 py-1.5 xs:py-2 sm:py-2.5 lg:py-3 rounded-full text-[9px] xs:text-[10px] sm:text-xs lg:text-sm font-bold flex items-center gap-1.5 xs:gap-2 hover:shadow-lg transition-all group"
          >
            View All Courses
            <ArrowRight className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 lg:w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          {COURSES.map((course) => (
            <div 
              key={course.id} 
              onClick={() => onNavigate('courses')}
              className="group bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 xs:p-4 sm:p-5 lg:p-8 border border-slate-200 hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              <div className="w-9 h-9 xs:w-10 sm:w-12 lg:w-14 rounded-lg xs:rounded-xl sm:rounded-xl lg:rounded-2xl bg-white text-teal-600 flex items-center justify-center mb-2.5 xs:mb-3 sm:mb-4 lg:mb-6 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                {course.icon}
              </div>
              <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-teal-600 mb-1 xs:mb-1.5 sm:mb-2">{course.tag}</span>
              <h4 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-1.5 xs:mb-2 sm:mb-3 lg:mb-4">{course.title}</h4>
              <p className="text-slate-500 text-[11px] xs:text-xs sm:text-sm leading-relaxed mb-3 xs:mb-4 sm:mb-6 lg:mb-8 flex-grow">{course.description}</p>
              <div className="pt-2.5 xs:pt-3 sm:pt-4 lg:pt-6 border-t border-slate-50 flex items-center justify-between">
                <button 
                  onClick={(e) => { e.stopPropagation(); onOpenEnrollment(); }}
                  className="bg-primary-gradient text-white px-2 xs:px-2.5 sm:px-3 lg:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-[8px] xs:text-[9px] sm:text-[10px] font-bold hover:shadow-md transition-all active:scale-95"
                >
                  Enrolling Now
                </button>
                <div className="w-5 h-5 xs:w-6 sm:w-7 lg:w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-teal-600 group-hover:text-white transition-all">
                  <ArrowRight className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 lg:w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Courses;
