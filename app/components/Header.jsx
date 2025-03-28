// Header.js
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
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
          <button onClick={toggleMenu} className={styles.burgerMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          {isMenuOpen && (
            <nav className={styles.mobileNav} ref={mobileNavRef}>
              <button onClick={closeMenu} className={styles.closeButton}>
                <FaTimes />
              </button>
              <ul className={styles.mobileNavList}>
                <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About Me</a></li>
                <li><a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>Experience</a></li>
                <li><a href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>Skills</a></li>
                <li><a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
              </ul>
            </nav>
          )}
        </>
      ) : (
        <nav>
          <ul className={styles.navList}>
            <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About Me</a></li>
            <li><a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>Experience</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}