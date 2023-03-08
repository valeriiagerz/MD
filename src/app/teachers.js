import { InstructorsData } from "@/instructors_data";
import InstructorsInfo from "../../components/instructors_info";
import s from "./instructors_full.module.css";

export default function InstructorsFull(p) {
  return (
    <>
      <div className={`${s["preview"]} ${"center"}`}>
        <div>
          <h1>Наши преподаватели</h1>
          <p>Харизматичные лекторы, которые помогут вам в изучении медицины</p>
        </div>
        <div>
          <img src="/teachers.svg" alt="" />
        </div>
      </div>
      <div className={"center"}>
        {InstructorsData &&
          InstructorsData.map((p) => <InstructorsInfo key={p.id} p={p} />)}
      </div>
    </>
  );
}
