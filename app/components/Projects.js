'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaFileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: 'Monitoring Display Jigsaw',
      description: 'Monitoring that presents dynamic and real-time system status visualization, designed to enhance efficiency and oversight.',
      image: '/display_status.jpeg',
      pdf: '/project1.pdf'
    },
    {
      id: 2,
      title: 'Computer Vision Truck Distance',
      description: 'This project utilizes Computer Vision algorithms based on YOLO, OpenCV, and Model training to calculate the distance between trucks in real-time, enhancing safety and optimizing fleet management.',
      image: '/truck_distance.jpeg',
      pdf: '/project2.pdf'
    },
    {
      id: 3,
      title: 'IP Monitoring Real Time',
      description: 'A real-time IP monitoring system that assists in rapid network problem detection and ensures smooth operations.',
      image: '/ip_monitoring.jpeg',
      pdf: '/project3.pdf'
    },
    {
      id: 4,
      title: 'Server Migration: From Physical to Virtual Environment',
      description: 'Migration from physical servers to VMs involving data and application transfer to improve performance, flexibility, and ease of system management.',
      image: '/migration.jpeg',
      pdf: '/project1.pdf'
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(4);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const initialProjectCount = 4;

  const showMoreProjects = () => {
    setVisibleProjects(allProjects.length);
  };

  const showLessProjects = () => {
    setVisibleProjects(initialProjectCount);
  };

  const handleImageLoad = (projectId) => {
    setLoadedImages(prev => new Set([...prev, projectId]));
  };

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-orange-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <div className={styles.projectsContainer}>
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                {!loadedImages.has(project.id) && (
                  <motion.div
                    className="absolute inset-0 bg-gray-200 dark:bg-gray-700"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  onLoad={() => handleImageLoad(project.id)}
                  loading="lazy"
                  style={{ opacity: loadedImages.has(project.id) ? 1 : 0, transition: 'opacity 0.3s' }}
                />
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          {visibleProjects < allProjects.length ? (
            <motion.button
              onClick={showMoreProjects}
              className="bg-orange-400 text-white py-2 px-4 rounded-full hover:bg-orange-500 transition duration-300 flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show More <FaChevronDown className="ml-2" />
            </motion.button>
          ) : visibleProjects > initialProjectCount && (
            <motion.button
              onClick={showLessProjects}
              className="bg-orange-400 text-white py-2 px-4 rounded-full hover:bg-orange-500 transition duration-300 flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show Less <FaChevronUp className="ml-2" />
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}