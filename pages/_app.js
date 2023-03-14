import Head from "next/head";
import "./globals.scss"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="noopener noreferrer icon"
          type="image/ico"
          href="/logos/logo.ico"
        />
        <link
          rel="noopener noreferrer preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="noopener noreferrer preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="noopener noreferrer stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
