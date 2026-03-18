// Header.js
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';
import { FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (isMenuOpen && mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      closeMenu();
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/">GUNAWAN.</Link>
      </div>
      {isMobile ? (
        <>
          <motion.button
            onClick={toggleMenu}
            className={styles.burgerMenu}
            whileTap={{ scale: 0.9 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                className={styles.mobileNav}
                ref={mobileNavRef}
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                <motion.button
                  onClick={closeMenu}
                  className={styles.closeButton}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>
                <ul className={styles.mobileNavList}>
                  {['About Me', 'Experience', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a href={`#${item.toLowerCase().replace(' ', '')}`} onClick={(e) => scrollToSection(e, `#${item.toLowerCase().replace(' ', '')}`)}>{item}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </>
      ) : (
        <nav>
          <ul className={styles.navList}>
            {['About Me', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={`#${item.toLowerCase().replace(' ', '')}`} onClick={(e) => scrollToSection(e, `#${item.toLowerCase().replace(' ', '')}`)}>{item}</a>
              </motion.li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}