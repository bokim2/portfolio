import React from 'react';

import styles from './molecules.module.scss';

const MOLECULES_DATA = [
  {
    molecule: 'recombinant human interleukin-10 fusion protein',
    traditionalSource: '',
    description: 'AMT-101 is a recombinant fusion protein that is designed to leverage the anti-inflammatory properties of human interleukin-10 (IL-10). IL-10 is a cytokine with potent anti-inflammatory effects, playing a crucial role in regulating the immune system&quote;s response to inflammation and infection. In the context of AMT-101, this protein is used therapeutically to target specific inflammatory conditions.',
  },
  {
    molecule: 'rebM',
    traditionalSource: 'stevia plant',
    description:
      'rebM is a steviol glycoside that is found in the stevia plant. It is a natural sweetener that is 200 times sweeter than sugar.',
  },
  {
    molecule: 'farnesane',
    traditionalSource: 'stevia plant',
    description:
      'diesel/jet fuel additive.  Farnesane has a higher energy density than other alcohols, and is commonly used at a blend ratio of only 10% with traditional fuels.',
  },
  {
    molecule: 'alpha-amylase',
    traditionalSource: '',
    description: '.',
  },
  {
    molecule: 'gluco-amylase',
    traditionalSource: '',
    description: '.',
  },
  {
    molecule: 'CBD',
    traditionalSource: '',
    description: 'is one of the many active compounds found in the Cannabis sativa plant. Unlike tetrahydrocannabinol (THC), which is the main psychoactive compound in cannabis and CBD is not psychoactive',
  },
  {
    molecule: 'Human milk oligosaccharides (HMOs)',
    traditionalSource: '',
    description: 'complex carbohydrates that are naturally found in human breast milk. They are the third largest solid component in human milk after lactose and fat. They serve several crucial functions, primarily related to the development of the infant&quote;s immune system and gut microbiota',
  },
];

export default function Molecules() {
  return (
    <div className={styles.molecules}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
      numquam quod, nihil veniam aliquid nesciunt velit accusantium quam ullam
      quisquam distinctio eius ipsum similique culpa inventore, voluptatibus
      itaque molestiae deleniti aperiam quia obcaecati debitis. Dolorum animi
      neque ipsum fugit vitae velit, quod iste, nihil provident perferendis hic?
      Ullam, doloremque qui.
    </div>
  );
}
