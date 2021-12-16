import {AllData} from '../dummy-data';

export async function getAllData(){
  const Alldata=await AllData();
  return Alldata;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const Alldata=await getAllData();
  return Alldata[0].find((event) => event.listid === id)||Alldata[1].find((event) => event.listid === id);
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




