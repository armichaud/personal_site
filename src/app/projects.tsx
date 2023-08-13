'use client'

import React from 'react';

interface Project {
    title: string;
    githubLink: string;
    description: string;
    techStack: string;
    link?: string;
}

const PROJECTS: Project[] = [
    {
        title: 'Wedding Website',
        githubLink: 'https://github.com/alexandermichaud-drizly/wedding',
        description: 'The website I built for our wedding',
        techStack: 'React, Typescript, SASS, Material UI, AWS App Runner',
        link: '/wedding'
    },
    {
        title: 'Wedding Guest RSVP API',
        githubLink: 'https://github.com/alexandermichaud-drizly/wedding-rsvp-serverless',
        techStack: 'Serverless, Express, Sequelize, AWS Lambda, AWS RDS',
        description: 'A RESTful API I built to handle guest RSVPs and meal selections',
    },
];

const ProjectList: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <ul className="space-y-4">
                {PROJECTS.map((project, index) => (
                    <li key={index} className="border p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2 dark:text-white">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{project.description}</p>
                        <p className="text-gray-800">
                            <strong>Tech Stack:</strong> {project.techStack}
                        </p>
                        <div>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-500 hover:underline"
                            >
                                View the code on Github 
                            </a>
                            <br />
                            {project.link && (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-orange-500 hover:underline"
                                >
                                    View the project
                                </a>
                            )}
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
};
  
export default ProjectList;

  