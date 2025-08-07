import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-secondary">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BookOpen size={64} className="mx-auto text-primary-600 dark:text-primary-400 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Blog Coming Soon
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              I'm working on creating valuable content about web development, 
              MERN stack, and my experiences in the tech industry.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500">
              Check back soon for articles, tutorials, and insights!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 