import {AllData} from '../dummy-data';

export async function getAllData(){
  const Alldata=await AllData();
  let map_data=[];
  Alldata.map((i)=>{
    map_data=map_data.concat(i);
  });
  return map_data;
}
export async function getEventById(id) {
  const Alldata=await getAllData();
  const list=Alldata.find(event => event.listid === id);
  console.log("hello")
  return list||null;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
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




