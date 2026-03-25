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
