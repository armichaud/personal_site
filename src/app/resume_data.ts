import { JobExperienceProps } from "./resume";

const RESUME_DATA: JobExperienceProps[] = [
    {
      jobTitle: "Senior Software Engineer",
      company: "Capital One",
      startDate: "April 2024",
      endDate: "Present",
      bullets: [
        "Coding Cloud Custodian controls in Python, to ensure Capital One cloud resources remain in compliance with policies established by the cybersecurity division.",
        "Contributing open source enhancements to Cloud Custodian to enable controls for previously unsupported cloud resource types.",
        "Wrote automated tests to run policies against ephemeral cloud resources provisioned using Terraform.",
        "Certified as an AWS Solutions Architect within 4 weeks of joining the company, in order to establish deep expertise with Capital One's primary cloud service provider.",
        "Worked on the winning project in a 2-day Cloud Safety Hackathon on a team that developed a proof-of-concept for empowering developers to run Cloud Custodian compliance validation on-demand.",
      ]
    },
    {
      jobTitle: "Android Engineer",
      company: "Drizly",
      startDate: "Sep 2023",
      endDate: "March 2024",
      bullets: [
        "Learned Kotlin/Java on the job to become 1 of 3 Drizly Android developers, working to achieve feature parity with browser and iOS versions of the Drizly app experience.",
        "Architected and implemented pages entirely configurable via content management services, empowering marketers to build and instantly deploy themed/seasonal product and brand collections to Drizly’s Android app.",
        "Built shareable “registry” pages to promote gift purchases and spotlight sponsored products.",
        "Enabled in-app banners to serve promotions fetched from Drizly API."
      ] 
    },
    {
      jobTitle: "Full Stack Software Engineer",
      company: "Drizly",
      startDate: "Mar 2021",
      endDate: "Sep 2023",
      bullets: [
        "Coded in TypeScript for Drizly's consumer-facing NextJS web application. Built and maintained Ruby on Rails API endpoints for back-end data management.",
        "Led upgrade of Drizly's desktop browser application from Rails 5.2 to Rails 7 to address end-of-life dependencies, as part of a company-wide initiative to bring security standards in compliance with mandates by the FTC.",
        "Built landing page for the announcement of Uber's acquisition of Drizly, viewed by millions of Uber notifications subscribers.",
        "Scoped and engineered sensitive changes to Drizly’s payments API required to fulfill a class action lawsuit settlement, applying credits to 260k+ beneficiaries’ carts at checkout.",
        "Redesigned drizly.com/sign_up and drizly.com/login as SPAs, integrating social login options to increase account creation.",
        "Built Drizly’s gift recommendation quiz to query our catalog database based on users’ gifting preferences.",
        "Implemented Google Analytics clickstream tracking, Iterable event tracking, and A/B test bucketing to assist marketing and BI in driving revenue growth through data insights.",
        "Refactored business logic from Ruby into Typescript as part of an ongoing initiative to move Rails back-end into server-side NextJS."
      ],
    },
    {
      jobTitle: "Director of Delivery Engineering",
      company: "ProdPerfect",
      startDate: "June 2020",
      endDate: "Feb 2021",
      bullets: [
        "Delivered 100k in ARR of newly invoiced customers per month. Managed a Delivery Scripting Manager, who oversaw a team of 18 QA leads and developers. Reported directly to the CEO.",
        "Reduced COGS by 27% through departmental restructuring. Shifted primary responsibility for test development to low-cost offshore contractors.",
        "Spun off former delivery engineering team into a product engineering team, dedicated to engineering tools for accelerated test delivery, with part-time responsibility for resolving high-complexity test scripting blockers."
      ],
    },
    {
      jobTitle: "Delivery Engineering Manager",
      company: "ProdPerfect",
      startDate: "Feb 2020",
      endDate: "June 2020",
      bullets: [
        "Promoted to manage a team of 4 delivery engineers and 20 QA developers servicing 60+ customers with data-informed, browser-level E2E regression testing."
      ],
    },
    {
      jobTitle: "Delivery Engineer",
      company: "ProdPerfect",
      startDate: "Feb 2019",
      endDate: "Feb 2020",
      bullets: [
        "Led a team of 9 QA engineers to deliver and maintain automated test suites for 19 customers.",
        "Helped customers integrate ProdPerfect's click-stream data analysis engine into their web applications, and communicated with customers throughout test suite development stages and ongoing engagements."
      ],
    },
    {
      jobTitle: "Back End Software Engineer",
      company: "Wayfair",
      startDate: "May 2018",
      endDate: "Feb 2019",
      bullets: [
        "Managed sharded SQL Server database tables for high performance storage and retrieval of 1.7 billion rows of business-critical notifications subscription data.",
        "Reduced Wayfair's email marketing subscription management codebase by 85% through the elimination of redundant and obfuscated code.",
        "Redesigned subscriptions data model to accommodate features requested by business stakeholders, such as topic-level granularity and “soft opt-in” state.",
        "Mentored and reviewed code (PHP, Javascript, and SQL) for 10 entry-level developers."
      ],
    },
];
export default RESUME_DATA;
