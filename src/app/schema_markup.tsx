"use client"

import { useEffect } from 'react';

const schema = [
    {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Alexander Rodion Michaud",
        "jobTitle": "Full Stack Software Engineer",
        "url": "https://alexandermichaud.tech",
        "sameAs": [
            "https://github.com/armichaud",
            "https://www.linkedin.com/in/alexander-michaud-2a120388"
        ]
    },
    {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "name": "Chicken Esolang Interpreter",
        "description": "An interpreter for the Chicken esoteric programming language.",
        "url": "https://github.com/armichaud/chicken_esolang",
        "applicationCategory": "Programming",
        "datePublished": "2023-09-01",
        "programmingLanguage": "Rust",
        "operatingSystem": "Cross-platform"
    },
    {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "name": "Wedding Website",
        "description": "The website I built for our wedding.",
        "url": "https://alexandermichaud.tech/wedding",
        "applicationCategory": "Web Development",
        "datePublished": "2023-09-01",
        "programmingLanguage": "React, Typescript, SASS",
        "operatingSystem": "Cross-platform"
    },
    {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "name": "Wedding Guest RSVP API",
        "description": "A RESTful API I built to handle guest RSVPs and meal selections.",
        "url": "https://github.com/alexandermichaud-drizly/wedding-rsvp-serverless",
        "applicationCategory": "Web Development",
        "datePublished": "2023-09-01",
        "programmingLanguage": "Serverless, Express, Sequelize"
    }
];

export const SchemaMarkup = (): JSX.Element => {
    useEffect(() => {
        schema.map((item) => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(item);
            document.head.appendChild(script);
        });
    }, []);

    return <></>;
};
