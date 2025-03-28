'use client';

import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDownload, FaUser, FaCogs, FaProjectDiagram, FaFileAlt, FaFileArchive } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-white">Contact</h3>
            <p className="flex items-center mb-2"><FaEnvelope className="mr-3 text-gray-500" /> gunawanwibisono4712@gmail.com</p>
            <p className="flex items-center mb-2"><FaPhone className="mr-3 text-gray-500" /> (08) 51-5873-5552</p>
            <p className="flex items-center"><FaMapMarkerAlt className="mr-3 text-gray-500" /> East Borneo, Indonesia</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-white">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/in/gunawan-wibisono-9aa883237/" className="flex items-center hover:text-white transition-colors duration-300"><FaLinkedin className="mr-3 text-gray-500" /> LinkedIn</a></li>
              {/* <li><a href="https://github.com/hellogunawan99" className="flex items-center hover:text-white transition-colors duration-300"><FaGithub className="mr-3 text-gray-500" /> GitHub</a></li> */}
              {/* <li>
                <a 
                  href="/gunawan_portfolio.pdf" 
                  download="gunawan_portfolio.pdf"
                  className="flex items-center hover:text-white transition-colors duration-300"
                >
                  <FaDownload className="mr-3 text-gray-500" /> Download Portfolio
                </a>
              </li> */}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className="flex items-center hover:text-white transition-colors duration-300"><FaUser className="mr-3 text-gray-500" /> About Me</Link></li>
              <li><Link href="/#skills" className="flex items-center hover:text-white transition-colors duration-300"><FaCogs className="mr-3 text-gray-500" /> Skills</Link></li>
              <li><Link href="/#projects" className="flex items-center hover:text-white transition-colors duration-300"><FaProjectDiagram className="mr-3 text-gray-500" /> Projects</Link></li>
              <li>
                <a 
                  href="/gunawan_resume.pdf" 
                  download="gunawan_resume.pdf"
                  className="flex items-center hover:text-white transition-colors duration-300"
                >
                  <FaFileArchive className="mr-3 text-gray-500" /> Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">&copy; 2024 Gunawan Wibisono. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;