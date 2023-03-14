import s from "./instructors_info.module.scss";

export default function InstructorsInfo({ p }) {
  return (
    <>
      <div className={`${s["instructor"]} ${"center"}`}>
        <div className={s["left"]}>
          <div className={s["photo"]}>
            <img src={p.photoMax} alt="photo" className={s["img"]} />
          </div>
        </div>
        <div className={s["right"]}>
          <h1 className={s["name"]}>
            {p.name} {p.lastName}
          </h1>
          <div className={s["info"]}>
            <div className={s["info__left"]}>
              {p.info && p.info.length !== 0 && (
                <div className={s["block"]}>
                  <h4>Достижения</h4> <br />
                  <ul className={s["ul"]}>
                    {p.info.map((infoEl, i) => (
                      <li key={i}>{infoEl}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className={s["info__right"]}>
              <div className={s["block"]}>
                <h4>Ведёт курсы:</h4>
                <ul>
                  <li className={s["li"]}>
                    {p.courses.map((coursesEl, i) => (
                      <a key={i} href={"/courses/" + coursesEl.href}>
                        {coursesEl.name}
                      </a>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s["border"]}></div>
    </>
  );
}
