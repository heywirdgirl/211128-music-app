
function ShowListsItem(props) {
  const { number,listid,name } = props;

  return (
    <ul className="shadow-lg w-full p-2 lg:p-4 rounded-lg">
      <li>index {number}</li>
      <li>{name}</li>
      <li></li>
    </ul>
  );
}

export default ShowListsItem;