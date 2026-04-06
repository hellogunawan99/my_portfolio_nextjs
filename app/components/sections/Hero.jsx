'use client';

import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2D2D2D] dark:text-[#F5F3EF] mb-4 tracking-tight">
            Hi, I&apos;m <span className="text-[#C4846C]">Gunawan</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#6B6B6B] dark:text-[#9CA3AF] max-w-xl mx-auto mb-6"
          >
            Support Engineer & System Administrator
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-[#6B6B6B] dark:text-[#9CA3AF] max-w-2xl mx-auto"
          >
            Building efficient infrastructure and delivering solutions across the APAC region. 
            Passionate about DevOps practices and system optimization.
          </motion.p>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#C4846C] transition-colors cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <FaChevronDown size={24} />
      </motion.button>
    </section>
  );
}
