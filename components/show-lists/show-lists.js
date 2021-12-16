import ShowListsItem from './show-lists-item';

function ShowList(props) {
  const { lists } = props;

  return (
    <ul className="p-2 md:p-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-1 md:gap-4">
      {lists.map((list) => (
        <ShowListsItem
          key={list.id}
          listid={list.listid}
      	  name= {list.name}
          author={list.author}
        />
      ))}
    </ul>
   
  );
}

export default ShowList;










