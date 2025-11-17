
export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
}

export interface Skill {
  name: string;
  proficiency: number; // Percentage from 0 to 100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
