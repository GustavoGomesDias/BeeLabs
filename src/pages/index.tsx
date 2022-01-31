import React from 'react';
import Header from '../components/Header/Header';
import HomePage from '../components/Home/HomePage';
import About from '../components/About/About';
import SectionOne from '../components/Product/SectionOne';
import Contact from '../components/Contact/Contact';
import SectionTwo from '../components/Product/SectionTwo';
import SectionThree from '../components/Product/SectionThree';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <SectionOne />
      <Contact />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default Home;
