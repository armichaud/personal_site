import Projects from "./projects";
import Resume from "./resume";
import Intro from "./intro";
import TabbedContent from "./tabbed_content";
import Education from "./education";
import Interests from "./interests";

const tabs = [
  {
    id: 'me',
    label: 'Me',
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
    content: <Education />
  },
  {
    id: 'beyond_engineering',
    label: 'Beyond Engineering',
    content: <Interests />
  },
]

const Home = (): JSX.Element => <TabbedContent tabs={tabs} />;

export default Home;
