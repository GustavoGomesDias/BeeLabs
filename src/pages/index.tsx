import React from 'react';
import Header from '../components/Header/Header';
import HomePage from '../components/Home/HomePage';
import About from '../components/About/About';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <HomePage />
      <About />
    </>
  );
};

export default Home;
