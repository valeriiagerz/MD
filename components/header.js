import s from "./header.module.css";
import Link from "next/link";
import Button from "./button";

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
        </div>

        <div className={`${s["border"]} ${s["full"]}`}></div>
        <div className={`${s["links"]} ${s["full"]} `}>
          <Link href="/">
            <h6 className={`${s["link-wrapper"]} ${"small"}`}>Главная</h6>
          </Link>
          <Link href="#">
            <h6 className={`${s["link-wrapper"]} ${"small"}`}>
              Все&nbsp;курсы
            </h6>
          </Link>
          <Link href="#">
            <h6 className={`${s["link-wrapper"]} ${"small"}`}>MD&nbsp;club</h6>
          </Link>
        </div>
        <div
          className={`${s["contact-button-wrapper"]} ${s["full"]} }`}
        >
          <Button text="Поддержка" arrow="call.svg" />
        </div>
        <div className={s["login-button"]}>
          <Button text="Войти" />
        </div>
      </div>
    </>
  );
};

