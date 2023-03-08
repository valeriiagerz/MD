import PlatformBanner from "../../components/platform_banner";
import Instructors from "../../components/instructors";
import Head from "next/head";
import InstructorsFull from "../../components/instructors_full";
import Header from "../../components/header";

const App = () => {
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
      </div>
      <div>
        <Instructors />
      </div>

      <div>
        <InstructorsFull />
        {/* <InstructorsFull
          photo="/KharchenkoMax.jpg"
          name="Евгения"
          lastName="Харченко"
        /> */}
      </div>
    </>
  );
};

export default App;
