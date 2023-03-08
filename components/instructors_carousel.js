// import s from "./instructors_carousel.module.css";
// import InstructorInfo from "../instructor_info/instructor_info";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import Button from "../button/button";
// import Link from "next/link";

// export default function InstructorCarousel({ Instructors, isNextButton }) {
//   let slides = [];

//   Instructors.map((p, i) =>
//     slides.push(
//       <SwiperSlide key={i} className={s["slide"]}>
//         <InstructorInfo key={p.id} card={p} slider_theme={"swiper"} />
//       </SwiperSlide>
//     )
//   );

//   slides.push(
//     <SwiperSlide key={100} className={s["slide"]}>
//       <Link href="/teachers">
//         <a>
//           <div className={s["card"]}>
//             <img src="/images/benefit_icons/arrow.svg" alt="arrow" />
//             <h4>Все преподаватели</h4>
//             <img
//               className={s["logo"]}
//               src="/images/logos/benefit_logo_yellow.svg"
//               alt="logo"
//             />
//           </div>
//         </a>
//       </Link>
//     </SwiperSlide>
//   );

//   return (
//     <div className={s["instructor-carousel"]}>
//       <div className={s["block"]}>
//         {Instructors.map((p, i) => (
//           <InstructorInfo key={p.id} card={p} />
//         ))}
//         <Link href="/teachers">
//           <a>
//             <div className={s["button"]}>
//               <Button
//                 text="Все преподаватели"
//                 hover="black"
//                 border_color="black"
//                 arrow="arrow_black.svg"
//               />
//             </div>
//           </a>
//         </Link>
//       </div>
//       <Swiper className={s["swiper"]} slidesPerView={"auto"}>
//         {slides}
//       </Swiper>
//     </div>
//   );
// }