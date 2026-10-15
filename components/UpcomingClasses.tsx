import React from 'react';
import { View } from '../types';
import { UPCOMING_CLASSES, COURSES } from '../constants';

interface Props {
  onNavigate: (view: View) => void;
  onOpenEnrollment: (type?: any) => void;
}

const UpcomingClasses: React.FC<Props> = ({ onNavigate, onOpenEnrollment }) => {
  const findCourseFor = (title: string) => {
    const lower = title.toLowerCase();
    return COURSES.find((course) => course.title.toLowerCase().includes(lower) || lower.includes(course.title.toLowerCase()));
  };

  const goToCourse = (classTitle: string) => {
    const match = findCourseFor(classTitle);
    // navigate to courses page first
    if (match) {
      onNavigate('courses');
      // allow page switch to render then scroll
      setTimeout(() => {
        const el = document.getElementById(`course-${match.id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 220);
    } else {
      onNavigate('courses');
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">Upcoming Classes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {UPCOMING_CLASSES.map((c) => (
            <div key={c.id} className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-lg font-semibold">{c.title}</h4>
              <p className="text-sm text-gray-600">{c.date} • {c.time}</p>
              <p className="mt-2 text-sm">Instructor: {c.instructor}</p>
              <div className="mt-4 flex gap-3">
                <button onClick={() => onOpenEnrollment('course')} className="px-4 py-2 bg-indigo-600 text-white rounded">Enroll</button>
                <button onClick={() => goToCourse(c.title)} className="px-4 py-2 border rounded">View Course</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingClasses;
