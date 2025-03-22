import React from 'react';
import AboutImage from '../assets/hero-image.jpg';
import HtmlImage from '../assets/html.png';
import CssImage from '../assets/css.png';
import JsImage from '../assets/js.png';
import ReactImage from '../assets/react.png';
import PythonImage from '../assets/python.png';
import DjangoImage from '../assets/dj.png';
import OracleImage from '../assets/oracle.png';

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* <img
            src={AboutImage}
            alt=""
            className="w-full md:w-72 h-auto rounded object-cover mb-8 md:mb-0"
          /> */}
          <div className="flex-1">
            <p className="text-base md:text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            {/* <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <label htmlFor="htmlandcss" className="w-full sm:w-2/12 mb-2 sm:mb-0">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                      transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <label htmlFor="reactjs" className="w-full sm:w-2/12 mb-2 sm:mb-0">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                      transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <label htmlFor="python" className="w-full sm:w-2/12 mb-2 sm:mb-0">
                  Python
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                      transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div> */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <img src={HtmlImage} alt="" className="w-16 h-16 object-cover rounded-md" />
              <img src={CssImage} alt="" className="w-16 h-16 object-cover rounded-md" />
              <img src={JsImage} alt="" className="w-16 h-16 object-cover rounded-md" />
              <img src={ReactImage} alt="" className="w-16 h-16 object-cover rounded-md" />
              <img src={PythonImage} alt="" className="w-16 h-16 object-cover rounded-md" />
              <img src={DjangoImage} alt="" className="w-16 h-16 object-cover rounded-md" />
              <img src={OracleImage} alt="" className="w-16 h-16 object-cover rounded-md" />
            </div>
            {/* <div className="mt-12 flex flex-col sm:flex-row justify-around text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500">
                  50+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
