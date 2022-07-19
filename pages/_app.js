import Layout from "@layout/Layout";
import "styles/globals.css";
import "react-phone-number-input/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
