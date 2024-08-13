'use client';
import Wrapper from '@/components/wrapper/wrapper';
import { motion } from 'framer-motion';
import styles from './skills.module.scss';
import {
  FaReact,
  FaGitAlt,
  FaAws,
  FaFigma,
  FaDocker,
  FaNode,
  FaPython,
} from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import {
  SiReactquery,
  SiRedux,
  SiSass,
  SiWebpack,
  SiAuth0,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { IconType } from 'react-icons';
import { GoGear } from 'react-icons/go';

type Skill = {
  [key: string]: IconType;
};

type TSkill = {
  skillArea: string;
  skills: Skill[];
};

const SKILLS_DATA: TSkill[] = [
  {
    skillArea: 'Frontend',
    skills: [
      { React: FaReact },
      { 'Next.js': RiNextjsFill },
      { Redux: SiRedux },
      { Sass: SiSass },
      { 'Framer Motion': TbBrandFramerMotion },
      { 'Tanstack Query': SiReactquery },
    ],
  },
  {
    skillArea: 'Tools',
    skills: [
      { Git: FaGitAlt },
      { AWS: FaAws },
      { Webpack: SiWebpack },
      { Figma: FaFigma },
      { Docker: FaDocker },
      { Auth0: SiAuth0 },
    ],
  },
  {
    skillArea: 'Backend',
    skills: [
      { 'Node.js': FaNode },
      { Express: SiExpress },
      { PostgreSQL: SiPostgresql },
      { MongoDB: SiMongodb },
      { 'RESTful API': GoGear },
    ],
  },
  {
    skillArea: 'Languages',
    skills: [
      { JavaScript: SiJavascript },
      { TypeScript: SiTypescript },
      { HTML: SiHtml5 },
      { CSS: SiCss3 },
      { Python: FaPython },
    ],
  },
];

export default function Skills() {
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    // <Wrapper additionalClasses="inner">
      <motion.div className={styles.skills} layout>
        <motion.ul
          className={styles.areas}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
        >
          {SKILLS_DATA.map((area, skillsIndex) => {
            return (
              <motion.li key={skillsIndex} className={styles.area}>
                <h3 className={styles.title}>{area.skillArea}</h3>
                <div className={styles.textAndIcon}>
                  <motion.ul className={styles.skillsUl}>
                    {area.skills.map((skill, skillIndex) => {
                      const skillName = Object.keys(skill)[0];
                      const Icon = skill[skillName];
                      return (
                        <motion.li
                          key={skillIndex}
                          className={styles.singleSkill}
                          initial="initial"
                          whileHover="hovered"
                          transition={{ staggerChildren: 0.03 }}
                        >
                          <div className={styles.skillWrapper}>
                            <div
                              className={styles.text}
                              key={`text_${skillIndex}`}
                            >
                              {skillName.split('').map((letter, i) => {
                                return (
                                  <motion.span
                                    className={styles.letter}
                                    key={i}
                                    style={{ display: 'inline-block' }}
                                    variants={{
                                      initial: { y: 0 },
                                      hovered: {
                                        y: '-200%',
                                      },
                                    }}
                                  >
                                    {letter}
                                  </motion.span>
                                );
                              })}
                            </div>
                            <motion.div
                              className={styles.icon}
                              key={`icon_${skillIndex}`}
                              variants={{
                                initial: { y: '100%' },
                                hovered: {
                                  y: '0%',
                                  transition: { delay: 0.4 },
                                },
                              }}
                              style={{ padding: '.3rem' }}
                            >
                              <Icon />
                            </motion.div>
                          </div>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    // </Wrapper>
  );
}
