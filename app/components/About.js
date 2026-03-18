'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-orange-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-orange-500">Gunawan Wibisono</h3>
            <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
              I am a DevOps enthusiast with 2 years of experience as a System Administrator in a Fleet Management System. Proficient in Linux, programming (Python, Go, JavaScript), and DevOps solution integration, I focus on efficient infrastructure management and system optimization. Ready to tackle new challenges in the world of technology.
              </p>
            </div>
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="#contact"
                className="inline-block bg-gray-500 dark:bg-gray-700 text-white py-2 px-6 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/gunawan_resume.pdf"
                download="gunawan_resume.pdf"
                className="inline-block bg-gray-500 dark:bg-gray-700 text-white py-2 px-6 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {!imageLoaded && (
                <motion.div
                  className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full"
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
              <Image
                src="/gunawan.png"
                alt="Gunawan Wibisono"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
                className={`rounded-full shadow-lg transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                priority={true}
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
