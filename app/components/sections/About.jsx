'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F5F3EF] dark:bg-[#252525]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
            >
              <Image
                src="/gunawan.png"
                alt="Gunawan Wibisono"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </motion.div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-[#C4846C] uppercase tracking-wider mb-4"
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-[#2D2D2D] dark:text-[#F5F3EF] mb-4">
                DevOps enthusiast with hands-on experience in system administration
              </h3>

              <div className="space-y-4 text-[#6B6B6B] dark:text-[#9CA3AF]">
                <p>
                  With over 3 years of experience managing Fleet Management System infrastructure, 
                  I specialize in Linux administration, automation, and infrastructure optimization.
                </p>
                <p>
                  Currently working as a Support Engineer APAC at Hexagon, providing solutions 
                  and technical support for Fleet Management Systems across the Asia-Pacific region.
                </p>
              </div>

              <motion.a
                href="/gunawan_resume.pdf"
                download
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#C4846C] text-white rounded-full text-sm font-medium hover:bg-[#A66B52] transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload size={16} />
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
