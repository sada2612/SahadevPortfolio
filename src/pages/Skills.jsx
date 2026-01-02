import React from 'react';
import SkillsSection from '../components/Home/SkillsSection';

const Skills = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">All Skills</h1>
      <p className="text-gray-600 dark:text-gray-400">
        <SkillsSection />
      </p>
    </div>
  );
};

export default Skills;