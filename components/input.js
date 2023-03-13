import s from "./input.module.scss";
import React, { useRef } from "react";

export const Input = React.forwardRef((p, ref) => (
  <div className={`${s["block"]}`}>
    <div className={s["border"]}></div>
    <input
      className={s["input"]}
      type={p.type}
      ref={ref}
      defaultValue={p.value}
      required
      onChange={p.onChange}
    />
    <label className={s["label"]}>{p.label}</label>
    <div className={s["border"]}></div>
  </div>
));

export default Input;