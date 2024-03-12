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
        "@type": "EducationalOrganization",
        "name": "Startup Institute",
        "location": "Boston, MA",
        "url": "https://www.startupinstitute.com"
    },
    {
        "@context": "http://schema.org",
        "@type": "EducationEvent",
        "name": "Web Development Fellowship",
        "description": "Trained in professional full-stack development, primarily building web apps using Ruby on Rails.",
        "startDate": "2018-01-01",
        "endDate": "2018-04-30",
        "location": {
            "@type": "Place",
            "name": "Startup Institute"
        }
    },
    {
        "@context": "http://schema.org",
        "@type": "EducationalOrganization",
        "name": "Yale University",
        "location": "New Haven, CT",
        "url": "https://www.yale.edu"
    },
    {
        "@context": "http://schema.org",
        "@type": "EducationEvent",
        "name": "B.A. in English",
        "description": "Primary academic interests included Shakespeare and Film Theory.",
        "startDate": "2012-08-01",
        "endDate": "2017-05-31",
        "location": {
            "@type": "Place",
            "name": "Yale University"
        }
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
