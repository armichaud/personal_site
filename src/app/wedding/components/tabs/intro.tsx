import * as React from 'react';

const Intro = (): JSX.Element => {
  return (
    <div>
      <div>
        This was the website I built for our wedding. It used to be available at a dedicated URL. I&apos;ve recreated most of it here so that I can continue to showcase it as part of my developer portfolio. 
      </div>
      <div>
        The site was built as an SPA with React, Typescript, SASS styling, and Material UI components. It was deployed to AWS App Runner and used an AWS Lambda to query and update guest RSVP and meal information in an RDS database.
      </div>
      <div>
        The full codebase is available on my old github, here: {' '}
        <a href="https://github.com/alexandermichaud-drizly/wedding">Front-End</a>
        <br />
        Here&apos;s the code for the lambda function: {' '}
        <a href="https://github.com/alexandermichaud-drizly/wedding-rsvp-serverless">Lambda Code</a>
      </div>
    </div>
  );
};

export default Intro;
