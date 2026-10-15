import {
  Code,
  Layout,
  ShieldCheck,
  Cpu,
  Users,
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
  BrainCircuit,
  SearchCheck,
  Palette,
  Briefcase
} from 'lucide-react';
import { Course, Solution, UpcomingClass, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', view: 'home' },
  { label: 'About', href: '#about', view: 'about' },
  { label: 'Courses', href: '#courses', view: 'courses' },
  { label: 'Internship', href: '#internship', view: 'internship' },
  { label: 'Projects', href: '#projects', view: 'projects' },
  { label: 'Solutions', href: '#solutions', view: 'solutions' },
  { label: 'Contact', href: '#contact', view: 'contact' },
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'UI/UX Designing',
    description: 'Master the art of user-centric design with Figma and industry-standard prototyping workflows.',
    icon: <Layout className="w-6 h-6" />,
    tag: 'Design',
    level: 'Beginner',
    duration: '2.5 Months',
    mode: 'Offline',
    price: 'Contact for current fees',
    learningOutcomes: ['Design Thinking', 'Visual Hierarchy', 'Prototyping in Figma', 'User Testing', 'Wireframing', 'Usability Testing'],
    curriculum: [
      { title: 'Module 1: Design Fundamentals', duration: '2 Weeks', topics: ['Color Theory', 'Typography', 'Layout Principles'] },
      { title: 'Module 2: UI Design', duration: '3 Weeks', topics: ['Figma Basics', 'Component Design', 'Responsive Design'] },
      { title: 'Module 3: UX Research', duration: '3 Weeks', topics: ['User Research', 'Personas', 'Journey Mapping'] }
    ]
  },
  {
    id: '2',
    title: 'MERN Stack',
    description: 'Master MERN stack (MongoDB, Express, React, Node) and build enterprise-grade applications.',
    icon: <Code className="w-6 h-6" />,
    tag: 'Web Development',
    level: 'Beginner',
    duration: '3 Months',
    mode: 'Hybrid',
    price: 'Contact for current fees',
    learningOutcomes: ['Master industry-standard tools', 'Understand core principles', 'Deploy applications', 'Build real-world projects', 'Collaborate in teams', 'Best coding practices'],
    curriculum: [
      { title: 'Module 1: Frontend with React', duration: '4 Weeks', topics: ['React Basics', 'Components', 'State Management'] },
      { title: 'Module 2: Backend with Node.js', duration: '4 Weeks', topics: ['Express.js', 'API Development', 'Authentication'] },
      { title: 'Module 3: Database with MongoDB', duration: '4 Weeks', topics: ['MongoDB Basics', 'Mongoose', 'Data Modeling'] }
    ]
  },
  {
    id: '3',
    title: 'Graphic Designing',
    description: 'Learn graphic design principles and tools to create stunning visuals for branding and marketing.',
    icon: <Palette className="w-6 h-6" />,
    tag: 'Design',
    level: 'Beginner',
    duration: '2 Months',
    mode: 'Offline',
    price: 'Contact for current fees',
    learningOutcomes: ['Adobe Creative Suite', 'Branding Design', 'Digital Illustration', 'Print Design', 'Color Theory', 'Composition'],
    curriculum: [
      { title: 'Module 1: Design Basics', duration: '2 Weeks', topics: ['Elements of Design', 'Color Theory', 'Typography'] },
      { title: 'Module 2: Adobe Tools', duration: '4 Weeks', topics: ['Photoshop', 'Illustrator', 'InDesign'] },
      { title: 'Module 3: Projects', duration: '2 Weeks', topics: ['Logo Design', 'Poster Design', 'Branding Kit'] }
    ]
  },
  {
    id: '4',
    title: 'Quality Assurance (QA)',
    description: 'Learn software testing methodologies and tools to ensure high-quality software delivery.',
    icon: <SearchCheck className="w-6 h-6" />,
    tag: 'Quality Assurance',
    level: 'Intermediate',
    duration: '2.5 Months',
    mode: 'Online',
    price: 'Contact for current fees',
    learningOutcomes: ['Manual Testing', 'Automated Testing', 'Test Planning', 'Bug Tracking', 'Performance Testing', 'Agile Testing'],
    curriculum: [
      { title: 'Module 1: Testing Fundamentals', duration: '3 Weeks', topics: ['SDLC', 'Testing Types', 'Test Cases'] },
      { title: 'Module 2: Automation', duration: '3 Weeks', topics: ['Selenium', 'Cypress', 'API Testing'] },
      { title: 'Module 3: Advanced QA', duration: '2 Weeks', topics: ['Performance Testing', 'Security Testing', 'CI/CD'] }
    ]
  },
  {
    id: '5',
    title: 'Web Designing',
    description: 'Create beautiful and responsive websites using HTML, CSS, and modern design principles.',
    icon: <Layout className="w-6 h-6" />,
    tag: 'Web Development',
    level: 'Beginner',
    duration: '2 Months',
    mode: 'Hybrid',
    price: 'Contact for current fees',
    learningOutcomes: ['HTML5 & CSS3', 'Responsive Design', 'JavaScript Basics', 'Web Accessibility', 'SEO Principles', 'Version Control'],
    curriculum: [
      { title: 'Module 1: HTML & CSS', duration: '3 Weeks', topics: ['HTML Structure', 'CSS Styling', 'Flexbox & Grid'] },
      { title: 'Module 2: JavaScript', duration: '2 Weeks', topics: ['DOM Manipulation', 'Events', 'Basic Scripting'] },
      { title: 'Module 3: Projects', duration: '3 Weeks', topics: ['Portfolio Site', 'Landing Page', 'Responsive Design'] }
    ]
  },
  {
    id: '6',
    title: 'Digital Marketing',
    description: 'Master digital marketing strategies including SEO, social media, and online advertising.',
    icon: <TrendingUp className="w-6 h-6" />,
    tag: 'Marketing',
    level: 'Beginner',
    duration: '2.5 Months',
    mode: 'Online',
    price: 'Contact for current fees',
    learningOutcomes: ['SEO & SEM', 'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'Analytics', 'PPC Advertising'],
    curriculum: [
      { title: 'Module 1: Marketing Fundamentals', duration: '2 Weeks', topics: ['Digital Landscape', 'Target Audience', 'Marketing Strategy'] },
      { title: 'Module 2: Channels & Tools', duration: '4 Weeks', topics: ['Google Ads', 'Social Platforms', 'Analytics Tools'] },
      { title: 'Module 3: Campaigns', duration: '2 Weeks', topics: ['Campaign Planning', 'A/B Testing', 'Performance Tracking'] }
    ]
  },
  {
    id: '7',
    title: 'Python',
    description: 'Learn Python programming from basics to advanced concepts including data analysis and automation.',
    icon: <BrainCircuit className="w-6 h-6" />,
    tag: 'Programming',
    level: 'Beginner',
    duration: '3 Months',
    mode: 'Online',
    price: 'Contact for current fees',
    learningOutcomes: ['Python Syntax', 'Data Structures', 'Object-Oriented Programming', 'Libraries (Pandas, NumPy)', 'Web Scraping', 'Automation'],
    curriculum: [
      { title: 'Module 1: Python Basics', duration: '4 Weeks', topics: ['Syntax', 'Data Types', 'Control Flow'] },
      { title: 'Module 2: Advanced Python', duration: '4 Weeks', topics: ['OOP', 'File Handling', 'Error Handling'] },
      { title: 'Module 3: Applications', duration: '4 Weeks', topics: ['Data Analysis', 'Web Development', 'Automation Scripts'] }
    ]
  },
  {
    id: '8',
    title: 'Office Package',
    description: 'Master Microsoft Office suite including Word, Excel, PowerPoint for professional productivity.',
    icon: <Briefcase className="w-6 h-6" />,
    tag: 'Productivity',
    level: 'Beginner',
    duration: '1.5 Months',
    mode: 'Offline',
    price: 'Contact for current fees',
    learningOutcomes: ['Word Processing', 'Spreadsheet Management', 'Presentation Skills', 'Data Analysis in Excel', 'Collaboration Tools', 'Advanced Features'],
    curriculum: [
      { title: 'Module 1: Microsoft Word', duration: '2 Weeks', topics: ['Document Creation', 'Formatting', 'Mail Merge'] },
      { title: 'Module 2: Excel', duration: '3 Weeks', topics: ['Formulas', 'Charts', 'Pivot Tables'] },
      { title: 'Module 3: PowerPoint & Outlook', duration: '2 Weeks', topics: ['Presentations', 'Email Management', 'Integration'] }
    ]
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: '1',
    title: 'UI/UX Strategy',
    description: 'Visionary designs that engage users and drive meaningful business results.',
    icon: <Target className="w-8 h-8" />
  },
  {
    id: '2',
    title: 'Custom Software',
    description: 'Tailored enterprise solutions built to solve complex organizational challenges.',
    icon: <Cpu className="w-8 h-8" />
  },
  {
    id: '3',
    title: 'Cloud Security',
    description: 'Discuss security requirements and cloud options for your project.',
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    id: '4',
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance and support to help keep your systems running smoothly.',
    icon: <TrendingUp className="w-8 h-8" />
  }
];

export const UPCOMING_CLASSES: UpcomingClass[] = [];

export const TESTIMONIALS: Testimonial[] = [];

export const WHY_CHOOSE_US = [
  { title: 'Course Options', description: 'Explore courses in design, development, marketing, and productivity.', icon: <Users className="w-6 h-6" /> },
  { title: 'Learning Modes', description: 'Course listings include online, offline, and hybrid formats.', icon: <Globe className="w-6 h-6" /> },
  { title: 'Internship Tracks', description: 'Apply separately to the available internship tracks.', icon: <TrendingUp className="w-6 h-6" /> },
  { title: 'Digital Projects', description: 'See examples of software and digital products in our portfolio.', icon: <Lightbulb className="w-6 h-6" /> }
];
