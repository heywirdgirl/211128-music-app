export async function getAllEvents() {
  //const response = await fetch('https://nextjs-course-c81cc-default-rtdb.firebaseio.com/events.json');
  const url='https://shazam.p.rapidapi.com/charts/track';
  var options = {
    method: 'GET',
    params: {locale: 'en-US', pageSize: '20', startFrom: '0'},
    headers: {
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
      'x-rapidapi-key': '7abbb29ad4mshc86069389916bbep133ad3jsn2c0889cdaa53'
    }
  };
  const response = await fetch(url,options);
  const data = await response.json();
  const cdata=data.tracks;
  const events = [];

  for (const key in cdata) {
    let image='';
    if (cdata[key].images.coverarthq) {
      image=cdata[key].images.coverarthq;
    };
    events.push({
      id:cdata[key].key,
      subtitle:cdata[key].subtitle,
      title:cdata[key].title,
      url:cdata[key].url,
      image:image
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
