'use client';

import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';
import styles from './Experience.module.css';

export default function Experience() {
  const workExperience = experienceData.filter((exp) => exp.type === 'work');
  const education = experienceData.filter((exp) => exp.type === 'education');

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#FAF9F7] dark:bg-[#1C1C1C]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2D2D] dark:text-[#F5F3EF]">Experience</h2>
          <div className="w-10 h-1 bg-[#C4846C] mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="text-sm font-medium text-[#6B6B6B] dark:text-[#9CA3AF] uppercase tracking-wider mb-8">Work</h3>
            <div className={styles.timeline}>
              {workExperience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.timelineContent}>
                    <h4 className="text-lg font-medium">{exp.title}</h4>
                    <p className="company">{exp.company}</p>
                    <p className="period">{exp.period}</p>
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-[#6B6B6B] dark:text-[#9CA3AF] uppercase tracking-wider mb-8">Education</h3>
            <div className={styles.timeline}>
              {education.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.timelineContent}>
                    <h4 className="text-lg font-medium">{exp.title}</h4>
                    <p className="company">{exp.company}</p>
                    <p className="period">{exp.period}</p>
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
