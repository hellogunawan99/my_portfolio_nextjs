'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/gunawan-wibisono-9aa883237/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/hellogunawan99', label: 'GitHub' },
  { icon: FaEnvelope, href: 'mailto:gunawanwibisono4712@gmail.com', label: 'Email' },
  { icon: FaInstagram, href: 'https://www.instagram.com/hello.gunawan/', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/+6285158735552', label: 'WhatsApp' },
  { icon: FaTelegram, href: 'https://t.me/hellogunawan', label: 'Telegram' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F5F3EF] dark:bg-[#252525]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2D2D] dark:text-[#F5F3EF] mb-4">
              Let&apos;s Connect
            </h2>
            <div className="w-10 h-1 bg-[#C4846C] mx-auto mb-6" />
            
            <p className="text-[#6B6B6B] dark:text-[#9CA3AF] mb-8">
              I&apos;m always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology.
            </p>

            <motion.a
              href="mailto:gunawanwibisono4712@gmail.com"
              className="inline-block px-8 py-3 bg-[#C4846C] text-white rounded-full font-medium hover:bg-[#A66B52] transition-colors duration-200 mb-12"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-[#1C1C1C] rounded-full border border-[#E8E5E1] dark:border-[#404040] text-[#6B6B6B] dark:text-[#9CA3AF] hover:text-[#C4846C] hover:border-[#C4846C] transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
