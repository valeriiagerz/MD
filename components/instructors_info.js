import s from "./instructors_info.module.css";
import { InstructorsData } from "@/instructors_data";

export default function InstructorsInfo(p) {
  return (
    <>
    <div className={`${s["instructor"]} ${"center"}`}>
      <div className={s["left"]}>
        <div className={s["photo"]}>
          <img
            src={"/instructors/" + p.photo}
            alt="photo"
            className={s["img"]}
          />
        </div>
      </div>
      <div className={s["right"]}>
        <h1 className={s["name"]}>
          {p.name} {p.lastName}
        </h1>
        <div className={s["info"]}>
          <div className={s["info__left"]}>
            <div className={s["block"]}>
              <h4>Достижения</h4>
              <ul className={s["ul"]}>
                <li className={s["li"]}>{InstructorsData.info}</li>
              </ul>
              {/* <ul className={s["ul"]}>
                <li className={s["li"]}>Создатель платформы MD.school</li>
              </ul>
              <ul className={s["ul"]}>
                <li className={s["li"]}>
                  Окончил программу Harvard Medical School по образованию в
                  медицине
                </li>
              </ul>
              <ul className={s["ul"]}>
                <li className={s["li"]}>
                  Прошел программы по биостатистике и клиническим исследованиям
                  от Йельского университета и университета Джонса Хопкинса
                </li>
              </ul>
              <ul className={s["ul"]}>
                <li className={s["li"]}>
                  Обладатель 14 грантов на международные стажировки
                </li>
              </ul>
              <ul className={s["ul"]}>
                <li className={s["li"]}>
                  Автор 12 статей, индексируемых в базах Scopus и Web of Science
                </li>
              </ul> */}
            </div>
          </div>
          <div className={s["info__right"]}>
            <div className={s["block"]}>
              <h4>Ведёт курсы:</h4>
              <ul className={s["ul"]}>
                <li className={s["li"]}>
                  <a href="#">Школа по Медицинской Статистике</a>
                </li>
              </ul>
              <ul className={s["ul"]}>
                <li className={s["li"]}>
                  <a href="#">Сам себе статистик</a>
                </li>
              </ul>
              <ul className={s["ul"]}>
                <li className={s["li"]}>
                  <a href="#">MDclub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

