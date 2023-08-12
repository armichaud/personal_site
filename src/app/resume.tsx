import React from "react";
import RESUME_DATA from "./resume_data";

export interface JobExperienceProps {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

const JobExperience: React.FC<JobExperienceProps> = ({
  jobTitle,
  company,
  startDate,
  endDate,
  bullets,
}) => (
    <div className="p-4 border rounded-md shadow-md mb-4">
        <h2 className="text-xl font-semibold">{company} | {jobTitle}</h2>
        <p className="text-gray-600 dark-grey">
            {startDate} - {endDate}
        </p>
        <ul className="list-disc list-inside">
            {bullets.map((bullet, index) => (
                <li key={index}><p className="mt-2">{bullet}</p></li>
            ))}
        </ul>
    </div>
);


const Resume = (): JSX.Element => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">My Resume</h1>
      <div>
        {RESUME_DATA.map((experience, index) => (
          <JobExperience key={index} {...experience} />
        ))}
      </div>
    </div>
  );
}

export default Resume;
