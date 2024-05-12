import Wrapper from '@/components/wrapper/wrapper';
import React from 'react';

import styles from './resume.module.scss';

type TresumeData = {
  title: string;
  link?: string;
  secondaryTitle?: string;
  group?: string;
  type: string;
  location?: string;
  date: string;
  description: string[];
};

const resumeData: TresumeData[] = [
  {
    title: 'Seed Flask',
    link: 'www.seedflask.com',
    type: 'Solo Project',
    date: '2023 - 2024',
    description: [
      'Engineered a biotech geared application for tracking experimental conditions, key events, and results in a SQL database to minimize data redundancy through proper use of foreign keys. ',
      'Use of single page architecture and implementation of React Router for effective page navigation.  Improved user experience and reduced network traffic through reduced server calls.',
      'Leveraged React’s Context API to store application data to directly access and update state without manually passing information through the component tree at each level.  Reduced code complexity and simplified state management, resulting in intuitive data flow.',
    ],
  },
  {
    title: 'Rediscope',
    link: 'www.rediscope.com',
    type: 'Open Source Project',
    date: '2022 - 2023',
    description: [
      'Designed live metrics visualization with customizable data collection intervals and ability to set a maximum number of visualized data points for enhanced data resolution.',
      'Initiated a PostgreSQL database for relational data storage and accessibility in an ACID compliant structure with strict schemas, enabling secure concurrent connections from multiple clients.',
      'Built functionalities for improved user control.  Secure login, store, access, and delete database aliases and URLs.',
      'Prepared for production, application dockerization for quick and reliable deployment on AWS Elastic Beanstalk.  Created a custom domain name using AWS Route53.',
      'Developed under tech accelerator OSLabs (opensourcelabs.io). ',
    ],
  },
  {
    title: 'Scientist',
    secondaryTitle: 'Senior Research Associate',
    group: 'Upstream Process Development Department',
    type: 'Applied Molecular Transport',
    location: 'South San Francisco, CA',
    date: '2022 - 2020',
    description: [
      'Upstream process development for production of fusion proteins based on AMT’s carrier technology platform.  Fermentation process development and production for animal studies for lead therapeutic proteins, early-stage pipeline, and developmental candidates.',
      'Implemented Thermo Scientific single-use 30L, a direct scale down model used to operationalize and optimize the manufacturing 300L. Fermentation recipe transfer, scale-up, and validation. ',
      'Client-side team lead for Benchling implementation, a cloud-based platform for biotechnology research and development.  Established entity schemas and material relationships within an Entity-Relationship model framework using a SQL database. ',
      'Led development and testing in a staging environment and completed the migration of configurations (schemas, team structures, notebook templates, etc.) into the production environment.  ',
    ],
  },
  {
    title: 'Associate Scientist III',
    type: 'Amyris',
    group: 'Fermentation Department - New Technology',
    location: 'Emeryville, CA',
    date: '2018 - 2020',
    description: [
      'Worked on infrastructure projects involving new technology evaluation and operationalization.  Implemented Sartorius Ambr250 small-scale, single-use bioreactors (high-throughput, automated liquid handling: cell count, inoculation, sampling, etc) for engineered yeast across multiple fermentation recipes and projects.  Fermentation recipe transfer, scale-down, system validation, validation across projects.  ',
      'Collaborated with software engineers to integrate/automate entity creation and data collection based on key events.  Communicated and supported troubleshooting to diagnose missed event captures.  ',
      'Led well-plate seed development for the Amber250 platform.  Worked with software engineers to address UI, material flow, and identify data entry points. ',
      'Screening and Process Development:  Use of Biolector Pro for strain evaluations and process optimization.  This system utilizes microfluidic plates, provides online measurements of biomass, fluorescence, pH and DO controls feeding rates through micro-valves and microfluidic-channels.  ',
    ],
  },
  {
    title: 'Research Associate',
    type: 'Calysta',
    group: 'Fermentation Department',
    location: 'Menlo Park, CA',
    date: '2015 - 2018',
    description: [
      'High-Throughput Screening Lead:  Developed methanotroph growth and screening in 96WP format.  Increased microtiter screening capability and throughput by 4X.   The system has been successfully validated and routinely utilized by the Strain Engineering Team on-site.  ',

      'Renewable Plastics Project:  Lactate production utilizing methane gas as a primary carbon source.  Growth and Screening:  Developed safe and efficient small-scale batch cultivation methods.  ',

      'Optimized strain evaluation across various small-scale formats (microtiter plates, serum bottles, flasks) for growth and lactate production.  Improved growth rates and titer across formats by 2-3X, allowing for improved breakout in performance.  Reduced microtiter plate standard deviation and increased dynamic range of testing.  ',
    ],
  },
  {
    title: 'Research Assistant',
    secondaryTitle: 'Process Technician II',
    group:
      'Grain Applications Research Team, Automation and Data Visualization Team',
    type: 'Genencor International (now IFF)',
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
  },
];

export default function Resume() {
  return (
    <Wrapper>
      <section>
        <ul className={`${styles.resumeUl}`}>
          {resumeData.map(
            (
              {
                title,
                secondaryTitle,
                link,
                group,
                type,
                location,
                date,
                description,
              },
              i
            ) => (
              <li key={i} className={`${styles.resumeLi}`}>
                {secondaryTitle ? (
                  <h3>
                    {title} - {secondaryTitle}
                  </h3>
                ) : (
                  <h3>{title}</h3>
                )}
                {link && <h4>{link}</h4>}
                <h4>{type}</h4>
                {group && <h5 className={`${styles.noMargin}`}>{group}</h5>}
                {location && <h5>{location}</h5>}
                <h6 className={`${styles.noMargin}`}>{date}</h6>
                <ul className={`${styles.listUl}`}>
                  {description.map((item, i) => (
                    <li key={i} className={`${styles.listLi}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </section>
      <EducationCertifications />
    </Wrapper>
  );
}

function EducationCertifications() {
  return (
    <div>
      <div>
        <h3>Education</h3>
        <h4>University of California, Los Angeles</h4>
        <h4>Bachelor of Science in Chemical Engineering</h4>
      </div>
      <div>
        <h3>Professional Certifications</h3>
        <h4>AWS Solutions Architect Associate (SAA-C03)</h4>
        <h5>Valid until June 07, 2026</h5>
      </div>
    </div>
  );
}
