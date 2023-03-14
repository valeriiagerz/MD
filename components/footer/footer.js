import s from "./footer.module.scss";
import SocialButton from "../social_button/social_button";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div
        className={`${s["footer-wrapper"]} ${
          s["platform-block-white"]
        } ${"center"}`}
      >
        <div className={s["footer-mid"]}>
          <div className={s["footer-mid-right"]}>
            <div className={s["info-group"]}>
              <div className={s["info-group-block"]}>
                <p className={s["info-group-header"]}>Связаться с нами</p>
                <div className={s["info-group-socials"]}>
                  <SocialButton
                    href={"https://t.me/MDSchool_bot"}
                    logo="/logos/telegram_black.svg"
                  />
                  <SocialButton
                    href={"https://wa.me/79058770773"}
                    logo="/logos/whatsapp.svg"
                    target="_blank"
                  />
                </div>
                <Link href={"mailto:" + "info@md.school"}>
                  <p className={s["info-group-text"]}>info@md.school</p>
                </Link>
              </div>
            </div>
            <div className={s["info-group"]}>
              <div className={s["info-group-block"]}>
                <p className={s["info-group-header"]}>Страницы</p>
                <Link href={"/"}>
                  <p className={s["info-group-text"]}>Главная</p>
                </Link>
                <Link href={""}>
                  <p className={s["info-group-text"]}>Все курсы</p>
                </Link>
                <Link href={"/teachers"}>
                  <p className={s["info-group-text"]}>Преподаватели</p>
                </Link>
                <Link href={""}>
                  <p className={s["info-group-text"]}>MD&nbsp;Club</p>
                </Link>
              </div>
            </div>
            <div className={s["info-group"]}>
              <div className={s["info-group-block"]}>
                <p className={s["info-group-header"]}>Мы в соцсетях</p>
                <div className={s["info-group-socials"]}>
                  <SocialButton
                    href={"https://t.me/medicina_discendi"}
                    logo="/logos/telegram_black.svg"
                  />
                  <SocialButton
                    href={"https://vk.com/med.discendi"}
                    logo="/logos/VK.svg"
                  />
                  <SocialButton
                    href={
                      "https://www.youtube.com/channel/UCFKtJ2MS1IPYn0XLtyjHjQA"
                    }
                    logo="/logos/video.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s["footer-bottom"]}>
          <div className={`${s["payment-systems"]} ${["small"]}`}>
            ООО “Медикал Скул”, ИНН 7814802888
            <br />
            Лицензия на образовательную деятельность №Л035-01271-78/00620309 от
            06.10.2022
          </div>
          <div className={s["confidentiality-politics"]}>
            <p className="small">
              <Link href={""}>Сведения об образовательной организации</Link>
            </p>
            <p className="small">
              <Link href={""}>Политика конфиденциальности</Link>
            </p>
            <p className="small">
              <Link href={""}>Публичная оферта</Link>
            </p>
            <p className="small">
              <Link href={""}>Пользовательское соглашение</Link>
            </p>
            <p className="small">Все права защищены (с) MD.school 2022-2023</p>
          </div>
        </div>
      </div>
    </>
  );
}
