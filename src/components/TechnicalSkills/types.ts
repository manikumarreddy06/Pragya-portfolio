export interface Skill {
  name: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  instruments?: string[];
  software?: string[];
}