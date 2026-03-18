'use client';

import Image from 'next/image';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import styles from './Experience.module.css';

const experienceData = [
  {
    id: 4,
    type: 'work',
    title: 'System Administrator',
    organization: 'PT. Saptaindra Sejati',
    date: 'November 2022 - April 2025',
    details: "A system administrator manages and maintains an FMS (Fleet Management System) infrastructure to ensure optimal performance and security.",
    logo: '/LOGO ADARO ENERGY - SIS (LANDSCAPE).png'
  },
  {
    id: 3,
    type: 'work',
    title: 'Field Support Technician',
    organization: 'PT. Saptaindra Sejati',
    date: 'September 2022 - November 2022',
    details: "Maintains and supports Fleet Management Systems (FMS) using Hexagon Jigsaw to optimize fleet operations. Handles installation, troubleshooting, and ensures system reliability for accurate telematics data and operational efficiency.",
    logo: '/adaro_services.jpeg'
  },
  {
    id: 2,
    type: 'education',
    title: 'English Mastery Program',
    organization: 'Mr. BOB',
    date: '2018 - 2019',
    details: "This is an intensive program designed to improve participants' English skills.",
    logo: '/mr bob kampung inggris.png'
  },
  {
    id: 1,
    type: 'education',
    title: "Associate's Degree in Oil Palm Plantation ( D1 )",
    organization: 'Institut Perkebunan Yogyakarta',
    date: '2017 - 2018',
    details: 'Focused on management Oil Palm Plantation.',
    logo: '/Institut Pertanian STIPER Yogyakarta.png'
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-orange-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Experience
        </motion.h2>
        <div className={styles.timelineContainer}>
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className={`${styles.timelineContent} bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 relative`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`${styles.icon} ${exp.type === 'education' ? 'bg-gray-800' : 'bg-gray-600'} ${styles.iconContainer}`}>
                  {exp.type === 'education' ? (
                    <FaGraduationCap className="text-white text-2xl" />
                  ) : (
                    <FaBriefcase className="text-white text-2xl" />
                  )}
                </div>
                <div className="flex items-start mb-4">
                  <div className="flex-grow pr-4">
                    <h3 className="text-xl font-semibold mb-2 text-blue-500">{exp.title}</h3>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{exp.organization}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{exp.date}</p>
                  </div>
                  <div className="flex-shrink-0 w-20 h-20 relative">
                    <OptimizedImage
                      src={exp.logo}
                      alt={`${exp.organization} logo`}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.details}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
