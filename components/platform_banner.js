import s from "./platform_banner.module.css";

export default function PlatformBanner() {
  return (
    <div className={`${s["container"]} ${"center"}`}>
      <div className={s["left"]}>
        <div className={s["left__text-wrapper"]}>
          <h2>
            Онлайн
            <br />
            <mark className={s["mark-color"]}>университет</mark>
            <br />
            медицины
          </h2> 
          <p className={s["p"]}>
            Наша главная миссия - это качественное биомедицинское образование
            международного уровня, которое доступно каждому. По мнению более
            5000 наших учеников - мы делаем больше, чем образование! <br />
            <i>
              С уважением, команда основателей платформы: Евгения Харченко,
              Владислав Осетник, Галина Киреева
            </i>
          </p>
        </div>
      </div>
      <div className={s["right"]}>
        <img className={s["banner"]} src="university.svg" alt="next" />
      </div>
    </div>
  );
}
