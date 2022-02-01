import React from 'react';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/NoSSR/NoSSR'),
  { ssr: false },
);

const Home = (): JSX.Element => {
  return (
    <DynamicComponentWithNoSSR />
  );
};

export default Home;
