import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Phone } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Company',
      location: 'Remote',
      startDate: '2022',
      endDate: 'Present',
      description: [
        'Led development of multiple web applications using React, Node.js, and MongoDB',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines and improved deployment processes',
        'Collaborated with cross-functional teams to deliver high-quality products'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS']
    },
    {
      title: 'Full-Stack Developer',
      company: 'Startup Inc',
      location: 'San Francisco, CA',
      startDate: '2020',
      endDate: '2022',
      description: [
        'Built and maintained multiple client-facing applications',
        'Optimized application performance and user experience',
        'Worked closely with designers and product managers',
        'Participated in agile development processes'
      ],
      technologies: ['React', 'TypeScript', 'Express.js', 'PostgreSQL']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      location: 'New York, NY',
      startDate: '2016',
      endDate: '2020',
      description: 'Focused on software engineering, algorithms, and web development',
      gpa: '3.8/4.0'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate MERN Stack Developer with a love for creating innovative web solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://via.placeholder.com/500x600/3b82f6/ffffff?text=Your+Photo"
                alt="Your Name"
                className="rounded-2xl shadow-large w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Hi, I'm Your Name 👋
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate MERN Stack Developer with over 3 years of experience in building 
                modern web applications. I love turning complex problems into simple, beautiful solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and tutorials.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <Mail size={20} />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <Phone size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                  <MapPin size={20} />
                  <span>Your City, Country</span>
                </div>
              </div>

              <a
                href="/resume.pdf"
                download
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
              Work Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My professional journey in web development
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400">
                      {experience.company}
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-600 dark:text-gray-400">
                      {experience.startDate} - {experience.endDate}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                      {experience.location}
                    </p>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 dark:text-gray-400">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-gradient-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My academic background and qualifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg text-primary-600 dark:text-primary-400 mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {edu.location} • {edu.startDate} - {edu.endDate}
                </p>
                {edu.gpa && (
                  <p className="text-gray-500 dark:text-gray-500 mb-4">
                    GPA: {edu.gpa}
                  </p>
                )}
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 