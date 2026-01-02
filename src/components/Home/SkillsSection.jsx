import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { skills, complementaryTech } from '../../utils/data';

const SkillsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Core technologies and expertise across full-stack development, cloud platforms, and modern tooling.
          </p>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-12">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`flex items-center gap-3 mb-6 text-2xl font-bold bg-gradient-to-r ${skillCategory.color} bg-clip-text text-transparent`}>
                <span>{skillCategory.icon}</span>
                <span>{skillCategory.category}</span>
              </div>
              
              <div className="space-y-4">
                {skillCategory.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-sm text-gray-900 dark:text-gray-100">
                        {item.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {item.years}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skillCategory.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Complementary Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
            Complementary Technologies
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {complementaryTech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 text-center border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">8</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Core Technologies</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 text-center border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{complementaryTech.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Complementary Skills</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 text-center border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">3+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 text-center border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">7+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Successful Projects</div>
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium gradient-bg text-white hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Skills
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;