import { InstructorsData } from "@/instructors_data";
import InstructorsInfo from "./instructors_info";
import s from "./instructors_full.module.scss";

export default function InstructorsFull() {
  return (
    <>
      <div className={`${s["preview"]} ${"center"}`}>
        <div>
          <h1>Наши преподаватели</h1>
          <p className={s["p"]}>
            Харизматичные лекторы, которые помогут вам в изучении медицины
          </p>
        </div>
        <div>
          <img src="/teachers.svg" alt="" />
        </div>
      </div>
      <div className={"center"}>
        {InstructorsData &&
          InstructorsData.map((instructor, i) => (
            <InstructorsInfo key={i} p={instructor} />
          ))}
      </div>
    </>
  );
}
