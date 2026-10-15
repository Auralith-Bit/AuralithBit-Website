
import React from 'react';
import { 
  Lightbulb, 
  Users, 
  Award, 
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
import GlassHero from '../components/GlassHero';

const InternshipPage: React.FC<{ onNavigate: (v: View) => void, onOpenEnrollment: () => void }> = ({ onOpenEnrollment }) => {
  const whyIntern = [
    { 
      title: 'Practical Work',
      desc: 'Apply skills through practical work in your selected track.',
      icon: <Lightbulb className="w-6 h-6" /> 
    },
    { 
      title: 'Track Guidance',
      desc: 'Ask the team about the current format for each track.',
      icon: <Users className="w-6 h-6" /> 
    },
    { 
      title: 'Application',
      desc: 'Contact AuralithBit to confirm openings and requirements.',
      icon: <Award className="w-6 h-6" /> 
    },
    { 
      title: 'Multiple Tracks',
      desc: 'Internship tracks cover technology, design, and marketing.',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const programs = [
    { 
      title: 'Web Development', 
      icon: <Code className="w-5 h-5" /> 
    },
    { 
      title: 'UI/UX Design', 
      icon: <Palette className="w-5 h-5" /> 
    },
    { 
      title: 'Digital Marketing', 
      icon: <BarChart className="w-5 h-5" /> 
    },
    { 
      title: 'Mobile App', 
      icon: <Smartphone className="w-5 h-5" /> 
    },
    { 
      title: 'Graphics Design', 
      icon: <Layout className="w-5 h-5" /> 
    },
    { 
      title: 'Full Stack', 
      icon: <Cpu className="w-5 h-5" /> 
    }
  ];

  const steps = [
    { id: 1, title: 'Choose a Track', desc: 'Select the internship area you are interested in.' },
    { id: 2, title: 'Send an Inquiry', desc: 'Share your contact details and selected track.' },
    { id: 3, title: 'Confirm Details', desc: 'Ask the team about current availability and requirements.' }
  ];

  return (
    <div className="pt-16 bg-white">
      <GlassHero
        title={<>Kickstart Your Career with <span className="text-gradient">Real Experience</span></>}
        subtitle={"Explore internship tracks at AuralithBit. Contact us to confirm current availability, requirements, and program details."}
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000"
        ctaText="Apply for Internship"
        onCta={onOpenEnrollment}
      />

      {/* 2️⃣ Why Intern With Us */}
      <section className="py-24 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#0b0e29] text-center mb-16">Why Intern With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyIntern.map((item, i) => (
              <div key={i} className="glass-panel p-6 sm:p-10 rounded-[2.5rem] hover:shadow-2xl hover:border-teal-500 hover:shadow-teal-500/10 transition-all duration-300 group cursor-default active:scale-[0.98]">
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
              <div key={i} className="glass-panel p-6 sm:p-10 rounded-[2.5rem] flex flex-col h-full hover:shadow-2xl hover:border-teal-500 hover:shadow-teal-500/10 transition-all duration-300 group cursor-default">
                <div className="w-14 h-14 bg-white text-teal-600 rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-black text-[#0b0e29] mb-4">{program.title}</h3>
                <div className="space-y-3 mb-10 flex-grow">
                  <p className="text-slate-500 text-sm font-medium">Ask us about current availability and prerequisites.</p>
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
            <p className="text-slate-500 font-medium">Submit an inquiry to learn about the application process.</p>
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
            <div className="glass-panel rounded-[3rem] p-6 sm:p-10 md:p-16 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black text-[#0b0e29] mb-10">Are You Eligible?</h2>
                <ul className="space-y-6 mb-12">
                  {[
                    'Choose the internship track you are interested in',
                    'Share your name, email, and phone number',
                    'Include a portfolio or LinkedIn URL if available',
                    'Confirm prerequisites and availability with the team'
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
                Start Internship Inquiry
              </button>
            </div>

            {/* Benefits Card */}
            <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-indigo-200">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px]" />
              <div>
                <h2 className="text-3xl font-black mb-10">Before You Apply</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                  {[
                    'Choose a track',
                    'Ask about prerequisites',
                    'Confirm current availability',
                    'Share relevant experience',
                    'Include a portfolio link',
                    'Request program details'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 group cursor-default">
                      <div className="w-2 h-2 rounded-full bg-teal-400 group-hover:scale-150 transition-transform" />
                      <span className="font-bold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-indigo-100/70 italic leading-relaxed">Program duration, requirements, and other details may vary by track. Please confirm them with AuralithBit before applying.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipPage;
