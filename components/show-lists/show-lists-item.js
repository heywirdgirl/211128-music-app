
function ShowListsItem(props) {
  const { author,name,listid } = props;

  return (
    <ul className="shadow-lg w-full p-2 lg:p-4 rounded-lg">
      <li>{name}</li>
      <li>{author}</li>
      <li>{listid}</li>
    </ul>
  );
}

export default ShowListsItem;