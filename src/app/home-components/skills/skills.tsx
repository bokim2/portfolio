import Wrapper from '@/components/wrapper/wrapper';
import { motion } from 'framer-motion';
import styles from './skills.module.scss';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiReactquery, SiRedux, SiSass } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { IconType } from 'react-icons';

// type TSkill = {
//   skillArea: string;
//   skills: string[];
//   icons: IconType[];
// };

type Skill = {
  [key: string]: IconType;
};

type TSkill = {
  skillArea: string;
  skills: Skill[];
  // icons: IconType[];
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
    // icons: [
    //   FaReact,
    //   RiNextjsFill,
    //   SiRedux,
    //   SiSass,
    //   TbBrandFramerMotion,
    //   SiReactquery,
    // ],
  },
  {
    skillArea: 'Tools',
    skills: [
      { Git: FaReact },
      { AWS: FaReact },
      { Webpack: FaReact },
      { Figma: FaReact },
      { Docker: FaReact },
      { Auth0: FaReact },
    ],
  },
  {
    skillArea: 'Backend',
    skills: [
      { 'Node.js': FaReact },
      { Express: FaReact },
      { PostgreSQL: FaReact },
      { MongoDB: FaReact },
      { 'RESTful API': FaReact },
    ],
  },
  {
    skillArea: 'Languages',
    skills: [
      { JavaScript: FaReact },
      { TypeScript: FaReact },
      { HTML: FaReact },
      { CSS: FaReact },
      { Python: FaReact },
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
    <Wrapper>
      <div className={styles.skills}>
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
                  {/* <ul>
                  {area.skills.map((el, i) => {
                    return (
                      <>
                        <motion.li
                          key={`text_${i}`}
                          initial={{ opacity: 1 }}
                          whileHover={{ opacity: 0 }}
                        >
                          {el}
                        </motion.li>
                      </>
                    );
                  })}
                  </ul>
                  <ul className={styles.revealedIconsUl}>
                  {area.icons.map((Icon, i) => {
                    return (
                      <>
                        <motion.li
                          key={`icon_${i}`}
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className={styles.iconsLi}
                        >
                         <Icon />
                        </motion.li>

                      </>
                    );
                  })}
                </ul> */}
                  <motion.ul
                    // variants={staggerVariants}
                    // initial='hidden'
                    // whileInView='visible'
                    // viewport={{once: true, amount: .2}}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.5,
                          // delay: 0.3 + 0.15 * skillsIndex,
                        },
                      },
                    }}
                  >
                    {area.skills.map((skill, skillIndex) => {
                      const skillName = Object.keys(skill)[0];
                      const Icon = skill[skillName];
                      return (
                        <li key={skillIndex} className={styles.singleSkill}>
                          <motion.div
                            className={styles.text}
                            key={`text_${skillIndex}`}
                            initial={{ opacity: 0 }}
                            variants={{
                              hidden: { opacity: 0 },
                              visible: {
                                opacity: 1,
                                // color: '#AA4A44',
                                transition: {
                                  // staggerChildren: 0.1,
                                  // delay: 1
                                },
                              },
                            }}
                          >
                            {Object.keys(skill)[0]}
                          </motion.div>
                          <motion.div
                            className={styles.icon}
                            key={`icon_${skillIndex}`}
                            variants={{
                              hidden: { opacity: 1 },
                              visible: {
                                opacity: 0,
                                // color: '#AA4A44',
                                transition: {
                                  // staggerChildren: 0.1,
                                  // delay: 1
                                },
                              },
                            }}
                          >
                            <Icon />
                          </motion.div>
                        </li>
                      );
                    })}
                  </motion.ul>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </Wrapper>
  );
}
