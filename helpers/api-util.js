import {Data} from '../dummy-data';
const data=Data();
export async function getData(){
	return data;
}


/*
export async function getAllEvents() {
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

  for (const k in cdata) {
    let image='';
    if (cdata[k].images.coverarthq) {
      image=cdata[k].images.coverarthq;
    };
    const key=parseInt(k)+1;
    events.push({
      key:key,
      id:cdata[k].key,
      subtitle:cdata[k].subtitle,
      title:cdata[k].title,
      url:cdata[k].url,
      image:image
    });
  }

  return events;
}
*/

/*
export async function getAllEvents() {
  const url='https://shazam.p.rapidapi.com/charts/list';
  var options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
      'x-rapidapi-key': '7abbb29ad4mshc86069389916bbep133ad3jsn2c0889cdaa53'
    }
  };
  const response = await fetch(url,options);
  const data = await response.json();
  const cdata1=data.countries;
  const cdata2=data.global.genres;
  const events1 =listdata(cdata1);
  const events2 =listdata(cdata2);
  const events=[];
  events.push(events1);
  events.push(events2);
  console.log(events);

  function listdata(cdata) {
    let events = [];
    for (const k in cdata) {
      const key=parseInt(k)+1;
      events.push({
        key:key,
        id:cdata[k].id,
        listid:cdata[k].listid,
        name:cdata[k].name
      });
    }
    return events;
  }
  return events;
}
*/

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




