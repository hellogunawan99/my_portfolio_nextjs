'use client';

import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-[#252525] border border-[#E8E5E1] dark:border-[#404040] shadow-sm hover:shadow-md transition-shadow duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-[#2D2D2D] dark:text-[#C4846C]"
      >
        {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
      </motion.div>
    </motion.button>
  );
}
