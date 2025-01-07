import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Service from '../Services/Service';
import Parts from '../Parts/Parts';
import Testnomial from '../Testnominal/Testnomial';
import Tesnom from '../Tesnom/Tesnom';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Service/>
      <Parts/>
      <Testnomial />
      <Tesnom />
      <Footer /> 
    </div>
  );
};

export default Home;
