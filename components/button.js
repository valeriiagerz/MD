import s from "./button.module.css";
import React from "react";

export const Button = React.forwardRef(function (p) {
  return (
    <button className={s["platform-button"]} text={p.text} logo={p.arrow}>
      {p.text && <span className={s["platform-button-text"]}>{p.text}</span>}
      {p.arrow && (
        <img className={s["buttonTextColor"]} src={"/logos/" + p.arrow} />
      )}
    </button>
  );
});

export default Button;
