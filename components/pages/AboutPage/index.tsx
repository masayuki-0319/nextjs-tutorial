import { NextPage } from 'next';
import Link from 'next/link';

import styles from './AboutPage.module.css';

export const AboutPage: NextPage = (props) => {
  const {} = props;

  return (
    <>
      <h1 className={styles.title}>About Page</h1>
      <p className={styles.description}>
        <Link href={'/'}>Link home</Link>
      </p>
    </>
  );
};
