
import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Sparkles, User, Mail, Phone, BookOpen, Rocket, Briefcase, Building, Link as LinkIcon, Globe } from 'lucide-react';
import { ModalType } from '../types';
import { COURSES } from '../constants';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType;
}

const AURALITH_EMAIL = 'info@auralithbit.com.np';

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose, type }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selection: '',
    extra: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Set default selection based on type
      const courseOptions = COURSES.map(c => c.title);
      const internshipOptions = ['Web Development', 'UI/UX Design', 'Digital Marketing', 'Mobile App', 'Graphics Design', 'Full Stack'];
      const defaultSelection = 
        type === 'course' ? courseOptions[0] :
        type === 'internship' ? internshipOptions[0] :
        'Web Development';
      setFormData(prev => ({ ...prev, selection: defaultSelection }));
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => {
        setStep('form');
        setFormData({ name: '', email: '', phone: '', selection: '', extra: '', message: '' });
      }, 300);
    }
  }, [isOpen, type]);

  const content_typeLabel = type === 'internship' ? 'Internship Application' : type === 'solution' ? 'Business Solution Inquiry' : 'Course Inquiry';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const currentContent = getModalContent();
    const lines = [
      `New ${content_typeLabel}`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone.trim() ? `Phone: ${formData.phone.trim()}` : '',
      `${currentContent.selectionLabel}: ${formData.selection}`,
      currentContent.extraLabel && formData.extra.trim() ? `${currentContent.extraLabel}: ${formData.extra.trim()}` : '',
      formData.message.trim() ? `Additional details: ${formData.message.trim()}` : '',
    ].filter(Boolean);
    const subject = encodeURIComponent(`New ${content_typeLabel}`);
    const body = encodeURIComponent(lines.join('\n'));
    const mailtoUrl = `mailto:${AURALITH_EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setStep('success');
    }, 300);
  };

  const getModalContent = () => {
    // Get course titles for enrollment form
    const courseOptions = COURSES.map(c => c.title);
    // Get internship track options
    const internshipOptions = ['Web Development', 'UI/UX Design', 'Digital Marketing', 'Mobile App', 'Graphics Design', 'Full Stack'];
    
    switch (type) {
      case 'internship':
        return {
          title: 'Internship Inquiry',
          subtitle: "Tell us about your interests and we'll prepare an email inquiry.",
          selectionLabel: 'Internship Track',
          extraLabel: 'Portfolio / LinkedIn URL (optional)',
          extraPlaceholder: 'https://...',
          options: internshipOptions,
          benefits: ["Select an internship track", "Share your contact details", "Ask about current availability"],
          successMsg: 'Your email draft should open with the information you provided. Review it and send it to complete your inquiry.'
        };
      case 'solution':
        return {
          title: 'Project Inquiry',
          subtitle: "Share a few details about your project and we'll prepare an email inquiry.",
          selectionLabel: 'Service Interest',
          extraLabel: 'Company Name (optional)',
          extraPlaceholder: 'Your Business Name',
          options: ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing', 'Custom Software'],
          benefits: ["Discuss your project scope", "Share your service needs", "Request a follow-up"],
          successMsg: 'Your email draft should open with the information you provided. Review it and send it to complete your inquiry.'
        };
      default:
        return {
          title: 'Course Inquiry',
          subtitle: 'Choose a course and tell us what you need to know.',
          selectionLabel: 'Select Program',
          extraLabel: 'Preferred class time (optional)',
          extraPlaceholder: 'e.g., morning or evening (optional)',
          options: courseOptions,
          benefits: ["Ask about course details", "Confirm current fees and schedule", "Request enrollment guidance"],
          successMsg: 'Your email draft should open with the information you provided. Review it and send it to complete your inquiry.'
        };
    }
  };

  const content = getModalContent();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center overflow-y-auto p-2 sm:p-5">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      <div className="relative isolate w-full max-w-[920px] h-[calc(100dvh-1rem)] sm:h-[min(92dvh,780px)] min-h-0 bg-white rounded-2xl sm:rounded-[1.75rem] shadow-[0_30px_80px_rgba(79,70,229,0.18)] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-6 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2.5 sm:p-3 rounded-full bg-white/95 hover:bg-white shadow-md ring-1 ring-slate-200 transition-all text-slate-700 hover:text-slate-900 hover:scale-105 active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid h-full min-h-0 md:grid-cols-[0.82fr_1.18fr] overflow-hidden">
          <div className="hidden md:flex min-h-0 bg-gradient-to-br from-[#4f46e5] via-[#5b53d7] to-[#7c3aed] p-6 xl:p-8 flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.15),_transparent_20%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                {type === 'internship' ? <Briefcase className="w-5 h-5" /> : type === 'solution' ? <Globe className="w-5 h-5" /> : <Rocket className="w-5 h-5" />}
              </div>
              <h2 className="text-3xl xl:text-[2.8rem] font-black leading-[0.95] mb-3 tracking-[-0.06em]">Let's talk<br /><span className="text-indigo-100">AuralithBit.</span></h2>
              <p className="text-indigo-100/85 text-base xl:text-lg font-medium leading-relaxed max-w-[16rem]">
                {type === 'internship' ? 'Tell us which track interests you and how to reach you.' : type === 'course' ? 'Choose a course and ask about fees, schedules, or enrollment.' : "Tell us what you're looking to build."}
              </p>
            </div>

            <div className="relative z-10 space-y-4 mt-4">
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.22em] text-indigo-100">
                <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                {type === 'internship' ? 'Internship inquiry' : type === 'course' ? 'Course inquiry' : 'Project inquiry'}
              </div>
              <div className="space-y-3">
                {content.benefits.map((txt) => (
                  <div key={txt} className="flex items-center gap-3 text-sm xl:text-base font-medium text-white/90">
                    <CheckCircle className="w-4 h-4 text-cyan-300 shrink-0" />
                    {txt}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-full md:col-span-1 min-h-0 bg-[#f5f7fb] px-4 pb-5 pt-14 sm:px-7 sm:pb-7 sm:pt-16 lg:px-9 flex flex-col justify-start overflow-y-auto overscroll-contain">
            {step === 'form' ? (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-[1.4rem] sm:text-[1.8rem] lg:text-[2rem] font-black text-slate-900 tracking-[-0.04em] leading-none">{content.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium mt-2">{content.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="space-y-1">
                    <label htmlFor="inquiry-name" className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.18em] ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                        <input
                          id="inquiry-name"
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your full name"
                          autoComplete="name"
                          className="w-full pl-9 pr-2.5 py-2.5 bg-white border border-slate-200 rounded-lg shadow-[0_2px_0_rgba(15,23,42,0.02)] focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-sm font-medium text-slate-700 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="inquiry-phone" className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.18em] ml-1">Phone Number (optional)</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                        <input
                          id="inquiry-phone"
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+977 98XXXXXXXX"
                          autoComplete="tel"
                          className="w-full pl-9 pr-2.5 py-2.5 bg-white border border-slate-200 rounded-lg shadow-[0_2px_0_rgba(15,23,42,0.02)] focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-sm font-medium text-slate-700 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="inquiry-email" className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.18em] ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <input
                        id="inquiry-email"
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="w-full pl-9 pr-2.5 py-2.5 bg-white border border-slate-200 rounded-lg shadow-[0_2px_0_rgba(15,23,42,0.02)] focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-sm font-medium text-slate-700 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="inquiry-selection" className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.18em] ml-1">{content.selectionLabel}</label>
                    <div className="relative">
                      <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <select
                        id="inquiry-selection"
                        value={formData.selection}
                        onChange={(e) => setFormData({...formData, selection: e.target.value})}
                        className="w-full pl-9 pr-8 py-2.5 bg-white border border-slate-200 rounded-lg shadow-[0_2px_0_rgba(15,23,42,0.02)] focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-sm font-bold text-slate-700 appearance-none"
                      >
                        {content.options.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>

                  {content.extraLabel && (
                    <div className="space-y-1 animate-in fade-in slide-in-from-top-2">
                      <label htmlFor="inquiry-extra" className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.18em] ml-1">{content.extraLabel}</label>
                      <div className="relative">
                        {type === 'internship' ? (
                          <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                        ) : type === 'solution' ? (
                          <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                        ) : (
                          <Rocket className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                        )}
                        <input
                          id="inquiry-extra"
                          type="text" 
                          value={formData.extra}
                          onChange={(e) => setFormData({...formData, extra: e.target.value})}
                          placeholder={content.extraPlaceholder}
                          className="w-full pl-9 pr-2.5 py-2.5 bg-white border border-slate-200 rounded-lg shadow-[0_2px_0_rgba(15,23,42,0.02)] focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-sm font-medium text-slate-700 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-message" className="text-[10px] sm:text-xs font-bold text-slate-600">
                      {type === 'internship' ? 'A little about you (optional)' : type === 'course' ? 'What would you like to know? (optional)' : 'Project details (optional)'}
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={3}
                      maxLength={1200}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={type === 'internship' ? 'Your background, interests, or availability' : type === 'course' ? 'Ask about fees, schedule, learning mode, or enrollment' : 'A short description of your goals and requirements'}
                      className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>

                  <div className="pt-1.5">
                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#4f46e5] via-[#5b53d7] to-[#7c3aed] text-white py-3 rounded-lg font-black text-lg flex items-center justify-center gap-2 hover:shadow-[0_18px_40px_rgba(79,70,229,0.28)] transition-all active:scale-[0.99] disabled:opacity-70 group"
                    >
                      {isSubmitting ? "Preparing Email Draft..." : "Open Email Draft"}
                      {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </button>
                    <p className="text-center text-[10px] sm:text-xs text-slate-500 mt-3">Opens your email app. Your inquiry is sent only after you send the draft.</p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 animate-in zoom-in-95 duration-500">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-inner">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">Finish Your Inquiry</h3>
                  <p className="text-slate-500 text-xs sm:text-base font-medium leading-relaxed max-w-[320px] mx-auto">
                    Thank you, {formData.name.split(' ')[0]}! {content.successMsg}
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="bg-slate-900 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm hover:bg-slate-800 transition-all shadow-xl active:scale-95"
                >
                  Return to Website
                </button>
                <div className="flex items-center gap-2 text-indigo-600 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em]">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  Experience Excellence
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;
