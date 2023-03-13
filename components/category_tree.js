import Link from "next/link";
import s from "./category_tree.module.scss";
import Button from "./button";

export default function CategoryTree() {
  let backHref = "/";
  return (
    <div className="center">
    <div className={`${s["wrapper"]}`}>
      <Link href={backHref}>
        <div>
          <Button
            text="Назад"
            button_color="peach"
            text_color="black"
            border_color="black"
            inner_logo="../logos/arrow_left.svg"
          />
        </div>
      </Link>
      <div className={s["link-tree"]}>
        <Link href="/">
            <span className={`${"small"} ${s["link"]}`}>Главная</span>
        </Link>
        <img src="/logos/arrow_right.svg" />
        <Link href="">
            <span className={`${"small"} ${s["link"]}`}>Наши преподаватели</span>
        </Link>
      </div>
    </div>
    </div>
  )
}

