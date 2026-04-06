'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#FAF9F7] dark:bg-[#1C1C1C]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2D2D] dark:text-[#F5F3EF]">Projects</h2>
          <div className="w-10 h-1 bg-[#C4846C] mt-4" />
        </motion.div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.projectImageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
