
import React from 'react';

export type View = 'home' | 'about' | 'courses' | 'internship' | 'solutions' | 'contact' | 'prototype';

export type ModalType = 'course' | 'internship' | 'solution';

export interface CourseModule {
  title: string;
  duration: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  mode: 'Hybrid' | 'Online' | 'Offline';
  price: string;
  originalPrice?: string;
  rating: number;
  reviewsCount: number;
  instructors: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  }[];
  learningOutcomes: string[];
  curriculum: CourseModule[];
}

export interface UpcomingClass {
  id: string;
  title: string;
  date: string;
  time: string;
  instructor: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface NavItem {
  label: string;
  href: string;
  view: View;
}
