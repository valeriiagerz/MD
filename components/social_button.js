import s from "./social_button.module.scss";
import Link from "next/link";

export default function SocialButton(p) {
  return (
    <>
      {p.href && p.href !== "/" && (
        <Link href={p.href}
          className=
          {s["social-logo-border"]}>
          {/* target={p.target} */}
          <img className={s["img"]} src={p.logo} alt={p.logo} />
          <div className={s["circle"]}></div>
        </Link>
      )}
    </>
  );
}
