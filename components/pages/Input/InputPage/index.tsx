import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import { useRecoilState } from 'recoil';
import { inputState } from '../../../../state/inputState';

import styles from './InputPage.module.css';

export const InputPage: NextPage = () => {
  const [form, setForm] = useState<string>('');
  const [input, setInput] = useRecoilState(inputState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(event.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setInput({ text: form });
  };

  return (
    <>
      <h1 className={styles.title}>InputPage</h1>
      <p className={styles.description}>
        <Link href={'/'}>Link Home</Link>
      </p>
      <p className={styles.description}>
        <form onSubmit={onSubmit}>
          <input type={'text'} onChange={onChange} />
          <input type={'submit'} value={'登録する'} />
        </form>
      </p>
      <p className={styles.description}>入力データ→「{form}」</p>
      <p className={styles.description}>状態管理データ→「{input.text}」</p>
    </>
  );
};
