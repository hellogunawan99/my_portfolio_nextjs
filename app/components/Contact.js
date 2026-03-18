'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaWhatsapp, FaTwitter, FaMedium, FaTelegram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:gunawanwibisono4712@gmail.com";
  };

  const socialLinks = [
    { icon: FaLinkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/gunawan-wibisono-9aa883237/', color: 'text-blue-600 hover:text-blue-800' },
    { icon: FaGithub, text: 'GitHub', href: 'https://github.com/hellogunawan99', color: 'text-gray-800 hover:text-gray-600' },
    { icon: FaEnvelope, text: 'Email', onClick: handleEmailClick, color: 'text-red-600 hover:text-red-800' },
    { icon: FaInstagram, text: 'Instagram', href: 'https://www.instagram.com/hello.gunawan/', color: 'text-pink-600 hover:text-pink-800' },
    { icon: FaWhatsapp, text: 'WhatsApp', href: 'https://wa.me/+6285158735552', color: 'text-green-600 hover:text-green-800' },
    { icon: FaTelegram, text: 'Telegram', href: 'https://t.me/hellogunawan', color: 'text-blue-600 hover:text-blue-800' },
    { icon: FaTwitter, text: 'Twitter', href: 'https://x.com/Gunawan96429055', color: 'text-blue-400 hover:text-blue-600' },
    { icon: FaMedium, text: 'Medium', href: 'https://medium.com/@gunawanwibisono4712', color: 'text-gray-700 hover:text-gray-900' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-100 dark:from-gray-900 to-white dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-orange-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Social Media Icons */}
          <motion.div
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Connect With Me</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={link.onClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:shadow-lg ${link.color}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-6 h-6 mb-2" />
                  <span className="text-xs font-medium">{link.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* New Section: Quote and CTA */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.blockquote
              className="text-2xl italic text-gray-600 dark:text-gray-400 mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              &quot;A problem is not just something to be solved, it’s an opportunity to craft solutions that truly make a difference.&quot;
            </motion.blockquote>
            <motion.div
              className="bg-orange-400 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="mailto:gunawanwibisono4712@gmail.com" className="text-lg font-bold">
                Let&apos;s Work Together!
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}