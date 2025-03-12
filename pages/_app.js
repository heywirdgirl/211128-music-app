import Layout from '../components/layout/layout';
import 'tailwindcss/tailwind.css'
//import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      			<Component {...pageProps} />
      		</div>
    </Layout>
  );
}

export default MyApp;
