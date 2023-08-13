'use client'

import React from 'react';

const Education: React.FC = () => {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Educational Background</h2>
  
        <div className="border p-4 rounded-lg shadow mb-4">
          <h3 className="text-xl font-semibold dark:text-white">Startup Institute, Web Development Fellow</h3>
          <p className="text-gray-600 mb-2">Trained in professional full-stack development, building web apps using Ruby on Rails.</p>
          <p className="text-gray-600 mb-2">Served as project manager on a team of 8 developers, tasked with designing user flow diagrams and wireframes for software in development at Tolemi, a Y Combinator startup.</p>
          <p className="text-gray-600 mb-2">Jan 2018 - Apr 2018</p>
        </div>
  
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold dark:text-white">Yale University, New Haven, CT</h3>
          <p className="text-gray-600 mb-2">B.A. in English. Primary academic interests included Shakespeare and Film Theory.</p>
          <p className="text-gray-600 mb-2">Aug 2012 - May 2017</p>
        </div>
      </div>
    );
  };
  
  export default Education;