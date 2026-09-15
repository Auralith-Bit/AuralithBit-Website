import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ArrowRight, 
  Star, 
  Clock, 
  Filter, 
  ChevronRight,
  ChevronDown,
  Play,
  CheckCircle2,
  Users,
  Briefcase,
  Download,
  Share2,
  Target,
  TrendingUp,
  Layers,
  Quote,
  Sparkles,
  Loader2
} from 'lucide-react';
import { COURSES, TESTIMONIALS } from '../constants';
import GlassHero from '../components/GlassHero';
import { View, Course } from '../types';

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

  const categories = ['All', 'Web Development', 'Design', 'Quality Assurance', 'Marketing', 'Programming', 'Productivity'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = useMemo(() => {
    const filtered = COURSES.filter(course => {
      const matchesCategory = filterCategory === 'All' || course.tag === filterCategory;
      const matchesLevel = filterLevel === 'All' || course.level === filterLevel;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesLevel && matchesSearch;
    });

    const priceToNumber = (price: string) => Number(price.replace(/[^0-9]/g, '')) || 0;

    const sorted = [...filtered];
    switch (sortBy) {
      case 'Price: Low to High':
        sorted.sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
        break;
      case 'Price: High to Low':
        sorted.sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price));
        break;
      case 'Highest Rated':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'Most Popular':
        sorted.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      default:
        break; // Relevance = original catalog order
    }
    return sorted;
  }, [filterCategory, filterLevel, searchQuery, sortBy]);

  const handleDownload = () => {
    if (!selectedCourse) return;
    setIsDownloading(true);
    setTimeout(() => {
      const lines = [
        `${selectedCourse.title} — Course Syllabus`,
        'AuralithBit | Design. Develop. Deliver.',
        '',
        `Level: ${selectedCourse.level}`,
        `Duration: ${selectedCourse.duration}`,
        `Mode: ${selectedCourse.mode}`,
        `Price: ${selectedCourse.price}`,
        '',
        "What you'll learn:",
        ...selectedCourse.learningOutcomes.map(o => `- ${o}`),
        '',
        'Curriculum:',
        ...selectedCourse.curriculum.flatMap(m => [
          `${m.title} (${m.duration})`,
          ...m.topics.map(t => `   • ${t}`),
        ]),
        '',
        'Contact us: +977 9766715793 | info@auralithbit.com.np',
      ];
      const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${selectedCourse.title.replace(/\s+/g, '_')}_Syllabus.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setIsDownloading(false);
      setFeedback('Syllabus downloaded successfully!');
      setTimeout(() => setFeedback(null), 3000);
    }, 800);
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
      title: 'Real-world Project Exposure', 
      desc: 'Build products for actual clients as part of your final capstone phase.', 
      icon: <Target className="w-6 h-6" /> 
    },
    { 
      title: 'Career-Oriented Curriculum', 
      desc: 'Syllabus designed by industry leaders to meet current global demand.', 
      icon: <TrendingUp className="w-6 h-6" /> 
    },
    { 
      title: 'Experienced Instructors', 
      desc: 'Learn from senior engineers currently working in top-tier tech firms.', 
      icon: <Layers className="w-6 h-6" /> 
    },
    { 
      title: 'Internship Opportunities', 
      desc: 'Top graduates receive direct entry into our corporate internship program.', 
      icon: <Briefcase className="w-6 h-6" /> 
    }
  ];

  // Catalog View Component
  const CourseCatalog = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-2 sm:mb-4 tracking-tight">Explore Our Programs</h2>
        <p className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-3xl font-medium">
          Discover courses designed by industry experts to help you master new skills and advance your career.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-12">
        {/* Sidebar Filters - Collapsible on mobile */}
        <aside className="lg:w-64 shrink-0">
          <div className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-6 shadow-sm space-y-6 sm:space-y-8 sticky top-24">
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
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                  <option>Most Popular</option>
                </select>
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-slate-900 absolute right-0 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {filteredCourses.map((course) => (
              <div 
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
                    <div className="flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-[10px] sm:text-xs font-bold text-slate-900">{course.rating}</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-400">({course.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 sm:gap-4 text-slate-500 text-[10px] sm:text-[11px] font-medium mb-4 sm:mb-6">
                    <div className="flex items-center gap-1">
                       <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                       {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                       <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                       {course.mode}
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
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8">
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
            <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm space-y-6">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider">
                {course.tag}
              </span>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {course.title}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                {course.description} Focused on professional agility and production-ready implementation for global markets.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
                  <Clock className="w-4 h-4 text-blue-600" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
                  <Users className="w-4 h-4 text-blue-600" />
                  {course.mode}
                </div>
                <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  {course.level}
                </div>
                <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-slate-900">{course.rating}</span>
                  <span className="text-slate-400">({course.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm">
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

            <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm space-y-8">
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
                        <span className="text-[11px] text-slate-400 font-medium">{module.duration}</span>
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

            <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-8">Your Instructors</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {course.instructors.map((instructor, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                    <img src={instructor.avatar} className="w-20 h-20 rounded-full object-cover ring-4 ring-slate-50 shadow-md" alt={instructor.name} />
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-slate-900">{instructor.name}</h4>
                      <p className="text-blue-600 font-bold text-xs">{instructor.role}</p>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-lg mt-2">{instructor.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
              <div className="h-56 relative group">
                <img src={`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&sig=${course.id}`} className="w-full h-full object-cover" alt={course.title} />
                <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center cursor-pointer active:brightness-90 transition-all" onClick={() => setFeedback("Loading intro video...")}>
                   <div className="bg-white p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-blue-600 fill-current ml-0.5" />
                   </div>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <button 
                    onClick={onOpenEnrollment}
                    className="w-full bg-primary-gradient text-white py-4 rounded-xl font-black text-sm hover:shadow-lg transition-all active:scale-95 shadow-blue-500/20"
                  >
                    Enroll Now
                  </button>
                  <button 
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="w-full bg-white border border-blue-600 text-blue-600 py-4 rounded-xl font-black text-sm hover:bg-blue-50 transition-all active:scale-95 disabled:opacity-50"
                  >
                    {isDownloading ? 'Downloading...' : 'Download Brochure'}
                  </button>
                </div>

                <div className="space-y-3 pt-4 text-center text-[11px] font-bold text-slate-400 tracking-wider">
                  <p>30-Day Money-Back Guarantee</p>
                  <p>Full Lifetime Access</p>
                  <p>Certificate of Completion</p>
                </div>
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
            ctaText="Enroll Now"
            onCta={onOpenEnrollment}
          />

          {/* 1️⃣ Catalog Section */}
          <section id="programs">
            <CourseCatalog />
          </section>

          {/* 5️⃣ Course Benefits Section */}
          <section className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16 space-y-4">
                   <h2 className="text-xs font-black text-teal-600 uppercase tracking-[0.4em]">The AuralithBit Advantage</h2>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tight">Engineered for Technical Success</h3>
               </div>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {courseBenefits.map((benefit, i) => (
                    <div key={i} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-500/30 transition-all group active:scale-[0.98] cursor-default">
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

          {/* 6️⃣ Testimonials Section */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em]">Student Success</h2>
                <h3 className="text-4xl font-black text-slate-900 tracking-tight">Hear from the Global Community</h3>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t) => (
                  <div key={t.id} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-500 group active:scale-[0.98] cursor-default">
                    <div>
                      <Quote className="w-10 h-10 text-blue-600/10 mb-6 group-hover:text-blue-600/20 transition-colors" />
                      <p className="text-slate-600 text-lg leading-relaxed italic font-medium">"{t.content}"</p>
                    </div>
                    <div className="flex items-center gap-4 mt-10 pt-8 border-t border-slate-50">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-4 ring-white shadow-sm" />
                      <div>
                        <h4 className="font-bold text-slate-900">{t.name}</h4>
                        <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7️⃣ Final CTA Banner */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-primary-gradient rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/30">
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
                      Enroll Now
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
