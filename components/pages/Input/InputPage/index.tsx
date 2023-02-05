import { NextPage } from 'next';
import Link from 'next/link';

import styles from './InputPage.module.css';

export const InputPage: NextPage = (props) => {
  const {} = props;

  return (
    <>
      <h1 className={styles.title}>InputPage</h1>
      <p className={styles.description}>
        <Link href={'/'}>Link Home</Link>
      </p>
    </>
  );
};