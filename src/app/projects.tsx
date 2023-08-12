'use client'

import React from 'react';

interface Project {
    title: string;
    githubLink: string;
    description: string;
    techStack: string;
    notes?: string;
  }

const PROJECTS: Project[] = [
    {
        title: 'Wedding Website',
        githubLink: '/wedding',
        description: 'The website I built for our wedding',
        techStack: 'React, Typescript, SASS, Material UI, AWS App Runner, AWS Lambda, AWS RDS',
    }
];

const ProjectList: React.FC = () => {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Coding Projects</h2>
        <ul className="space-y-4">
          {PROJECTS.map((project, index) => (
            <li key={index} className="border p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <p className="text-gray-800">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
};
  
export default ProjectList;

  