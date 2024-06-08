'use client'

import { ApolloProvider, useQuery } from '@apollo/client';
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const basicAuthLink = setContext((_, { headers }) => {
    const basicAuth = btoa(`armichaud:${process.env.GITHUB_AUTH_TOKEN}`);
  
    return {
      headers: {
        ...headers,
        Authorization: `Basic ${basicAuth}`,
      },
    };
});

client.setLink(basicAuthLink.concat(httpLink));

const GET_CONTRIBUTIONS = gql`
    query {
        user(login: "armichaud") {
            contributionsCollection {
                commitContributionsByRepository(maxRepositories: 100) {
                    repository {
                        nameWithOwner
                    }
                }
            }
        }
    }
`

interface Project {
    title: string;
    githubLink: string;
    description: string;
    techStack: string;
    link?: string;
    crate?: string;
}

const PROJECTS: Project[] = [
    {
        title: 'To Do List',
        githubLink: 'https://github.com/armichaud/android_to_do_list_app',
        techStack: 'Kotlin, Android, Jetpack Compose, Room Database, Splash API',
        description: 'A to-do list app for Android',
    },
    {
        title: 'Chicken Esolang Interpreter',
        githubLink: 'https://github.com/armichaud/chicken_esolang',
        techStack: 'Rust',
        description: 'An interpreter for the Chicken esoteric programming language.',
        crate: 'https://crates.io/crates/chicken_esolang'
    },
    {
        title: 'Wedding Website',
        githubLink: 'https://github.com/alexandermichaud-drizly/wedding',
        description: 'The website I built for our wedding.',
        techStack: 'React, Typescript, SASS, Material UI, AWS App Runner',
        link: '/wedding'
    },
    {
        title: 'Wedding Guest RSVP API',
        githubLink: 'https://github.com/alexandermichaud-drizly/wedding-rsvp-serverless',
        techStack: 'Serverless, Express, Sequelize, AWS Lambda, AWS RDS',
        description: 'A RESTful API I built to handle guest RSVPs and meal selections.',
    },
    {
        title: 'alexandermichaud.tech',
        githubLink: 'https://github.com/armichaud/personal_site',
        techStack: 'React, Typescript, Vercel (NextJS), ThreeJS, TailwindCSS, Apollo Client (GraphQL)',
        description: 'The site you\'re currently viewing.',
    },
];

interface ContributionData {
    user: {
        contributionsCollection: {
            commitContributionsByRepository: Array<{
                repository: {
                    nameWithOwner: string;
                }
            }>
        }
    }
}
const parseContributionData = (data: ContributionData): Array<string> => {
    const contributions = data?.user?.contributionsCollection?.commitContributionsByRepository;
    return contributions
        ?.filter((contribution) => !contribution?.repository?.nameWithOwner?.includes('armichaud'))
        ?.map((contribution) => contribution?.repository?.nameWithOwner);
};

const ProjectList: React.FC = () => {
    // TODO Use loading
    const { data } = useQuery(GET_CONTRIBUTIONS);

    const openSourceRepos = parseContributionData(data);

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <ul className="space-y-4">
                {PROJECTS.map((project, index) => (
                    <li key={index} className="border p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">
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
                            {project.crate && (
                                <a 
                                    href={project.crate} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-orange-500 hover:underline"
                                >
                                    See the crate on crates.io
                                </a>
                            )}
                        </div>

                    </li>
                ))}
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Open Source Contributions</h2>
            <p className='mb-4'>
                {openSourceRepos ? 
                    "I'm accumulating open source karma! Below you'll find links to the PRs that I've merged into public projects, organized by repository. The list is fetched programmatically using the GitHub GraphQL API." :
                    "This is where my list of merged open source PRs would appear, but it looks like there was an issue fetching them from GitHub."
                }
            </p>
            {openSourceRepos && openSourceRepos.map((repo, index) => (
                <a 
                    className="text-orange-500 hover:underline mb-2"
                    key={index} 
                    href={`https://github.com/${repo}/pulls?q=is%3Apr+is%3Aclosed+author%3Aarmichaud`}
                >
                    {repo}
                </a>
            ))}
        </div>
    );
};
  

const ProjectListWithApollo = () => (
    <ApolloProvider client={client}>
        <ProjectList />
    </ApolloProvider>
);

export default ProjectListWithApollo;
