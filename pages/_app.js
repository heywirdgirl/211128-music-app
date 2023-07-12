import Layout from '../components/layout/layout';
import 'tailwindcss/tailwind.css'
//import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      		<div className="hidden sm:block flex-none w-64 h-96 rounded-lg border-2 border-indigo-500">ads test</div>
      		<div className="flex-auto w-max">	
      			<Component {...pageProps} />
      		</div>
    </Layout>
  );
}

export default MyApp;
