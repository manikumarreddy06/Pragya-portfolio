import React from 'react';
import SkillCategory from './SkillCategory';
import { skillsData } from './skillsData';
import { SKILL_CATEGORIES, CATEGORY_ICONS } from './constants';

const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1A365D] mb-12">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <SkillCategory
            title={SKILL_CATEGORIES.LAB_TECHNIQUES}
            icon={CATEGORY_ICONS[SKILL_CATEGORIES.LAB_TECHNIQUES]}
            skills={skillsData[0].skills}
          />
          <SkillCategory
            title={SKILL_CATEGORIES.INSTRUMENTS}
            icon={CATEGORY_ICONS[SKILL_CATEGORIES.INSTRUMENTS]}
            skills={skillsData[0].instruments || []}
          />
          <SkillCategory
            title={SKILL_CATEGORIES.SOFTWARE}
            icon={CATEGORY_ICONS[SKILL_CATEGORIES.SOFTWARE]}
            skills={skillsData[0].software || []}
          />
          <SkillCategory
            title={SKILL_CATEGORIES.STATISTICAL}
            icon={CATEGORY_ICONS[SKILL_CATEGORIES.STATISTICAL]}
            skills={[
              'Descriptive statistics',
              'Inferential statistics',
              'Microsoft Excel',
              'GraphPad Prism',
              'MetaGenyo for Meta-analysis'
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;