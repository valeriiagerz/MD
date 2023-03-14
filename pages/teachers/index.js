import { InstructorsData } from "@/instructors_data";
import s from "./index.module.scss";
import InstructorsFull from "@/components/instructors_full/instructors_full";
import Head from "next/head";
import Header from "../../components/header/header";
import CategoryTree from "../../components/category_tree/category_tree";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
import ContactSection from "../../components/contacts_section/contacts_section";

export default function Teachers(p) {
  return (
    <>
      <Head>
      <title>Преподаватели</title>
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
        <CategoryTree />
      </div>
      <div>
        <InstructorsFull />
      </div>{" "}
      <br />
      <div className={s["end"]}>
        <img src="/idea_yellow.svg" alt="idea" />
        <h3>Пока всё!</h3>
        <p className="small">
          Если вы хотите стать нашим лектором, присылайте нам своё резюме :)
        </p>
        <div className={s["end-full"]}>
          <a href="#">
            <Button
              text="Написать в Telegram"
              text_color="blue"
              inner_logo="telegram_blue.svg"
              button_color="transparent"
              border_color="blue"
            />
          </a>
          <a href="#">
            <Button
              text="Написать в What’s app"
              text_color="green"
              inner_logo="whatsapp_green.svg"
              button_color="transparent"
              border_color="green"
            />
          </a>
        </div>
      </div>
      <ContactSection />
      <div className={["border"]}></div>
      <Footer />
    </>
  );
}
