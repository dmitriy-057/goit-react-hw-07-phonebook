import { Dna } from 'react-loader-spinner';

import css from './Loader.module.css';

export const Loader = () => {
  return (
    <>
      <Dna className={css.Loader} />
    </>
  );
};
