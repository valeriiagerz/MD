import PlatformBanner from "../components/platform_banner/platform_banner";
import Instructors from "../components/instructors/instructors";
import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>MD School</title>
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
      <Header />
      <div>
        <PlatformBanner />
      </div> 
        <Instructors />
      <div className={["border"]}></div>
      <Footer />
    </>
  );
};
