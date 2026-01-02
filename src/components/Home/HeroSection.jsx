import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiTwitter,
  FiAward,
  FiStar
} from 'react-icons/fi';

const HeroSection = () => {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '25+', label: 'Projects Delivered' },
    { value: '3+', label: 'Cloud-Based Projects' },,
  ];

 const techTags = [
  '.NET Core',
  'C#',
  'Web API',
  'Angular',
  'React',
  'AWS',
  'Azure',
  'Microservices',
  'Docker',
  'SQL Server'
];

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-950/30 dark:via-purple-950/20 dark:to-pink-950/30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-[length:200%_auto] animate-gradient">
                  Sahadev Padavale
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Software Engineer specializing in .NET & Angular/React
                <span className="block text-lg text-gray-500 dark:text-gray-400 mt-2">
                  Hands-on experience with AWS & Azure cloud services
                </span>
              </p>

            </div>

            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Crafting high-performance <span class="font-semibold">full-stack solutions</span> for 
              <span class="font-semibold"> Banking</span> and <span class="font-semibold">Healthcare</span> platforms using 
              <span class="font-semibold"> .NET Core</span>, <span class="font-semibold"> Angular</span>, and  
              <span class="font-semibold"> React</span>. Passionate about  
              <span class="font-semibold"> cloud-native architectures</span>,  
              <span class="font-semibold"> microservices</span>, and scalable systems on 
              <span class="font-semibold"> AWS & Azure</span>.
            </p>


            {/* Awards */}
            {/* Highlights */}
            <div className="flex flex-wrap gap-3" style={{ opacity: 1, transform: "none" }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 border-2 border-blue-200 dark:border-blue-800">
                <FiAward />
                3+ Years Industry Experience
              </span>

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300 border-2 border-orange-200 dark:border-orange-800">
                <FiStar />
                Full Stack .NET Developer
              </span>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2" style={{ opacity: 1, transform: "none" }}>
              {techTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4" style={{ opacity: 1, transform: "none" }}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium gradient-bg text-white hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

           
            </div>
               {/* Social Links */}
              <div className="flex gap-4" style={{ opacity: 1, transform: "none" }} >
                <a
                  href="https://github.com/sada2612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sahadev-padavale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-6 h-6" />
                </a>
                <a
                  href="mailto:sahadev.dotnet@gmail.com"
                  className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <FiMail className="w-6 h-6" />
                </a>
              </div>
          </motion.div>

          {/* Right Column - Profile & Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end space-y-6"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/images/profile/Sahadev.png"
                  alt="Sahadev Padavale"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Awards Badges */}
              <div className="absolute -left-4 top-1/4 hidden lg:block">
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border-2 border-blue-500">
                  <FiAward className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="absolute -right-4 bottom-1/4 hidden lg:block">
                <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border-2 border-orange-500">
                  <FiStar className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-md">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg card-hover"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;