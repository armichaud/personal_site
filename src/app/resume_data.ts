import { JobExperienceProps } from "./resume";

const RESUME_DATA: JobExperienceProps[] = [
    {
      jobTitle: "Full Stack Software Engineer",
      company: "Drizly",
      startDate: "Mar 2021",
      endDate: "Present",
      bullets: [
        "Coding in TypeScript for Drizly's consumer-facing React/Redux web application.",
        "Building and maintaining Ruby on Rails API endpoints for back-end data management.",
        "Built landing page for the announcement of Uber's acquisition of Drizly, viewed by millions of Uber notifications subscribers (drizly.com/uber).",
        "Scoped and engineered sensitive changes to our API required to fulfill a class action lawsuit settlement, automatically applying credits to 260k+ beneficiaries’ carts at checkout.",
        "Redesigned drizly.com/sign_up and drizly.com/login as SPAs, integrating social login options to increase account creation.",
        "Designed and implemented state management behind Drizly’s gift recommendation quiz (drizly.com/gift_quiz), in order to query our catalog database given gifting preferences.",
        "Implemented Google Analytics tracking and A/B test bucketing to assess conversion driven by new site features.",
        "Refactoring business logic from Ruby into Typescript as part of an ongoing initiative to move Rails back-end into NextJS."
      ],
    },
    {
      jobTitle: "Director of Delivery Engineering",
      company: "ProdPerfect",
      startDate: "June 2020",
      endDate: "Feb 2021",
      bullets: [
        "Delivered 100k in ARR of newly invoiced customers per month.",
        "Directly managed a Delivery Scripting Manager, who oversaw a team of 18 (6 QA leads and 12 QA test developers).",
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
        "Increased test code output by implementing Agile methodologies and breaking down product delivery process into discrete stations for ease of understanding and ownership transferral.",
        "Helped customers integrate ProdPerfect's click-stream data analysis engine into their web applications, and communicated with customers throughout test suite development stages and ongoing engagements."
      ],
    },
    {
      jobTitle: "Data Engineer",
      company: "Wayfair",
      startDate: "May 2018",
      endDate: "Feb 2019",
      bullets: [
        "Managed sharded SQL Server database tables for high performance storage and retrieval of 1.7 billion rows of business-critical notifications subscription data.",
        "Streamlined Wayfair's email marketing subscription management system by consolidating 5000+ lines of PHP code into a single, 750-line class.",
        "Redesigned subscriptions data model to accommodate features requested by business stakeholders, such as topic-level granularity and “soft opt-in” state.",
        "Mentored and reviewed code (PHP, Javascript, and SQL) for 10 entry-level developers."
      ],
    },
];
export default RESUME_DATA;