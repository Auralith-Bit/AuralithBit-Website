
import React from 'react';
import { 
  Rocket, 
  Lightbulb, 
  Users, 
  Award, 
  TrendingUp, 
  Code, 
  Palette, 
  BarChart, 
  Smartphone, 
  Layout, 
  Cpu, 
  ArrowUpRight, 
  CheckCircle2
} from 'lucide-react';
import { View } from '../types';

const InternshipPage: React.FC<{ onNavigate: (v: View) => void, onOpenEnrollment: () => void }> = ({ onOpenEnrollment }) => {
  const whyIntern = [
    { 
      title: 'Real Projects', 
      desc: 'Work on actual client products, not toy examples.', 
      icon: <Lightbulb className="w-6 h-6" /> 
    },
    { 
      title: 'Expert Mentorship', 
      desc: 'Guided by seniors with 5+ years of experience.', 
      icon: <Users className="w-6 h-6" /> 
    },
    { 
      title: 'Certification', 
      desc: 'Industry-recognized internship certificate.', 
      icon: <Award className="w-6 h-6" /> 
    },
    { 
      title: 'Stipend', 
      desc: 'Performance-based stipend for your hard work.', 
      icon: <TrendingUp className="w-6 h-6" /> 
    }
  ];

  const programs = [
    { 
      title: 'Web Development', 
      duration: '3-6 months', 
      req: 'HTML/CSS/JS required', 
      icon: <Code className="w-5 h-5" /> 
    },
    { 
      title: 'UI/UX Design', 
      duration: '3-4 months', 
      req: 'Figma basics required', 
      icon: <Palette className="w-5 h-5" /> 
    },
    { 
      title: 'Digital Marketing', 
      duration: '2-3 months', 
      req: 'Basic marketing knowledge', 
      icon: <BarChart className="w-5 h-5" /> 
    },
    { 
      title: 'Mobile App', 
      duration: '4-6 months', 
      req: 'React Native/Flutter basics', 
      icon: <Smartphone className="w-5 h-5" /> 
    },
    { 
      title: 'Graphics Design', 
      duration: '2-3 months', 
      req: 'Adobe Suite required', 
      icon: <Layout className="w-5 h-5" /> 
    },
    { 
      title: 'Full Stack', 
      duration: '6 months', 
      req: 'MERN knowledge required', 
      icon: <Cpu className="w-5 h-5" /> 
    }
  ];

  const steps = [
    { id: 1, title: 'Application', desc: 'Submit your CV and portfolio link.' },
    { id: 2, title: 'Screening', desc: 'Initial review of skills and background.' },
    { id: 3, title: 'Interview', desc: 'Technical and cultural fit conversation.' },
    { id: 4, title: 'Onboarding', desc: 'Get introduced to the team and tools.' },
    { id: 5, title: 'Training', desc: 'Focused guidance on real projects.' },
    { id: 6, title: 'Completion', desc: 'Certificate and performance review.' }
  ];

  return (
    <div className="pt-16 bg-white">
      {/* 1️⃣ Hero Section */}
      <section className="relative min-h-auto sm:min-h-[70vh] flex items-center overflow-hidden bg-slate-900 py-8 xs:py-10 sm:py-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000"
            alt="Internship Program - Career Growth"
            className="absolute inset-0 w-full h-full object-cover opacity-30 sm:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900" />
          <div className="absolute top-[-10%] right-[-10%] w-[150px] xs:w-[200px] sm:w-[300px] md:w-[400px] h-[150px] xs:h-[200px] sm:h-[300px] md:h-[400px] bg-indigo-600/20 rounded-full blur-[50px] xs:blur-[60px] sm:blur-[80px] md:blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[100px] xs:w-[150px] sm:w-[250px] md:w-[400px] h-[100px] xs:h-[150px] sm:h-[250px] md:h-[400px] bg-teal-500/10 rounded-full blur-[30px] xs:blur-[40px] sm:blur-[60px] md:blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-2 xs:px-3 sm:px-4 md:px-5 py-0.5 xs:py-1 sm:py-1.5 md:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[9px] xs:text-[9px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-wider sm:tracking-widest mb-1.5 xs:mb-2 sm:mb-3">
            Career Accelerator
          </div>
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight mb-3 sm:mb-4">
            Kickstart Your Career with <br className="hidden xs:block" />
            <span className="text-gradient">Real Experience</span>
          </h1>

          <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-xl font-bold text-slate-300 tracking-[0.08em] xs:tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.25em] uppercase mb-2 sm:mb-4 flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-4">
            <span>Learn</span>
            <span className="w-1.5 h-1.5 xs:w-1.5 sm:w-2 xs:h-1.5 sm:h-2 rounded-full bg-indigo-500"></span>
            <span>Build</span>
            <span className="w-1.5 h-1.5 xs:w-1.5 sm:w-2 xs:h-1.5 sm:h-2 rounded-full bg-teal-500"></span>
            <span className="text-teal-400">Excel</span>
          </p>

           <p className="text-indigo-100/70 text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed font-medium px-1 xs:px-2">
             Join the AuralithBit Internship Program. Work on live projects, get mentored by industry experts, and turn your knowledge into professional skills.
           </p>

           <div className="flex justify-center mt-4 sm:mt-6">
            <button 
              onClick={onOpenEnrollment}
              className="w-full sm:w-auto bg-primary-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all hover:-translate-y-1 active:scale-95"
            >
              <Rocket className="w-5 h-5" />
              Apply for Internship
            </button>
          </div>
        </div>
      </section>

      {/* 2️⃣ Why Intern With Us */}
      <section className="py-24 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#0b0e29] text-center mb-16">Why Intern With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyIntern.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-teal-500 hover:shadow-teal-500/10 transition-all duration-300 group cursor-default active:scale-[0.98]">
                <div className="w-14 h-14 bg-white text-teal-600 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-[#0b0e29] mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Internship Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#0b0e29]">Internship Programs</h2>
            <p className="text-slate-500 font-medium">Choose your path and start building your future.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <div key={i} className="bg-[#f8f9fc] p-10 rounded-[2.5rem] flex flex-col h-full hover:shadow-2xl hover:border-teal-500 hover:shadow-teal-500/10 transition-all duration-300 border border-slate-50 group cursor-default">
                <div className="w-14 h-14 bg-white text-teal-600 rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-black text-[#0b0e29] mb-4">{program.title}</h3>
                <div className="space-y-3 mb-10 flex-grow">
                  <p className="text-indigo-600 font-black text-sm uppercase tracking-wider">{program.duration}</p>
                  <p className="text-slate-400 text-sm font-medium">{program.req}</p>
                </div>
                <button 
                  onClick={onOpenEnrollment}
                  className="bg-primary-gradient text-white px-6 py-3 rounded-xl text-sm font-black hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 group-hover:shadow-indigo-500/20 w-full sm:w-fit"
                >
                  Apply Now <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ How to Apply */}
      <section className="py-24 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#0b0e29]">How to Apply?</h2>
            <p className="text-slate-500 font-medium">Our selection process ensures we find the most motivated candidates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-indigo-200">
                  {step.id}
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#0b0e29] mb-2">{step.title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Eligibility & Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Eligibility Card */}
            <div className="bg-white border border-slate-100 rounded-[3rem] p-12 md:p-16 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black text-[#0b0e29] mb-10">Are You Eligible?</h2>
                <ul className="space-y-6 mb-12">
                  {[
                    'Completed a relevant course at AuralithBit',
                    'Self-taught developer/designer with a portfolio',
                    'Final year IT students looking for project work',
                    'Dedicated and willing to learn in a fast-paced environment'
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="bg-teal-50 text-teal-500 p-1 rounded-full">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-slate-600 font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={onOpenEnrollment}
                className="w-full bg-[#0b0e29] text-white py-6 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all active:scale-95"
              >
                Submit Application
              </button>
            </div>

            {/* Benefits Card */}
            <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-indigo-200">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px]" />
              <div>
                <h2 className="text-3xl font-black mb-10">Exclusive Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                  {[
                    'Performance Stipend',
                    'Portfolio Projects',
                    'Networking Events',
                    'Experience Certificate',
                    'Job Recommendations',
                    'Lifetime Resources'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 group cursor-default">
                      <div className="w-2 h-2 rounded-full bg-teal-400 group-hover:scale-150 transition-transform" />
                      <span className="font-bold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-indigo-100/70 italic leading-relaxed">
                *Stipend is performance-based and awarded after successful project contributions. Certificates are only issued after completing the agreed duration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipPage;
