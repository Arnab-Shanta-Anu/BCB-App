import Footer from "../components/Footer";
import Layout from "../components/Layout";
import "../styles/globals.css";
import Navbar from "./../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
