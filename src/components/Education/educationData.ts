interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  grade: string;
  thesis?: string;
  icon?: 'phd' | 'masters' | 'bachelors';
}

export const educationData: EducationItem[] = [
  {
    degree: "Doctor of Philosophy (PhD) in Medical Bionanotechnology",
    institution: "Chettinad Academy of Research and Education",
    year: "2020-2024",
    grade: "8.5/10",
    thesis: "Nano-Scaled Approach to Formulate Photosensitizers for Improved Photodynamic Therapy and Imaging",
    icon: "phd"
  },
  {
    degree: "Master of Sciences (M.Sc.) in Medical Bionanotechnology",
    institution: "Chettinad Academy of Research and Education",
    year: "2016-2018",
    grade: "6.98/10",
    thesis: "Rhodamine Conjugated Gold Nanoparticles for Targeted Photodynamic Inactivation of Cancer Cells",
    icon: "masters"
  },
  {
    degree: "Bachelor of Sciences (B.Sc.) in Zoology, Chemistry, Botany",
    institution: "Magadh University",
    year: "2011-2014",
    grade: "7.5/10",
    icon: "bachelors"
  }
];