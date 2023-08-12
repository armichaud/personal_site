import Projects from "./projects";
import Resume from "./resume";
import TabbedContent from "./tabbed_content";

const tabs = [
  {
    id: 'home',
    label: 'Home',
    content: <></>
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
    id: 'other',
    label: 'Beyond Engineering',
    content: <></>
  },
]

const Home = (): JSX.Element => {
  return (
    <TabbedContent tabs={tabs} />
  )
};

export default Home;
