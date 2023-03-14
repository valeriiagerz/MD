import Button from "@/components/button/button";
import s from "./instructors_mini_card.module.scss";

export default function InstructorsMiniCard({p}) {
  return (
    <div className={s["card"]}>
      <div className={s["top"]}>
        <div className={s["instructor-photo-wrapper"]}>
          <img
            className={s["instructor-photo"]}
            src={p.photoMin}
          />
        </div>
        <div className={s["instructor-info"]}>
          <div className={s["instructor-text-wrapper"]}>
            <div className={s["instructor-text"]}>
              <div className={s["instructor-name"]}>
                <h5 className={s["h5"]}>{p.name} {p.lastName}</h5>
                <div
                  className={`${s["socials-name"]} ${s["socials-name-full"]}`}
                ></div>
              </div>
              {p.info && p.info.length !== 0 && (
              <ul className={`${s["ul"]} ${"list"}`}>
              {p.info.map((infoEl, i) => (
                      <li key={i}>{infoEl}</li>
                    ))}
              </ul>
                    )}
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
