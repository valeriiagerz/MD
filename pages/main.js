import "../src/app/globals.scss";
import PlatformBanner from "../components/platform_banner";
import Instructors from "../components/instructors";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Main() {
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
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="noopener noreferrer stylesheet"
        />
      </Head>
      <Header />
      <div>
        <PlatformBanner />
      </div> <br />
        <Instructors />
      <div className={["border"]}></div>
        <Footer />
    </>
  );
};
