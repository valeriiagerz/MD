import s from "./instructors.module.scss";
import Link from "next/link";
import Button from "./button";
import InstructorsMiniCard from "./instructors_mini_card";
// import { useState } from "react";
// import { fetcher } from "@/lib/fetcher";
// import InstructorCarousel from "./instructors_carousel";

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
          <InstructorsMiniCard /> 
          <InstructorsMiniCard /> 
          <InstructorsMiniCard />
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
