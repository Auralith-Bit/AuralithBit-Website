import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ArrowRight, 
  Clock, 
  Filter, 
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Users,
  Briefcase,
  Download,
  Share2,
  Target,
  TrendingUp,
  Layers,
  Sparkles,
  Loader2
} from 'lucide-react';
import { COURSES } from '../constants';
import GlassHero from '../components/GlassHero';
import { View, Course } from '../types';
import { jsPDF } from 'jspdf';

const CoursesPage: React.FC<{ onNavigate: (v: View) => void, onOpenEnrollment: () => void }> = ({ onOpenEnrollment }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterLevel, setFilterLevel] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Relevance');
  
  // Interaction states for details view
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const categories = ['All', 'Web Development', 'Design', 'Quality Assurance', 'Marketing', 'Programming', 'Data Science', 'Productivity'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = useMemo(() => {
    const filtered = COURSES.filter(course => {
      const matchesCategory = filterCategory === 'All' || course.tag === filterCategory;
      const matchesLevel = filterLevel === 'All' || course.level === filterLevel;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesLevel && matchesSearch;
    });

    const sorted = [...filtered];
    switch (sortBy) {
      case 'Name: A to Z':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break; // Relevance = original catalog order
    }
    return sorted;
  }, [filterCategory, filterLevel, searchQuery, sortBy]);

  const handleDownload = () => {
    if (!selectedCourse) return;
    setIsDownloading(true);

    try {
      const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 48;
      const contentWidth = pageWidth - margin * 2;
      const safeText = (value: string) => value.normalize('NFKD').replace(/[^\x20-\x7E]/g, '');
      let y = 52;

      const ensureRoom = (height: number) => {
        if (y + height > pageHeight - margin) {
          pdf.addPage();
          y = margin;
        }
      };

      const addSectionTitle = (title: string) => {
        ensureRoom(38);
        y += 12;
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        pdf.setTextColor(30, 41, 59);
        pdf.text(safeText(title), margin, y);
        y += 12;
      };

      const addParagraph = (text: string, indent = 0) => {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.setTextColor(71, 85, 105);
        const lines = pdf.splitTextToSize(safeText(text), contentWidth - indent) as string[];
        ensureRoom(lines.length * 15 + 5);
        pdf.text(lines, margin + indent, y);
        y += lines.length * 15 + 5;
      };

      pdf.setFillColor(79, 70, 229);
      pdf.rect(0, 0, pageWidth, 120, 'F');
      pdf.setTextColor(224, 231, 255);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('AURALITHBIT  |  COURSE SYLLABUS', margin, 38);
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(25);
      const titleLines = pdf.splitTextToSize(safeText(selectedCourse.title), contentWidth) as string[];
      pdf.text(titleLines.slice(0, 2), margin, 72);
      y = 145;

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);
      pdf.setTextColor(71, 85, 105);
      pdf.text(`Category: ${safeText(selectedCourse.tag)}    Level: ${safeText(selectedCourse.level)}`, margin, y);
      y += 18;
      pdf.text(`Duration: ${safeText(selectedCourse.duration ?? 'To be confirmed')}    Learning mode: ${safeText(selectedCourse.mode ?? 'To be confirmed')}`, margin, y);
      y += 24;

      addSectionTitle('Course overview');
      addParagraph(selectedCourse.description);
      addSectionTitle("What you'll learn");
      selectedCourse.learningOutcomes.forEach((outcome) => addParagraph(`- ${outcome}`, 8));
      addSectionTitle('Curriculum');
      selectedCourse.curriculum.forEach((module) => {
        ensureRoom(38);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.setTextColor(49, 46, 129);
        pdf.text(safeText(module.duration ? `${module.title} (${module.duration})` : module.title), margin, y);
        y += 17;
        module.topics.forEach((topic) => addParagraph(`- ${topic}`, 10));
        y += 4;
      });

      ensureRoom(58);
      addSectionTitle('Enrollment and inquiries');
      addParagraph('Contact us to confirm current fees, schedule, and enrollment availability.');
      addParagraph('Email: info@auralithbit.com.np');
      addParagraph('Phone: +977 9766715793');

      const totalPages = pdf.getNumberOfPages();
      for (let page = 1; page <= totalPages; page += 1) {
        pdf.setPage(page);
        pdf.setDrawColor(226, 232, 240);
        pdf.line(margin, pageHeight - 34, pageWidth - margin, pageHeight - 34);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        pdf.setTextColor(100, 116, 139);
        pdf.text('AuralithBit | info@auralithbit.com.np', margin, pageHeight - 20);
        pdf.text(`${page} / ${totalPages}`, pageWidth - margin, pageHeight - 20, { align: 'right' });
      }

      const fileName = safeText(selectedCourse.title).replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, '');
      pdf.save(`${fileName}_Syllabus.pdf`);
      setFeedback('PDF syllabus downloaded.');
    } catch {
      setFeedback('Unable to generate the PDF. Please try again.');
    } finally {
      setIsDownloading(false);
      setTimeout(() => setFeedback(null), 3500);
    }
  };
  const handleShare = () => {
    if (!selectedCourse) return;
    setIsSharing(true);
    const shareUrl = `${window.location.origin}${window.location.pathname}`;
    const shareText = `Check out the ${selectedCourse.title} course at AuralithBit!`;

    const finish = (msg: string) => {
      setIsSharing(false);
      setFeedback(msg);
      setTimeout(() => setFeedback(null), 3000);
    };

    if (navigator.share) {
      navigator.share({ title: selectedCourse.title, text: shareText, url: shareUrl })
        .then(() => finish('Shared successfully!'))
        .catch(() => setIsSharing(false));
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl)
        .then(() => finish('Link copied to clipboard!'))
        .catch(() => finish('Unable to copy link. Please copy it manually.'));
    } else {
      finish('Sharing is not supported on this browser.');
    }
  };

  const courseBenefits = [
    { 
      title: 'Course Topics',
      desc: 'Review course topics and learning outcomes before applying.',
      icon: <Target className="w-6 h-6" /> 
    },
    { 
      title: 'Learning Modes',
      desc: 'Check the listed online, offline, or hybrid mode for each course.',
      icon: <TrendingUp className="w-6 h-6" /> 
    },
    { 
      title: 'Fees & Schedules',
      desc: 'Contact AuralithBit to confirm current fees and schedules.',
      icon: <Layers className="w-6 h-6" /> 
    },
    { 
      title: 'Internship Program',
      desc: 'Internship applications are available separately from course enrollment.',
      icon: <Briefcase className="w-6 h-6" /> 
    }
  ];

  // Catalog View Component
  const CourseCatalog = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-2 sm:mb-4 tracking-tight">Explore Our Programs</h2>
        <p className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-3xl font-medium">
          Browse the courses currently listed by AuralithBit. Contact us to confirm current fees, schedules, and enrollment availability.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-12">
        {/* Sidebar Filters - Collapsible on mobile */}
        <aside className="lg:w-64 shrink-0">
          <div className="glass-panel rounded-2xl p-4 sm:p-6 space-y-6 sm:space-y-8 lg:sticky lg:top-24">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm sm:text-base">
                <Filter className="w-4 h-4" /> Filters
              </h3>
              <button 
                onClick={() => { setFilterCategory('All'); setFilterLevel('All'); setSearchQuery(''); }}
                className="text-[10px] sm:text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors active:scale-95"
              >
                Reset
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses..." 
                className="w-full pl-9 pr-3 py-2 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Category</h4>
              <div className="space-y-1.5 sm:space-y-2">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={filterCategory === cat}
                      onChange={() => setFilterCategory(cat)}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                    />
                    <span className={`text-[12px] sm:text-[13px] font-medium transition-colors ${filterCategory === cat ? 'text-blue-600' : 'text-slate-500 group-hover:text-slate-700'}`}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Level</h4>
              <div className="space-y-1.5 sm:space-y-2">
                {levels.map(level => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="level" 
                      checked={filterLevel === level}
                      onChange={() => setFilterLevel(level)}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                    />
                    <span className={`text-[12px] sm:text-[13px] font-medium transition-colors ${filterLevel === level ? 'text-blue-600' : 'text-slate-500 group-hover:text-slate-700'}`}>
                      {level}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Course Grid */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              Showing <span className="text-slate-900 font-bold">{filteredCourses.length}</span> courses
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-medium text-slate-400">Sort by:</span>
              <div className="relative flex items-center">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-5 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none cursor-pointer"
                >
                  <option>Relevance</option>
                  <option>Name: A to Z</option>
                </select>
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-slate-900 absolute right-0 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {filteredCourses.map((course) => (
              <div 
                id={`course-${course.id}`}
                key={course.id} 
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer active:scale-[0.98]"
                onClick={() => { setSelectedCourse(course); window.scrollTo(0, 0); }}
              >
                <div className="h-40 sm:h-48 relative overflow-hidden bg-slate-100">
                  <img 
                    src={`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600&sig=${course.id}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt={course.title} 
                  />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/95 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md shadow-sm">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-blue-600">{course.tag}</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-1.5 sm:px-2 py-0.5 rounded ${
                      course.level === 'Beginner' ? 'bg-emerald-50 text-emerald-600' :
                      course.level === 'Intermediate' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 sm:gap-4 text-slate-500 text-[10px] sm:text-[11px] font-medium mb-4 sm:mb-6">
                    <div className="flex items-center gap-1">
                       <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                       {course.duration ?? 'Schedule to be confirmed'}
                    </div>
                    <div className="flex items-center gap-1">
                       <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                       {course.mode ?? 'Mode to be confirmed'}
                    </div>
                  </div>

                  <div className="flex items-center justify-end mt-auto pt-3 sm:pt-5 border-t border-slate-50">
                    <span className="text-[10px] sm:text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors flex items-center gap-0.5">
                      Details <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Detailed Course View Component
  const CourseDetails = ({ course }: { course: Course }) => (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400 mb-8">
          <button onClick={() => { setSelectedCourse(null); }} className="hover:text-blue-600 active:scale-95 transition-all">Home</button>
          <span>/</span>
          <button onClick={() => { setSelectedCourse(null); }} className="hover:text-blue-600 active:scale-95 transition-all">Programs</button>
          <span>/</span>
          <span className="text-slate-900">{course.title}</span>
        </nav>

        {feedback && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[105] bg-slate-900 text-white px-6 py-3 rounded-2xl text-xs font-black shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            {feedback}
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-10 space-y-6">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider">
                {course.tag}
              </span>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {course.title}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                {course.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
                  <Clock className="w-4 h-4 text-blue-600" />
                  {course.duration ?? 'Schedule to be confirmed'}
                </div>
                <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
                  <Users className="w-4 h-4 text-blue-600" />
                  {course.mode ?? 'Mode to be confirmed'}
                </div>
                <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  {course.level}
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 sm:p-10">
              <h2 className="text-2xl font-black text-slate-900 mb-8">What you'll learn</h2>
              <div className="grid md:grid-cols-2 gap-y-5 gap-x-10">
                {course.learningOutcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-600 font-medium text-sm">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 sm:p-10 space-y-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h2 className="text-2xl font-black text-slate-900">Curriculum</h2>
                <button 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-50 transition-colors active:scale-95 disabled:opacity-50"
                >
                  {isDownloading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
                  {isDownloading ? 'Generating...' : 'Download Syllabus'}
                </button>
              </div>

              <div className="space-y-4">
                {course.curriculum.map((module, i) => (
                  <div key={i} className="bg-white border border-slate-100 rounded-xl overflow-hidden">
                    <div className="bg-slate-50/50 p-6 flex justify-between items-center border-b border-slate-100">
                      <div>
                        <h4 className="font-bold text-slate-900">{module.title}</h4>
                        {module.duration && <span className="text-[11px] text-slate-400 font-medium">{module.duration}</span>}
                      </div>
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    </div>
                    <ul className="p-6 space-y-3">
                      {module.topics.map((topic, j) => (
                        <li key={j} className="flex items-center gap-3 text-slate-600 text-[13px] font-medium ml-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                           {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
              <div className="h-56 relative">
                <img src={`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&sig=${course.id}`} className="w-full h-full object-cover" alt={course.title} />
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <button 
                    onClick={onOpenEnrollment}
                    className="w-full bg-primary-gradient text-white py-4 rounded-xl font-black text-sm hover:shadow-lg transition-all active:scale-95 shadow-blue-500/20"
                  >
                    Ask About Enrollment
                  </button>
                  <button 
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="w-full bg-white border border-blue-600 text-blue-600 py-4 rounded-xl font-black text-sm hover:bg-blue-50 transition-all active:scale-95 disabled:opacity-50"
                  >
                    {isDownloading ? 'Downloading...' : 'Download Syllabus'}
                  </button>
                </div>

                <p className="border-t border-slate-100 pt-4 text-center text-xs leading-5 text-slate-500">Contact us to confirm current fees, schedule, and enrollment details.</p>
              </div>
            </div>

            <button 
              onClick={handleShare}
              className="w-full flex items-center justify-center gap-2 text-slate-500 font-bold text-xs hover:text-blue-600 transition-colors active:scale-95"
            >
              {isSharing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Share2 className="w-4 h-4" />}
              Share this course
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-16 bg-[#fafafa]">
      {!selectedCourse ? (
        <>
          <GlassHero
            title={<>Our <span className="text-gradient">Programs</span></>}
            subtitle={"Learn with Vision. Develop with Passion. Deliver with Excellence. Our flagship programs are engineered to build high-performance technical careers."}
            image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000"
            ctaText="Ask About Courses"
            onCta={onOpenEnrollment}
          />

          <section id="programs">
            <CourseCatalog />
          </section>

          <section className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16 space-y-4">
                   <h2 className="text-xs font-black text-teal-600 uppercase tracking-[0.4em]">The AuralithBit Advantage</h2>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tight">Engineered for Technical Success</h3>
               </div>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {courseBenefits.map((benefit, i) => (
                    <div key={i} className="glass-panel p-6 sm:p-10 rounded-3xl transition-all group active:scale-[0.98] cursor-default">
                       <div className="w-14 h-14 rounded-2xl bg-white text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
                          {benefit.icon}
                       </div>
                       <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                       <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="site-cta">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
                <div className="relative z-10 space-y-10">
                  <div className="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-md mb-2">
                     <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                    Start Your Learning Journey<br />with AuralithBit Today
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button 
                      onClick={onOpenEnrollment}
                      className="w-full sm:w-auto bg-white text-indigo-600 px-12 py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all active:scale-95 shadow-sm"
                    >
                      Ask About Enrollment
                    </button>
                    <button 
                      onClick={() => { setFilterCategory('All'); setSearchQuery(''); window.scrollTo(0, 0); }}
                      className="w-full sm:w-auto bg-accent-gradient text-white px-12 py-5 rounded-2xl font-black text-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95 border border-white/20"
                    >
                      View All Courses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <CourseDetails course={selectedCourse} />
      )}
    </div>
  );
};

export default CoursesPage;
