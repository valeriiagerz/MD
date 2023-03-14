import s from "./button.module.scss";
import React from "react";

export const Button = React.forwardRef(function (p) {
  const buttonColorClass = p.button_color
    ? s[p.button_color + "-button"]
    : s["yellow-button"];
  const buttonTextColor = p.text_color
    ? s[p.text_color + "-text"]
    : s["black-text"];
  const shadowClass = p.shadow ? s["shadow-" + p.shadow] : s["shadow-black"];
  const solidBorder = p.border_color && s[p.border_color + "-border"];
  return (
    <button
      className={`${s["platform-button"]} ${solidBorder} ${buttonColorClass} ${buttonTextColor}`}
      text={p.text}
      // logo={p.arrow}
    >
      {p.inner_logo && (
        <img
          className={`${s["img"]} ${buttonTextColor}`}
          src={"/logos/" + p.inner_logo}
        />
      )}
      {p.text && (
        <span className={`${s["platform-button-text"]} ${buttonTextColor}`}>
          {p.text}
        </span>
      )}
      {p.arrow && (
        <img className={`${buttonTextColor}`} src={"/logos/" + p.arrow} />
      )}
      <div className={`${shadowClass}`} />
    </button>
  );
});

export default Button;
