import Button from "./button";
import s from "./instructors_mini_card.module.scss";

export default function InstructorsMiniCard(p) {
  return (
    <div className={s["card"]}>
      <div className={s["top"]}>
        <div className={s["instructor-photo-wrapper"]}>
          <img
            className={s["instructor-photo"]}
            src="./instructors/KireevaMin.jpg"
          />
          <div
            className={`${s["socials-name"]} ${s["socials-name-mobile"]}`}
          ></div>
        </div>
        <div className={s["instructor-info"]}>
          <div className={s["instructor-text-wrapper"]}>
            <div className={s["instructor-text"]}>
              <div className={s["instructor-name"]}>
                <h5 className={s["h5"]}>Галина Киреева</h5>
                <div
                  className={`${s["socials-name"]} ${s["socials-name-full"]}`}
                ></div>
              </div>
              <ul className={`${s["ul"]} ${"list"}`}>
                <li>Образование: высшее фармацевтическое – СПХФА (СПб)</li>
                <li>Кандидат биологических наук (специальность «онкология»)</li>
                <li>Последипломное образование – Harvard Medical School</li>
                <li>
                  Грантополучатель российских (РНФ, РФФИ) и международных
                  научных фондов
                </li>
                <li>
                  Более 100 научных публикаций, из которых 50 – в журналах,
                  индексируемых в базах Scopus, WoS
                </li>
                <li>Индекс Хирша по РИНЦ – 8, Scopus – 4, WoS – 3</li>
                <li>
                  Консультирование и корректировки по процессу написания
                  диссертации – более 30 коллег (кандидатских и докторских)
                </li>
                <li>
                  Опыт работы: научный сотрудник, ученый секретарь, проректор
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={s["learn-more-wrapper"]}>
        <div className={s["learn-more"]}>
          <Button
            text="Читать&nbsp;больше"
            button_color="peach"
            text_color="black"
            border_color="black"
            hover="black"
          />
        </div>
      </div>
    </div>
  );
}
