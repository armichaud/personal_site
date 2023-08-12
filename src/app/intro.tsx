'use client'

import React from 'react';

const Intro: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-semibold mb-4">Welcome to my website!</h1>
        <img src="https://imagedelivery.net/Xh-8qVol1Pftdals16ieKg/ccbbd565-53b4-4780-7fee-b4bcef64c100/public" alt="profile_pic" />
        <p className="text-gray-600 text-center">
            This is a website I built to showcase my coding projects and résumé.
        </p>
        </div>
    );
};

export default Intro;