import Image from 'next/image';

import styles from './aboutCarousel.module.scss';

import biomek1Img from '@/../public/images/experience/biomek1.jpg';

export const ABOUT_ME = [
  {
    title: 'the journey up to this point',
    subtitle: 'biotech',
    equipment: [],
    pictures: [biomek1Img],
    text: (
      <>
        My primary area of specialization was upstream process development, aka
        working with bioreactors, often referred to as &quot;fermentation&quot;,
        a term originating from the historical use of microorganisms for the
        production of alcoholic beverages.
        <br />
        My experience involved cultivating genetically modified microbes to
        produce therapeutic proteins and enzymes. Additionally, I was involved
        in the production of molecules such as squalene, an oil found in shark
        liver used in cosmetics, and Rebaudioside M (rebM), a zero-calorie
        sweetener naturally derived from the stevia plant.
      </>
    ),
  },
  {
    title: 'interest in software engineering',
    subtitle: "what I've worked with",
    equipment: [],
    pictures: [],
    text: (
      <>
        My primary area of specialization was upstream process development, aka
        working with bioreactors, often referred to as &quot;fermentation&quot;,
        a term originating from the historical use of microorganisms for the
        production of alcoholic beverages.
        <br />
        My experience involved cultivating genetically modified microbes to
        produce therapeutic proteins and enzymes. Additionally, I was involved
        in the production of molecules such as squalene, an oil found in shark
        liver used in cosmetics, and Rebaudioside M (rebM), a zero-calorie
        sweetener naturally derived from the stevia plant.
      </>
    ),
  },
] as const;

type TCard = {
  item: (typeof ABOUT_ME)[number];
  i: number;
};

export default function Card({ item, i }: TCard) {
  return (
    <div key={i} className={styles.card}>
      <div className={styles.cardColumn}>
        <h3>{item?.title}</h3>
        <h4>{item?.subtitle}</h4>
        <p>{item?.text}</p>
      </div>
      <div className={styles.cardColumn}>
        {item?.pictures?.length > 0 ? (
          <div className={styles.cardImageContainer}>
            {item?.pictures.map((image, i) => (
              <Image
                src={item?.pictures?.[i]}
                alt={item?.title}
                layout="fill"
                objectFit="cover"
                key={i}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
