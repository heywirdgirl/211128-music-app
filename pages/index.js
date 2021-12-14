import { getData } from '../helpers/api-util';
import ShowLists from '../components/show-lists/show-lists';

function HomePage(props) {
  const data=props.events;
  const c=data[0];
  const g=data[1];
  return (
    <>
        <ShowLists lists={g} />
        <ShowLists lists={c} />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getData();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage;


