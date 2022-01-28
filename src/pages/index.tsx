import React from 'react';
import Header from '../components/Header/Header';
import HomePage from '../components/Home/HomePage';
import About from '../components/About/About';
import SectionOne from '../components/Product/SectionOne';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <SectionOne />
    </>
  );
};

export default Home;
