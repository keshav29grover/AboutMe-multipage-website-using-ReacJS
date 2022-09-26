import React, {useContext, useEffect} from 'react'
import HeroSection from './components/HeroSection'
import Contact from './Contact';
import { useGlobalContext } from './context'
import Services from './Services';

const Home = () => {


  const {updateHomePage} = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  )
}

export default Home;
