import s from "./input_checkbox.module.scss";
import React from "react";

export const InputCheckbox = React.forwardRef((p, ref) => (
  <div className={`${s["block"]}`}>
    <input
      className={s["input"]}
      type="checkbox"
      ref={ref}
      checked={p.checked}
      onChange={p.onChange}
      required
    />
    <div className={s["checkmark"]}></div>
  </div>
));

export default InputCheckbox;