import React from 'react';
import Header from '../Header/Header';
import HomePage from '../Home/HomePage';
import About from '../About/About';
import SectionOne from '../Product/SectionOne';
import Contact from '../Contact/Contact';
import SectionTwo from '../Product/SectionTwo';
import SectionThree from '../Product/SectionThree';
import Footer from '../Footer/Footer';

const NoSSR = (): JSX.Element => {
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <SectionOne />
      <Contact />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
};

export default NoSSR;
