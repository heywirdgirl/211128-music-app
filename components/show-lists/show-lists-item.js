import Link from 'next/link'
function ShowListsItem(props) {
  const { author,name,listid } = props;
  const url=`/shazam/${listid}`;
  return (
  	<Link href={url}>
  	<a>
    <ul className="shadow-lg w-full p-2 lg:p-4 rounded-lg transform hover:scale-105">
      <li>{name}</li>
      <li>{author}</li>
      <li>{listid}</li>
    </ul>
    </a>
        </Link>
  );
}

export default ShowListsItem;