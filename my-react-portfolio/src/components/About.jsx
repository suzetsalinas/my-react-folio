import React from 'react';
import { motion } from 'framer-motion';
import headshot from '../assets/FullSizeRender.png';

function About() {
  return (
    <div className="container my-24 mx-auto px-6">
      <section className="mb-32 text-center lg:text-left">
        <div className="flex flex-column items-center justify-center lg:justify-center">
          <div className="mb-12 lg:w-5/12 lg:mr-12">
            <div className="flex justify-center lg:justify-start">
              <img src={headshot} alt='Suzet headshot' className="w-full rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="bg-gray-400 rounded-lg p-6 lg:pl-12">
              <h1 className="mb-8 text-3xl font-bold text-center lg:text-left">About Me</h1>
              <p className="mb-8 pb-2 text-center lg:text-left">
                Description 1
              </p>
              <p className="mb-8 pb-2 text-center lg:text-left">
                Description 2
              </p>
              <p className="mb-8 pb-2 text-center lg:text-left">
                Description 3
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;