import {Data} from '../dummy-data';
//import { getAlldata } from '../../helpers/api-util';
import ShowLists from '../components/show-lists/show-lists';

function HomePage(props) {
  const {data}=props;
  const c=data[0];
  const g=data[1];
  return (
    <>
        <ShowLists lists={g} />
        <ShowLists lists={c} />
    </>
  );
}
export async function getStaticProps() {
  const data= await Data();
  
  return {
    props: {
      data:data
    },
    revalidate: 518400
  }
}

export default HomePage;


