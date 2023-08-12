import Resume from "./resume";
import TabbedContent from "./tabbed_content";

const tabs = [
  {
    id: 'resume',
    label: 'Resumé',
    content: <Resume />,
  }
]

const Home = (): JSX.Element => {
  return (
    <TabbedContent tabs={tabs} />
  )
};

export default Home;
