import s from "./instructors.module.css";
import { InstructorsData } from "@/instructors_data";
import Link from "next/link";
import Button from "./button";
import InstructorsCarousel from "@/instructors_carousel";
import InstructorsFull from "./instructors_full";
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
          {/* <InstructorsCarousel/> */}
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
