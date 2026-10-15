
import React from 'react';
import { CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { View } from '../types';

interface InternshipProps {
  onNavigate: (view: View) => void;
  onOpenEnrollment: () => void;
}

const Internship: React.FC<InternshipProps> = ({ onOpenEnrollment }) => {
  const features = [
    { title: 'Industry Mentorship', icon: <Award className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />, desc: 'Learn directly from seniors.' },
    { title: 'Live Client Work', icon: <Briefcase className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />, desc: 'Contribute to actual products.' },
    { title: 'Job Assurance', icon: <GraduationCap className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />, desc: 'Direct pathway to placement.' },
  ];

  return (
    <section id="internship" className="py-10 xs:py-12 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-xl xs:rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] p-4 xs:p-6 sm:p-10 lg:p-16 relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-32 xs:w-48 sm:w-64 lg:w-96 h-32 xs:h-48 sm:h-64 lg:h-96 bg-indigo-600/20 blur-[60px] xs:blur-[80px] sm:blur-[100px] -mr-16 xs:-mr-24 sm:-mr-48 lg:-mr-48 -mt-16 xs:-mt-24 sm:-mt-48 lg:-mt-48" />
          <div className="absolute bottom-0 left-0 w-32 xs:w-48 sm:w-64 lg:w-96 h-32 xs:h-48 sm:h-64 lg:h-96 bg-teal-500/10 blur-[60px] xs:blur-[80px] sm:blur-[100px] -ml-16 xs:-ml-24 sm:-ml-48 lg:-ml-48 -mb-16 xs:-mb-24 sm:-mb-48 lg:-mb-48" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-16 items-center">
            <div className="space-y-5 xs:space-y-6 lg:space-y-8">
              <div className="inline-block px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                Career Fast-Track
              </div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
                Bridge the Gap with our <span className="text-teal-400">Structured Internship</span>
              </h2>
              <p className="text-slate-400 text-[11px] xs:text-sm sm:text-base lg:text-lg leading-relaxed">
                Step out of the classroom and into the corporate world. Our internship program is designed to transform theoretical knowledge into battle-tested industry skills.
              </p>
              
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                {['Guaranteed 12-week intensive curriculum', 'Real-world project ownership', 'Letter of recommendation & Certification'].map(text => (
                  <div key={text} className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 text-slate-300 font-medium text-[11px] xs:text-xs sm:text-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-teal-400 shrink-0" />
                    {text}
                  </div>
                ))}
              </div>

              <button 
                onClick={onOpenEnrollment}
                className="bg-accent-gradient text-white px-5 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:shadow-2xl hover:shadow-teal-500/20 transition-all active:scale-95 w-full sm:w-auto text-[11px] xs:text-xs sm:text-sm"
              >
                Apply for Internship
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-6 mt-6 xs:mt-8 lg:mt-0">
              {features.map((feat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm p-3.5 xs:p-5 sm:p-8 rounded-xl sm:rounded-3xl border border-white/10 space-y-2 xs:space-y-3 sm:space-y-4 hover:bg-white/10 transition-colors group">
                  <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-14 sm:h-14 rounded-lg xs:rounded-xl sm:rounded-2xl bg-white text-teal-600 flex items-center justify-center mb-2.5 xs:mb-3 sm:mb-4 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                    {feat.icon}
                  </div>
                  <h4 className="text-sm xs:text-base sm:text-xl font-bold text-white">{feat.title}</h4>
                  <p className="text-slate-400 text-[9px] xs:text-[10px] sm:text-sm">{feat.desc}</p>
                </div>
              ))}
              <div className="col-span-2 sm:col-span-1 bg-primary-gradient p-3.5 xs:p-5 sm:p-8 rounded-xl sm:rounded-3xl text-white flex flex-col justify-center items-center text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl font-bold mb-1 xs:mb-1 sm:mb-2">95%</div>
                <div className="text-[9px] xs:text-[10px] sm:text-sm font-medium text-indigo-100">Conversion to Full-time Roles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
