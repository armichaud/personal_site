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
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-1 text-center">Alexander Rodion Michaud</h1>
            <p className='mb-2 sm:text-2xl'>or ARM, if you&apos;re in a hurry</p>
            <div className='flex p-4 align-center flex-col sm:flex-row mt-6'>
                <div className="rounded-lg sm:w-1/2 md:relative md:overflow-hidden">
                    <img className="rounded-lg md:absolute md:-top-[20%] lg:-top-[30%] xl:-top-[50%] w-[100%]" src="https://imagedelivery.net/Xh-8qVol1Pftdals16ieKg/ccbbd565-53b4-4780-7fee-b4bcef64c100/public" alt="profile_pic" /> 
                </div>
                <section className="px-8 xl:px-12 py-0 sm:w-1/2 flex flex-col mt-14 sm:mt-0">
                    <div className='flex flex-col justify-center mb-12 sm:mb-8'>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-1 text-center">Where I&apos;ve Been</h2> 
                        <CompanyIconsRow />
                    </div>
                    <div className='flex flex-col justify-center mb-12 sm:mb-8'>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-1 text-center">What I&apos;ve Done</h2>
                        <p className='text-center lg:text-lg'>
                          Developed apps for the web (NextJS, Ruby on Rails, PHP) and Android (Java/Kotlin), led QA devs at a SaaS startup, and managed the notifications backend at an ecommerce site. 
                        </p>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-1 md:mb-2 text-center">What I&apos;m Doing</h2>
                        <p className='text-center lg:text-lg'>Automating safety compliance checks for AWS resources in Python with <a className="text-orange-500 hover:underline" href="https://cloudcustodian.io">Cloud Custodian</a>.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Intro;