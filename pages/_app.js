import Head from "next/head";
import "swiper/css/pagination";
import "../styles/globals.scss";
import "swiper/css";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Buy and Own awesome NFTs.' />
        <title>Akara</title>
      </Head>

      <Component {...pageProps} />
    </>,
  );
}

export default MyApp;
