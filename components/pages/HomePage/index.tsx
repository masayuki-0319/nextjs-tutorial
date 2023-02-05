import { NextPage } from 'next';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { inputState } from '../../../state/inputState';

import styles from './Home.module.css';

export const HomePage: NextPage = (props) => {
  const [input, _setInput] = useRecoilState(inputState);

  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h1>
      <p className={styles.description}>
        <Link href={'/about'}>Link About</Link>
      </p>
      <p className={styles.description}>
        <Link href={'/input'}>Link InputPage</Link>
      </p>
      <p className={styles.description}>状態管理データ→「{input.text}」</p>
    </>
  );
};
