'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/gunawan-wibisono-9aa883237/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/hellogunawan99', label: 'GitHub' },
  { icon: FaEnvelope, href: 'mailto:gunawanwibisono4712@gmail.com', label: 'Email' },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

export default function Footer() {
  return (
    <footer className="bg-[#F5F3EF] dark:bg-[#252525] py-12 border-t border-[#E8E5E1] dark:border-[#404040]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#C4846C] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#C4846C] transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E8E5E1] dark:border-[#404040] text-center">
          <p className="text-sm text-[#6B6B6B] dark:text-[#9CA3AF]">
            © {new Date().getFullYear()} Gunawan Wibisono. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
