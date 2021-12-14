import EventItem from './event-item';

function EventList(props) {
  const { items } = props;
  return (
    <div>
      {items.map((i) => (
        <EventItem
         key={i.key}
         title={i.title} 
         subtitle={i.subtitle} 
         image={i.image} 
         url={i.url} 
        />
      ))}
    </div>
  );
}

export default EventList;
