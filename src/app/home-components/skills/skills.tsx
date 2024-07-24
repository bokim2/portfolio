
import styles from './skills.module.scss';

const skillsData = [
  {
    area: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Redux',
      'Sass',
      'Framer Motion',
      'Tanstack Query',

    ],
  },
  {
    area: 'Tools',
    skills: ['Git', 'AWS', 'Webpack', 'Figma', 'Docker', 'Auth0'],
  },
  {
    area: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'RESTful API'],
  },
  {
    area: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
  },
];

export default function Skills() {
  return (
    <div className={styles.skills}>
      <ul className={styles.areas}>
{skillsData.map((area, i)=> {
    return (
        <li key={i} className={styles.area}>
            <h3>{area.area}</h3>
            <ul>
                {area.skills.map((el, i)=> {
                    return (
                        <li key={i}>{el}</li>
                    )
                })}
            </ul>
        </li>
    )
})}

      </ul>
    </div>
  );
}
