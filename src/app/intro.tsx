'use client'

import React from 'react';

const CompanyIconsRow: React.FC = () => {
    const companies = [
      {
        name: "Capital One",
        logo: <img className="max-h-24 w-24" src="https://tbcdn.talentbrew.com/company/234/gst_v1_0/img/logo-capital-one.svg" alt="c1"/>,
        website: "https://www.capitalone.com",
      },
      {
        name: "Drizly",
        logo: <img className="max-h-24" src="https://imagedelivery.net/Xh-8qVol1Pftdals16ieKg/7698f546-d965-4a5d-e766-2200beb85100/public" alt="drizly"></img>,
        website: "https://www.drizly.com",
      },
      {
        name: "ProdPerfect",
        logo: <img className="max-h-24 scale-75" src="https://prodperfect.com/wp-content/themes/prodperfect/favicon.png" alt='p2' />,
        website: "https://prodperfect.com",
      },
      {
        name: "Wayfair",
        logo: <img className="max-h-24" src="https://imagedelivery.net/Xh-8qVol1Pftdals16ieKg/6855f684-027c-4252-5bbc-b4b711a1fd00/public" alt="wayfair" />,
        website: "https://www.wayfair.com",
      },
    ];
  
    return (
      <div className="flex justify-center items-center space-x-4">
        {companies.map((company, index) => (
            <a
                key={index}
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
            >
                {company.logo}
            </a>
        ))}
      </div>
    );
  };

const Intro: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-semibold mb-1 text-center">Alexander Rodion Michaud</h1>
            <p className='mb-2'>or ARM, if you&apos;re in a hurry</p>
            <div className='flex p-4 justify-between align-center flex-col sm:flex-row max-h-[600px] mt-6'>
                <div className='sm:w-1/2'>
                    <img className="rounded-lg dark:border-solid dark:border-4 dark:border-gray-600 max-h-[100%]" src="https://imagedelivery.net/Xh-8qVol1Pftdals16ieKg/ccbbd565-53b4-4780-7fee-b4bcef64c100/public" alt="profile_pic" /> 
                </div>
                <section className="p-6 sm:w-1/2 flex flex-col justify-around mt-12 sm:mt-0">
                    <div className='flex flex-col justify-center mb-14 sm:mb-6'>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-1 text-center ">Where I&apos;ve Worked</h2> 
                        <CompanyIconsRow />
                    </div>
                    <div className='flex flex-col justify-center mb-14 sm:mb-4'>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-1 text-center">What I&apos;ve Done</h2>
                        <p className='text-center'>
                          Developed apps for the web (NextJS, Ruby on Rails, PHP) and Android (Java/Kotlin). 
                        </p>
                    </div>
                    <div className='flex flex-col justify-center mb-14 sm:mb-6'>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-1 text-center">What I&apos;m Doing Now</h2>
                        <p className='text-center'>Using Python-based compliance tools to ensuring Capital One's AWS resources comply with safety standards</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Intro;