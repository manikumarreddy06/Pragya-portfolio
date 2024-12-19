import { ResearchCategory } from './types';

export const researchData: ResearchCategory[] = [
  {
    title: "PhD Research",
    advisor: "Professor Agnishwar Girigoswami",
    institution: "Chettinad Academy of Research and Education, Chennai",
    period: "2020-2024",
    projects: [
      {
        title: "Nanoformulation of Rhodamine 6G-Conjugated Gold Nanoparticles",
        description: "Development and optimization of gold nanoparticles conjugated with Rhodamine 6G for enhanced photodynamic therapy applications in cancer treatment.",
        year: "2023",
        image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=800&q=80",
        category: "phd"
      },
      {
        title: "Chitosan-Alginate Hydrogel Nanoparticles",
        description: "Engineering of novel hydrogel nanoparticles for targeted delivery of photosensitizers, focusing on biocompatibility and controlled release mechanisms.",
        year: "2022",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
        category: "phd"
      },
      {
        title: "Quantum Yield and ROS Generation Studies",
        description: "Evaluation of quantum yield and reactive oxygen species generation efficiency in various nanoformulated photosensitizers for therapeutic applications.",
        year: "2021",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
        category: "phd"
      }
    ]
  },
  {
    title: "Masters Research",
    advisor: "Professor Agnishwar Girigoswami",
    institution: "Chettinad Academy of Research and Education, Chennai",
    period: "2016-2018",
    projects: [
      {
        title: "Targeted Photodynamic Inactivation",
        description: "Investigation of rhodamine conjugated gold nanoparticles for selective photodynamic inactivation of cancer cells, focusing on targeting efficiency and cellular uptake.",
        year: "2018",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
        category: "masters"
      }
    ]
  }
];