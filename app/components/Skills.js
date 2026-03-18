'use client';


import React from 'react';
import { useEffect, useRef } from 'react';
import {
  FaDocker, FaPython,FaLinux, FaWindows,
  FaCss3Alt, FaJs, FaFileExcel, FaFileWord, FaFilePowerpoint,
  FaRobot,
  FaGithub
} from 'react-icons/fa';
import {
  SiGooglecloud, SiKubernetes, SiNginx, SiFreebsd,
  SiGo, SiFlutter, SiOpenai, SiNextdotjs,
  SiReact,
  SiGnubash,
  SiVisualstudiocode,
  SiGooglegemini,
  SiAnthropic,
} from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: "DevOps",
    skills: [
      { name: 'Docker', icon: FaDocker, color: '#2496ED', description: 'Containerization for efficient application deployment' },
      { name: 'Nginx', icon: SiNginx, color: '#009639', description: 'High-performance web server and reverse proxy' },
    ]
  },
  {
    name: "Programming Languages",
    skills: [
      { name: 'Python', icon: FaPython, color: '#3776AB', description: 'Versatile language for web, data science, and automation' },
      { name: 'GO', icon: SiGo, color: '#00ADD8', description: 'Fast, statically typed language for efficient backend development' },
      { name: 'Javascript', icon: FaJs, color: '#F7DF1E', description: 'Dynamic language for interactive web development' },
      { name: 'SQL', icon: AiOutlineConsoleSql, color: '#4EAA25', description: 'Query language for managing and manipulating databases' },
      { name: 'Bash', icon: SiGnubash, color: '#000000', description: 'Shell scripting for automation and system administration' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', description: 'Styling language for designing web pages' },
    ]
  },
  {
    name: "Frameworks & Tools",
    skills: [
      { name: 'Github', icon: FaGithub, color: '#000000', description: 'Version control and collaboration platform for developers' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B', description: 'UI toolkit for building natively compiled applications' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000', description: 'React framework for production-grade applications' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB', description: 'JavaScript library for building user interfaces' },
      { name: 'Visual Studio Code', icon: SiVisualstudiocode, color: '#007ACC', description: 'Powerful, extensible code editor for various languages' },
    ]
  },
  {
    name: "Operating Systems",
    skills: [
      { name: 'Linux', icon: FaLinux, color: '#000000', description: 'Open-source OS known for stability and flexibility' },
      { name: 'FreeBSD', icon: SiFreebsd, color: '#AB2B28', description: 'Advanced Unix-like operating system for servers' },
      { name: 'Windows', icon: FaWindows, color: '#0078D6', description: 'Widely used OS for personal and enterprise computing' },
    ]
  },
  {
    name: "Office Tools",
    skills: [
      { name: 'Excel', icon: FaFileExcel, color: '#217346', description: 'Spreadsheet software for data analysis and calculations' },
      { name: 'Word', icon: FaFileWord, color: '#2B579A', description: 'Word processing software for document creation' },
      { name: 'PowerPoint', icon: FaFilePowerpoint, color: '#D24726', description: 'Presentation software for creating engaging slideshows' },
    ]
  },
  {
    name: "Command Prompt AI Tools",
    skills: [
      { name: 'Cloud AI', icon: SiAnthropic, color: '#4285F4', description: 'AI excellent for Code' },
      { name: 'ChatGPT', icon: SiOpenai, color: '#00A67E', description: 'AI excellent for general' },
      { name: 'Gemini', icon: SiGooglegemini, color: '#4285F4', description: "AI excellent for up to date data" },
      { name: 'DeepSeek', icon: FaRobot, color: '#6236FF', description: "AI excellent for reasoning and low price API" },
    ]
  },
];

const featuredSkills = [
  {
    name: 'Python',
    icon: FaPython,
    color: '#3776AB',
    description: 'Bahasa serbaguna untuk machine learning',
    detailedDescription: 'Menguasai Python untuk mengembangkan model machine learning yang canggih. Dari analisis data hingga deep learning, Python adalah senjata utama saya untuk mengubah data menjadi wawasan yang berharga dan prediksi yang akurat.'
  },
  {
    name: 'Go',
    icon: SiGo,
    color: '#00ADD8',
    description: 'Bahasa cepat untuk scripting lintas platform',
    detailedDescription: 'Go adalah pilihan utama saya untuk scripting performa tinggi di berbagai sistem operasi. Dengan kecepatan eksekusi yang luar biasa dan kemudahan penggunaan, Go memungkinkan saya membuat alat dan skrip yang efisien untuk otomatisasi tugas-tugas kompleks.'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#000000',
    description: 'Framework React untuk aplikasi web modern',
    detailedDescription: 'Dengan Next.js, saya membangun aplikasi web yang cepat, SEO-friendly, dan mudah di-scale. Keahlian saya dalam Next.js memungkinkan pengembangan aplikasi yang memberikan pengalaman pengguna luar biasa dengan performa optimal.'
  },
  {
    name: 'Linux',
    icon: FaLinux,
    color: '#000000',
    description: 'OS yang bisa dikustomisasi sesuai kebutuhan',
    detailedDescription: 'Linux adalah kanvas digital saya. Saya ahli dalam mengkustomisasi dan mengoptimalkan sistem Linux untuk berbagai kebutuhan, dari server performa tinggi hingga workstation pengembangan yang efisien. Fleksibilitas Linux memungkinkan saya menciptakan lingkungan kerja yang sempurna.'
  },
  {
    name: 'Command Prompt AI Tools',
    icon: SiOpenai,
    color: '#00A67E',
    description: 'Perangkat AI untuk meningkatkan produktivitas',
    detailedDescription: 'Saya memanfaatkan AI tools berbasis command prompt untuk meningkatkan efisiensi dan kecepatan kerja. Dari bantuan coding hingga analisis data cepat, alat-alat ini menjadi asisten virtual yang memperkuat kemampuan saya dalam menyelesaikan tugas-tugas kompleks dengan lebih cepat dan akurat.'
  }
];
export default function Skills() {
  return (
    <section id="skills" className="py-10 md:py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-orange-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <FeaturedSkills />

        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-600 dark:text-gray-400">{category.name}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="flex flex-col items-center p-2 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md group hover:shadow-lg transition-shadow duration-300 relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  {skill.icon ?
                    <skill.icon
                      className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    :
                    <span className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 text-gray-600 transition-transform duration-300 group-hover:scale-110">?</span>
                  }
                  <span className="text-xs sm:text-sm text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-1 sm:p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center text-xs">
                    {skill.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


function FeaturedSkills() {
  const skills = [
    { name: 'Python', icon: FaPython, color: '#3776AB', proficiency: 85, description: 'Expertise in machine learning and data analysis' },
    { name: 'Go', icon: SiGo, color: '#00ADD8', proficiency: 75, description: 'High-performance backend development and scripting' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', proficiency: 65, description: 'Building scalable and SEO-friendly web applications' },
    { name: 'Linux', icon: FaLinux, color: '#FCC624', proficiency: 95, description: 'System administration and server optimization' },
    { name: 'AI Tools', icon: SiOpenai, color: '#00A67E', proficiency: 85, description: 'Leveraging AI for enhanced productivity and innovation' },
  ];

  return (
    <motion.div
      className="mb-8 md:mb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 md:p-8 shadow-lg overflow-hidden relative"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 md:mb-8 text-center">Featured Skills</h2>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 relative z-10">
        {/* Your photo */}
        <motion.div
          className="md:w-1/3 mb-6 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative w-48 h-48 md:w-64 md:h-64 mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/gunawan.png" alt="Gunawan" className="rounded-full w-full h-full object-cover shadow-xl" />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-75"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Skills */}
        <div className="md:w-2/3 w-full max-w-md md:max-w-none">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="mb-4 md:mb-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-2">
                <skill.icon className="text-2xl md:text-3xl mr-3" style={{ color: skill.color }} />
                <span className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 md:h-4 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-gray-500 to-orange-600 h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                ></motion.div>
              </div>
              <div className="mt-1 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {skill.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
