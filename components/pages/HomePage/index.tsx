import { NextPage } from 'next';
import Link from 'next/link';

import styles from './Home.module.css';

export const HomePage: NextPage = (props) => {
  const {} = props;

  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h1>
      <p className={styles.description}>
        <Link href={'/about'}>Link About</Link>
      </p>
    </>
  );
};
