export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  iconName: string;
  deliverables: string[];
  techStack: string[];
  bestFor: string;
}

export interface WhyWorkItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface SkillCategory {
  category: string;
  badge: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    categoryTag: string;
  }[];
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  clientRole: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string[];
  architecture: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyAvailable: boolean;
}

export interface EducationItem {
  year: string;
  degree: string;
  institution?: string;
  keyAreas: string[];
  description: string;
}
