import Projects from "./projects";
import Resume from "./resume";
import Intro from "./intro";
import TabbedContent from "./tabbed_content";

const tabs = [
  {
    id: 'intro',
    label: 'Intro',
    content: <Intro />
  },
  {
    id: 'projects',
    label: 'Projects',
    content: <Projects />
  },
  {
    id: 'resume',
    label: 'Résumé',
    content: <Resume />,
  },
  {
    id: 'education',
    label: 'Education',
    content: <></>
  },
  {
    id: 'beyond_engineering',
    label: 'Beyond Engineering',
    content: <></>
  },
  {
    id: 'hobbies_and_interests',
    label: 'Hobbies and Interests',
    content: <></>
  },
]

const Home = (): JSX.Element => {
  return (
    <TabbedContent tabs={tabs} />
  )
};

export default Home;
