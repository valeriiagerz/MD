import s from "./header.module.scss";
import Link from "next/link";
import Button from "./button";
import SocialButton from "./social_button";

export default function Header() {
  return (
    <>
      <div className={`${s["container"]}`}>
        <div className={s["left"]}>
          <Link href="/">
            <div className={`${s["logo-wrapper"]}`}>
              <img
                className={`${s["logo-img"]} ${s["full"]}`}
                src="/logos/logo.svg"
                alt="next"
              />
              <h5> MD.school </h5>
            </div>
          </Link>
          <div className={`${s["border"]} ${s["full"]}`}></div>
          <div className={`${s["links"]} ${s["full"]}`}>
            <Link href="/">
              <h6 className={`${s["link-wrapper"]} ${"small"}`}>Главная</h6>
            </Link>
            <Link href="/teachers">
              <h6 className={`${s["link-wrapper"]} ${"small"}`}>
                Преподаватели
              </h6>
            </Link>
          </div>
        </div>

        <div className={s["right"]}>
          <div className={`${s["social-logos"]}`}>
            <SocialButton
              href={"https://t.me/medicina_discendi"}
              logo="/logos/telegram_black.svg"
            />
            <SocialButton
              href={"https://t.me/MDSchool_bot"}
              logo="/logos/VK.svg"
            />
          </div>
        </div>
        <div className={`${s["contact-button-wrapper"]} ${s["full"]} }`}>
          <Button
            text="Поддержка"
            inner_logo="call.svg"
            button_color="green"
            text_color="white"
          />
        </div>
        <div className={s["login-button"]}>
          <Button text="Войти" />
        </div>
      </div>
    </>
  );
}
