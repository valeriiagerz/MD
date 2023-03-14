import s from "./instructors.module.scss";
import Link from "next/link";
import Button from "@/components/button/button";
import InstructorsMiniCard from "@/components/instructors_mini_card/instructors_mini_card";
import { InstructorsData } from "@/instructors_data";

export default function Instructors() {

  return (
    <>
      <div className={`${s["block"]} ${"center"}`}>
        <div className={s["left"]}>
          <img src="/logos/curator.svg" alt="img" />
          <h3>Преподаватели</h3>
          <p>Харизматичные лекторы, которые помогут вам в изучении медицины</p>
        </div>
        <div className={s["right"]}>
        {InstructorsData &&
          InstructorsData.slice(0, 3).map((instructor, i) => (
            <InstructorsMiniCard key={i} p={instructor} />
          ))}
          <Link href="/teachers">
            <div className={s["button"]}>
              <Button text="Все преподаватели" arrow="/arrow.svg" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
