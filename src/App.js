import React, { useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Tools from './sections/Tools.js';
import data from './assets/data';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { isCompositeComponent } from 'react-dom/test-utils';


function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <>
    <div className="container mx-auto">
      <div data-aos="fade-up" data-aos-once="false" data-aos-ondurationchange="1000" className="" >
       <Hero name={data.hero.name}></Hero>
      </div>
      <div className=''>
        <About desc={data.about.desc}></About>
      </div>
      <div className=''>
        <Tools title={data.tools.title}></Tools>
      </div>
    </div>
    </>
  );
}

export default App;
