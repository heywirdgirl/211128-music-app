import { Fragment } from 'react';
import {useRouter} from 'next/router'
import { getEventById } from '../../helpers/api-util';
import { getAllData } from '../../helpers/api-util';
function EventDetailPage(props) {
  const r=useRouter();
  const listId=r.query.listid;
  const event = getEventById(listId);
  //const event=getAllData();
  console.log(event);
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
       <p>is {event.name}</p>
    </Fragment>
  );
}

export default EventDetailPage;
