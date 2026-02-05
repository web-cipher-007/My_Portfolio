import type React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Blog {
  title: string;
  date: string;
  description: string;
  linkUrl: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
  verifyUrl?: string;
}