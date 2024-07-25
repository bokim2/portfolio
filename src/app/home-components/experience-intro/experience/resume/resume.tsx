import Wrapper from '@/components/wrapper/wrapper';
import React, { useEffect, useRef, useState } from 'react';

import styles from './resume.module.scss';
import { FaCaretDown, FaExternalLinkSquareAlt } from 'react-icons/fa';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import {
  PiCaretDoubleDownThin,
  PiCaretDoubleUpThin,
  PiDnaFill,
} from 'react-icons/pi';
import { useInView } from 'react-intersection-observer';
import { MdOutlineBiotech, MdOutlineScience } from 'react-icons/md';
import { FaDroplet } from 'react-icons/fa6';
import { SiMoleculer } from 'react-icons/si';
import { GiMolecule } from 'react-icons/gi';
import Overlay from '@/components/overlay/overlay';
import { RiTestTubeFill } from 'react-icons/ri';

import ucla from '@/../public/images/experience/ucla.png';
import aws from '@/../public/images/experience/aws.png';

type TresumeData = {
  title: string;
  summary?: string;
  link?: string;
  secondaryTitle?: string;
  group?: string;
  type: string;
  location?: string;
  date: string;
  techStack?: string[];
  intro?: string;
  description: string[];
  imagePath?: string;
  imageStyle?: any;
};

const resumeData: TresumeData[] = [
  {
    title: 'Seed Flask',
    summary: 'Scientific Data Recording Web App',
    link: 'https://www.seedflask.com',
    type: 'Solo Project',
    date: '2023 - 2024',
    intro: `Web app for recording and visualizing scientific data. Capture
    strain information, start flasks, and view previous
   growth curves to plan sample times, create sample schedules,
   save time with the dilution calculator. Securely log in
   with Auth0 (Google or GitHub) to observe and save your data.`,
    techStack: [
      'Typescript',
      'React',
      'React Router',
      'React ChartJS',
      'Redux Toolkit',
      'Styled Components',
      'Tanstack Query',
      'Node.js',
      'Express',
      'PostgresSQL',
      'Zod',
      'Auth0',
      'Heroku',
    ],
    description: [
      'Engineered a biotech geared application for tracking experimental conditions, key events, and results in a SQL database to minimize data redundancy through proper use of foreign keys. ',
      'Use of single page architecture and implementation of React Router for effective page navigation.  Improved user experience and reduced network traffic through reduced server calls.',
      'Leveraged React’s Context API to store application data to directly access and update state without manually passing information through the component tree at each level.  Reduced code complexity and simplified state management, resulting in intuitive data flow.',
    ],
    imagePath: '/images/projects/seed_flask_d1.jpg',
    imageStyle: { objectFit: 'contain' },
  },
  {
    title: 'Rediscope',
    link: 'https://rediscope.com',
    type: 'Open Source Project',
    summary: 'Redis Metrics Visualization Web App',
    date: '2022 - 2023',
    intro: `An open-source Redis database metrics visualization tool. Use the
    customizable data collection intervals and visualized data points for
    enhanced data resolution. Containerized using Docker and deployed using AWS.`,
    techStack: [
      'React',
      'React Router',
      'Styled Components',
      'Yup',
      'Formik',
      'Node.js',
      'Express',
      'PostgresSQL',
      'React ChartJS',
      'Node-Redis',
      'Docker',
      'AWS',
      'Elastic Beanstalk',
      'Route53',
    ],
    description: [
      'Designed live metrics visualization with customizable data collection intervals and ability to set a maximum number of visualized data points for enhanced data resolution.',
      'Initiated a PostgreSQL database for relational data storage and accessibility in an ACID compliant structure with strict schemas, enabling secure concurrent connections from multiple clients.',
      'Built functionalities for improved user control.  Secure login, store, access, and delete database aliases and URLs.',
      'Prepared for production, application dockerization for quick and reliable deployment on AWS Elastic Beanstalk.  Created a custom domain name using AWS Route53.',
      'Developed under tech accelerator OSLabs (opensourcelabs.io). ',
    ],
    imagePath: '/images/experience/rediscope-team.jpg',
    imageStyle: { objectFit: 'contain' },
  },

  {
    title: 'Scientist',
    secondaryTitle: 'Senior RA',
    group: 'Upstream Process Development Department',
    type: 'Applied Molecular Transport',
    summary: 'Oral Biologics / Drug Carrier Technology',
    location: 'South San Francisco, CA',
    date: '2020 - 2022',
    description: [
      'Upstream process development for production of fusion proteins based on AMT’s carrier technology platform.  Fermentation process development and production for animal studies for lead therapeutic proteins, early-stage pipeline, and developmental candidates.',
      'Implemented Thermo Scientific single-use 30L, a direct scale down model used to operationalize and optimize the manufacturing 300L. Fermentation recipe transfer, scale-up, and validation. ',
      'Client-side team lead for Benchling implementation, a cloud-based platform for biotechnology research and development.  Established entity schemas and material relationships within an Entity-Relationship model framework using a SQL database. ',
      'Led development and testing in a staging environment and completed the migration of configurations (schemas, team structures, notebook templates, etc.) into the production environment.  ',
    ],
    imagePath: '/images/progressive/amt.jpg',
    imageStyle: { objectFit: 'cover' },
  },
  {
    title: 'Associate Scientist III',
    type: 'Amyris',
    group: 'Fermentation Department - New Technology',
    summary: 'Synthetic Biotechnology / Renewable Chemicals',
    location: 'Emeryville, CA',
    date: '2018 - 2020',
    description: [
      'Worked on infrastructure projects involving new technology evaluation and operationalization.  Implemented Sartorius Ambr250 small-scale, single-use bioreactors (high-throughput, automated liquid handling: cell count, inoculation, sampling, etc) for engineered yeast across multiple fermentation recipes and projects.  Fermentation recipe transfer, scale-down, system validation, validation across projects.  ',
      'Collaborated with software engineers to integrate/automate entity creation and data collection based on key events.  Communicated and supported troubleshooting to diagnose missed event captures.  ',
      'Led well-plate seed development for the Amber250 platform.  Worked with software engineers to address UI, material flow, and identify data entry points. ',
      'Screening and Process Development:  Use of Biolector Pro for strain evaluations and process optimization.  This system utilizes microfluidic plates, provides online measurements of biomass, fluorescence, pH and DO controls feeding rates through micro-valves and microfluidic-channels.  ',
    ],
    imagePath: '/images/progressive/amyris.jpg',
    imageStyle: { objectPosition: 'top right', objectFit: 'cover' },
  },
  {
    title: 'Research Associate',
    type: 'Calysta',
    summary: 'Sustainable protein for feed and food',
    group: 'Fermentation Department',
    location: 'Menlo Park, CA',
    date: '2015 - 2018',
    description: [
      'Renewable Plastics Project:  Lactate production utilizing methane gas as a primary carbon source.  Growth and Screening:  Developed safe and efficient small-scale batch cultivation methods.  ',
      'High-Throughput Screening Lead:  Developed methanotroph growth and screening in 96WP format.  Increased microtiter screening capability and throughput by 4X.   The system has been successfully validated and routinely utilized by the Strain Engineering Team on-site.  ',

      'Optimized strain evaluation across various small-scale formats (microtiter plates, serum bottles, flasks) for growth and lactate production.  Improved growth rates and titer across formats by 2-3X, allowing for improved breakout in performance.  Reduced microtiter plate standard deviation and increased dynamic range of testing.  ',
    ],
    imagePath: '/images/progressive/calysta.jpg',
    imageStyle: { objectFit: 'cover' },
  },
  {
    title: 'Research Assistant',
    secondaryTitle: 'PT II',
    group: 'Applications Research Team, Automation and Data Visualization Team',
    type: 'Dupont (Genencor)',
    summary: 'Enzymes for biofuels & detergent applications',
    location: 'Palo Alto, CA',
    date: '2012 - 2015',
    description: [
      'Home and Personal Care (HPC) Project:  Enzyme screening for laundry and dish applications.  Streamlining library screening and utilizing robotics for improved throughput and processing time.  ',

      'High-Throughput Screening:  Use of Biomek liquid handlers for library screening, Bacillus subtilis growth, protein (expression, harvest, quantification), performance evaluation in 96-well microtiter plate assays, and hit picking lead molecules for further analysis. Coordinate third-party sequencing, mutation reports, and data file generation.  ',

      'Workflow Efficiency:  ▪ High-performance liquid chromatography (HPLC):  developed integration methods for amylase quantification, resulting in a 10-fold reduction in data processing time.  Protein Purification:  collaborated with protein purification lead to develop a smaller, faster alpha-amylase purification process which was instituted as a secondary screening step.  ',

      'First generation bioethanol production project:  Screen biorefinery product leads for simultaneous saccharification and fermentation (SSF).  Develop industry specific model systems for bioethanol production and performing fermentation evaluations in microtiter plates, shake flasks, ANKOM Gas Production systems, and DASGIP bioreactors.   ',

      'Applications Testing:  Responsible for applications test design, execution, and analysis of experiments for first generation bioethanol SSF biorefinery components: alpha-amylase, gluco-amylase, auxiliary enzymes, yeast and fungi.   ',

      'Model Systems:  ▪ Developed micro-titer scale anaerobic SSF for strain performance ranking.  Improved anaerobic throughput and reduced consumables and substrate waste.  Developed robotics method to automate HPLC sample preparation using the BIOMEK liquid handler (FX span-8 and multichannel). ',

      'Completed SSF shake flask scale up to 1 liter DASGIP bioreactor crossover.  Modeling applications to mimic anaerobic conditions observed in industry enabled determination of industry relevant breakout in fermentation performance. ',
    ],
    imagePath: '/images/progressive/genencor1.jpg',
    imageStyle: { objectFit: 'cover', objectPosition: '0% 20%' },
  },
  {
    title: 'This Portfolio',
    link: '',
    type: 'A frontend heavy experiment',
    // summary: 'I wanted to have fun and explore with this portfolio. I wanted to experiment and explore further with three.js, framer motion, and other libraries.  Design, visual hiarchy, and typography was also something I wanted think about and consider.',
    date: '2024',
    intro: ``,
    techStack: [
      'Next.js',
      'React',
      'Typescript',
      'Framer Motion',
      'Three.js',
      'React Three Drei',
      'Sass',
      // '',
    ],
    description: [
      // 'Frontend heavy experiment',
      'I wanted to have fun and explore with this portfolio. I wanted to experiment and explore further with three.js, framer motion, and other libraries.',
      'Design, visual hiarchy, and typography was also something I wanted think about and consider.',
    ],
    // imagePath: '/images/experience/portfolio.jpg',
    imageStyle: { objectFit: 'cover' },
  },
];

export default function Resume() {
  const [toggleResumeDetails, setToggleResumeDetails] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const resumeRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [scrollToIndex, setScrollToIndex] = useState<number | null>(null);
  const controls = useAnimation();

  async function handleToggle(index: number) {
    setShowOverlay(true);
    console.log('handleToggle clicked');
    // await controls.start({ opacity: 0.2 });

    setTimeout(() => {
      setScrollToIndex(index);
      setToggleResumeDetails((prev) => !prev);
    }, 100);

    // controls.start({ opacity: 1, transition: { duration: 1 } });
  }

  useEffect(() => {
    if (
      scrollToIndex !== null &&
      itemRefs.current[scrollToIndex] &&
      itemRefs.current[scrollToIndex]
    ) {
      itemRefs.current[scrollToIndex]!.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setScrollToIndex(null);
  }, [scrollToIndex]);

  return (
    // <Wrapper>
    <div className={styles.resume}>
      <AnimatePresence>
        {showOverlay && <Overlay onClose={() => setShowOverlay(false)} />}
      </AnimatePresence>
      {/* {<Overlay onClose={()=> setShowOverlay(true)}/>} */}
      <motion.section
        className={`${styles.resumeSection}`}
        ref={resumeRef}
        // animate={controls}
        // initial={{ opacity: 1 }}
      >
        <h2 className={``}>Experience</h2>
        <motion.ul className={`${styles.resumeUl}`}>
          {resumeData.map(
            (
              {
                title,
                summary,
                secondaryTitle,
                link,
                group,
                type,
                location,
                date,
                intro,
                techStack,
                description,
                imagePath,
                imageStyle,
              },
              i
            ) => (
              <motion.li
                key={i}
                className={`${styles.resumeLi}`}
                // ref={(el: HTMLLIElement | null) => {
                //   if (el) {
                //     itemRefs.current[i] = el;
                //   }
                // }}
              >
                <div
                  className={`${styles.spacer} `}
                  ref={(el: HTMLElement | null) => {
                    if (el) {
                      itemRefs.current[i] = el;
                    }
                  }}
                ></div>
                <div
                  className={`${styles.resumeLiSection} ${styles.resumeLiTop}`}
                >
                  <div className={`${styles.titleColumns}`}>
                    {secondaryTitle && (
                      <h3>
                        {title}
                        <span className={`${styles.secondaryTitle} `}>
                          {' '}
                          - {secondaryTitle}
                        </span>
                      </h3>
                    )}
                    {link && !secondaryTitle ? (
                      <>
                        <a href={link} target="_blank">
                          <h3
                            className={`${styles.titleContainer} ${styles.experienceTitle}`}
                          >
                            {title}
                            <FaExternalLinkSquareAlt />
                          </h3>
                        </a>
                      </>
                    ) : (
                      !secondaryTitle && (
                        <h3
                          className={`${styles.titleContainer} ${styles.experienceTitle}`}
                        >
                          {title}
                        </h3>
                      )
                    )}
                    <h6 className={`${styles.noMargin} ${styles.date}`}>
                      {date}
                    </h6>
                  </div>
                  <h4 style={{ marginBottom: '0.25rem' }}>{type}</h4>
                  <h5>{summary}</h5>
                  {group && (
                    <h6 className={`${styles.noMargin} fontWeight400`}>
                      {group}
                    </h6>
                  )}

                  {location && (
                    <h6 className={`${styles.noMargin} fontWeight400`}>
                      {location}
                    </h6>
                  )}

                  {intro && <p className={``}>{intro}</p>}

                  {/* <div> */}
                  {imagePath && (
                    <motion.div
                      className={` ${styles.experienceImageContainer} imgBorderRadius`}
                      // whileHover={{scale: 1.03}}
                      // transition={{ duration: .2,
                      // ease: 'backInOut'}}
                    >
                      <Image
                        src={imagePath}
                        alt={imagePath}
                        fill
                        priority
                        style={imageStyle || { width: '100%' }}
                      />
                    </motion.div>
                  )}

                  {techStack && (
                    <div className={styles.projectTechContainer}>
                      <ul>
                        {techStack.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* </div> */}
                  {toggleResumeDetails ? (
                    <div className={`${styles.resumeDetails}`}>
                      <motion.ul
                        key="resumelist"
                        // layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className={`${styles.listUl}`}
                      >
                        {description.map((item, i) => (
                          <li key={i} className={`${styles.listLi}`}>
                            <p className="">{item}</p>
                          </li>
                        ))}
                      </motion.ul>
                      <motion.div
                        key="upArrow"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, x: 5 }}
                        transition={{ delay: 0.75, duration: 0.75 }}
                        style={{
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        <PiCaretDoubleUpThin
                          className={`${styles.caretUp}`}
                          size={24}
                          // style={{ position: 'absolute', top: '0'}}
                          onClick={() => handleToggle(i)}
                        />
                      </motion.div>
                    </div>
                  ) : (
                    <ToggleIcon handleToggle={handleToggle} listIndex={i} />
                  )}
                </div>
              </motion.li>
            )
          )}
        </motion.ul>
      </motion.section>
      <EducationCertifications />
      {/* </Wrapper> */}
    </div>
  );
}

type TtoggleIconProps = {
  handleToggle: (index: number) => void;
  listIndex: number;
};
function ToggleIcon({
  handleToggle,
  listIndex,
}: TtoggleIconProps): JSX.Element {
  const { ref, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const [showDroplet, setShowDroplet] = useState(true);
  useEffect(() => {
    if (isInView) {
      setShowDroplet(true);
      const timer = setTimeout(() => {
        setShowDroplet(false);
      }, 500); // Delay of 0.5 seconds

      return () => clearTimeout(timer);
    } else {
      setShowDroplet(true);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ height: '30px' }}
      onClick={() => handleToggle(listIndex)}
    >
      <AnimatePresence>
        {showDroplet ? (
          <motion.div
            key="animationIcon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.75 }}
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            {listIndex == 0 && <FaDroplet size={24} />}
            {listIndex == 1 && <MdOutlineBiotech size={24} />}
            {listIndex == 2 && <MdOutlineScience size={24} />}
            {listIndex == 3 && <PiDnaFill size={24} />}
            {listIndex == 4 && <SiMoleculer size={24} />}
            {listIndex == 5 && <GiMolecule size={24} />}
            {listIndex == 6 && <RiTestTubeFill size={24} />}
          </motion.div>
        ) : (
          <motion.div
            key="downArrow"
            className={`${styles.caretDown}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ delay: 0.75, duration: 0.75 }}
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <PiCaretDoubleDownThin size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function EducationCertifications() {
  return (
    <div className={`${styles.educationCertifications}`}>
      <div className={`${styles.education}`}>
        {/* <h2 className={`marginSmall`}>EDUCATION</h2> */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={ucla}
            alt="ucla logo"
            style={{ width: '20%', height: 'auto' }}
          />
        </div>
        <h3 style={{ lineHeight: 1.3 }}>
          University of California Los Angeles
        </h3>

        <h4 className={''} style={{ lineHeight: 1.3 }}>
          B.S. Chemical Engineering
        </h4>
      </div>
      <div className={`${styles.certifications}`}>
        {/* <h2 className={`marginSmall`}>Professional Certifications</h2> */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={aws}
            alt="aws logo"
            style={{ width: '20%', height: 'auto' }}
          />
        </div>
        <h3 style={{ lineHeight: 1.3 }}>AWS </h3>
        <h4 style={{ lineHeight: 1.3 }}>
          Solutions Architect Associate (SAA-C03)
        </h4>
        <h5>Valid until June 07, 2026</h5>
      </div>
    </div>
  );
}
