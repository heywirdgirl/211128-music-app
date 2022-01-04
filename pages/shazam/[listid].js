import { Fragment } from 'react';
import { getEventById,getAllData } from '../../helpers/api-util';
function EventDetailPage(props) {
  const event = props.selectedEvent;
  const {key,id,listid,name,author,list}=event;
  if (!event) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <Fragment>
       <p>{name}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const listid = context.params.listid;
  const list = await getEventById(listid);
  return {
    props: {
      selectedEvent: list
    },
    revalidate: 518400
  };
}
export async function getStaticPaths() {
  const lists = await getAllData();
  const paths = lists.map(list => ({ params: { listid: list.listid } }));
  return {
    paths: paths,
    fallback: 'blocking'
  };
}
export default EventDetailPage;
