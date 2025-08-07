import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'frontend', level: 95 },
    { name: 'TypeScript', category: 'frontend', level: 90 },
    { name: 'Tailwind CSS', category: 'frontend', level: 92 },
    { name: 'Next.js', category: 'frontend', level: 85 },
    // Backend
    { name: 'Node.js', category: 'backend', level: 88 },
    { name: 'Express.js', category: 'backend', level: 90 },
    { name: 'TypeScript', category: 'backend', level: 85 },
    { name: 'REST APIs', category: 'backend', level: 92 },
    // Database
    { name: 'MongoDB', category: 'database', level: 85 },
    { name: 'PostgreSQL', category: 'database', level: 80 },
    { name: 'Mongoose', category: 'database', level: 88 },
    // Other
    { name: 'Git', category: 'other', level: 90 },
    { name: 'Docker', category: 'other', level: 75 },
    { name: 'AWS', category: 'other', level: 70 },
  ];

  const categories = [
    { name: 'Frontend', color: 'primary' },
    { name: 'Backend', color: 'accent' },
    { name: 'Database', color: 'green' },
    { name: 'Other', color: 'purple' },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I work with a variety of technologies to create robust and scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                {category.name}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category.name.toLowerCase())
                  .map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-600`}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 