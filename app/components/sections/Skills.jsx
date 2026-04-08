'use client';

import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';
import { FaDocker, FaLinux, FaGithub, FaCode, FaGithubAlt } from 'react-icons/fa';
import { SiGo, SiNginx, SiNextdotjs, SiVisualstudiocode, SiGooglechat, SiAnthropic } from 'react-icons/si';
import { FiDatabase } from 'react-icons/fi';
import { BiBot } from 'react-icons/bi';
import { BsChatSquareText } from 'react-icons/bs';

const iconMap = {
  Container: FaDocker,
  Server: SiNginx,
  Python: FaCode,
  Go: SiGo,
  JavaScript: FaCode,
  Database: FiDatabase,
  Terminal: FaLinux,
  GitBranch: FaGithub,
  Layers: SiNextdotjs,
  VSCode: SiVisualstudiocode,
  Bot: BiBot,
  MessageSquare: BsChatSquareText,
  MiniMax: SiGooglechat,
  Deepseek: FaCode,
  ClaudeCode: SiAnthropic,
  Trae: FaCode,
  Opencode: FaCode,
  Lobster: FaGithubAlt,
};

export default function Skills() {
  const renderSkill = (skill, index, categoryIndex) => {
    const IconComponent = iconMap[skill.icon] || FaCode;
    
    return (
      <motion.div
        key={`${categoryIndex}-${index}`}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#252525] rounded-full border border-[#E8E5E1] dark:border-[#404040] text-sm text-[#2D2D2D] dark:text-[#F5F3EF]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 + categoryIndex * 0.1 }}
        whileHover={{ scale: 1.05, borderColor: '#C4846C' }}
      >
        <IconComponent className="text-[#C4846C]" size={16} />
        <span>{skill.name}</span>
      </motion.div>
    );
  };

  const categories = [
    { name: 'DevOps', skills: skillsData.devops },
    { name: 'Languages', skills: skillsData.languages },
    { name: 'Tools', skills: skillsData.tools },
    { name: 'AI Tools', skills: skillsData.ai },
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#F5F3EF] dark:bg-[#252525]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2D2D2D] dark:text-[#F5F3EF]">Skills</h2>
          <div className="w-10 h-1 bg-[#C4846C] mt-4" />
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-sm font-medium text-[#6B6B6B] dark:text-[#9CA3AF] uppercase tracking-wider mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => renderSkill(skill, index, categoryIndex))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
