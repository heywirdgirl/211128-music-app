import { getAllEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  console.log(props.events)
  return (
    <div>
      test
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getAllEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage;
