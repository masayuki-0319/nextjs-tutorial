import type { NextPage } from 'next';
import Layout from '../components/layouts/Layout';

import { InputPage } from '../components/pages/Input/InputPage';

const Input: NextPage = () => {
  return (
    <Layout>
      <InputPage />
    </Layout>
  );
};

export default Input;
