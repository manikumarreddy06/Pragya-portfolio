export interface ResearchProject {
  title: string;
  description: string;
  year: string;
  image: string;
  advisor?: string;
  category: 'phd' | 'masters';
}

export interface ResearchCategory {
  title: string;
  advisor: string;
  institution: string;
  period: string;
  projects: ResearchProject[];
}