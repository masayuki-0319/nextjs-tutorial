import type { NextPage } from 'next';
import Layout from '../components/layouts/Layout';
import { AboutPage } from '../components/pages/AboutPage';

const About: NextPage = () => {
  return (
    <Layout>
      <AboutPage />
    </Layout>
  );
};

export default About;
