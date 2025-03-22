import React from 'react';
import HeroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 md:py-20 lg:py-24 w-full'>
      {/* <img src={HeroImage} alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
        transition-transform duration-300 hover:scale-105 md:w-64 md:h-64 lg:w-80 lg:h-80' /> */}
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
        I'm{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Prathmesh Korde
        </span>
        , Python Full-Stack Developer
      </h1>
      <p className='mt-4 text-base md:text-lg lg:text-xl text-gray-300'>
        I specialize in building modern and responsive web applications.
      </p>
    </div>
  );
};

export default Hero;