
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Internship from './components/Internship';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import EnrollmentModal from './components/EnrollmentModal';
import { View, ModalType } from './types';

// New Detailed Page Components
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import InternshipPage from './pages/InternshipPage';
import SolutionsPage from './pages/SolutionsPage';
import ContactPage from './pages/ContactPage';
import ButtonsPrototypePage from './pages/ButtonsPrototypePage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollModalType, setEnrollModalType] = useState<ModalType>('course');

  const navigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const openEnrollment = (type: ModalType = 'course') => {
    setEnrollModalType(type);
    setIsEnrollModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar onNavigate={navigate} onOpenEnrollment={() => openEnrollment('course')} currentView={currentView} />
      
      {currentView === 'home' ? (
        <>
          <Hero onNavigate={navigate} onOpenEnrollment={() => openEnrollment('course')} />
          <About onNavigate={navigate} onOpenEnrollment={() => openEnrollment('course')} />
          <Courses onNavigate={navigate} onOpenEnrollment={() => openEnrollment('course')} />
          <Internship onNavigate={navigate} onOpenEnrollment={() => openEnrollment('internship')} />
          <Solutions onNavigate={navigate} onOpenEnrollment={() => openEnrollment('solution')} />
          <WhyChooseUs onNavigate={navigate} />
          <Testimonials />

          {/* Final CTA Banner */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-primary-gradient rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/30">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
                <div className="relative z-10 space-y-8">
                  <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    Start Your Digital Journey<br />with AuralithBit
                  </h2>
                  <p className="text-indigo-100 text-xl max-w-2xl mx-auto font-medium">
                    Whether you're looking to launch a tech career or scale your digital presence, we're here to make it happen.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => openEnrollment('course')}
                      className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                      Enroll Now
                    </button>
                    <button 
                      onClick={() => navigate('contact')}
                      className="bg-accent-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-white/20"
                    >
                      Speak to an Expert
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : currentView === 'about' ? (
        <AboutPage onNavigate={navigate} onOpenEnrollment={() => openEnrollment('course')} />
      ) : currentView === 'courses' ? (
        <CoursesPage onNavigate={navigate} onOpenEnrollment={() => openEnrollment('course')} />
      ) : currentView === 'internship' ? (
        <InternshipPage onNavigate={navigate} onOpenEnrollment={() => openEnrollment('internship')} />
      ) : currentView === 'solutions' ? (
        <SolutionsPage onNavigate={navigate} onOpenEnrollment={() => openEnrollment('solution')} />
      ) : currentView === 'contact' ? (
        <ContactPage onNavigate={navigate} onOpenEnrollment={() => openEnrollment('course')} />
      ) : currentView === 'prototype' ? (
        <ButtonsPrototypePage onNavigate={navigate} onOpenEnrollment={() => openEnrollment('course')} />
      ) : null}

      <Footer onNavigate={navigate} />
      
      {/* Dynamic Enrollment Modal */}
      <EnrollmentModal 
        isOpen={isEnrollModalOpen} 
        onClose={() => setIsEnrollModalOpen(false)} 
        type={enrollModalType}
      />

      {/* Advanced AI Consultant Component */}
      <AIConsultant />
    </main>
  );
};

export default App;
