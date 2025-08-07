import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import SkillsSection from '../components/sections/SkillsSection';
import AboutPreview from '../components/sections/AboutPreview';
import ContactCTA from '../components/sections/ContactCTA';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Preview */}
      <AboutPreview />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Featured Projects */}
      <FeaturedProjects />
      
      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default Home; 