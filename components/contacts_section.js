import s from "./contacts_section.module.scss";
import Button from "./button";
import Input from "./input";
import InputCheckbox from "./input_checkbox/input_checkbox";

export function telValid(e) {
  if (e.target.value.match(/[^0-9\+]/)) {
    e.target.value = e.target.value.replace(/[^0-9\+]/, "");
  }
}

export default function ContactSection() {
  return (
    <>
      <div className={`${s["platform-block"]} ${"center"}`}>
        <div className={`${s["wrapper"]}`}>
          <div className={s["call-to-action"]}>
            <h3> Нужна помощь? </h3>
            <p className="small"> Мы ответим на все ваши вопросы! </p>
          </div>
          <div className={s["contact-form-wrapper"]}>
            <div className={s["contact-form"]}>
              {/* <form> */}
                <div className={s["contact-phone-wrapper"]}>
                  <div className={s["input-wrapper"]}>
                    <Input label="Имя" type="text" />
                    <Input label="Фамилия" type="text" />
                    <Input
                      type="tel"
                      label="Номер телефона"
                      onChange={telValid}
                    />
                    <Input type="email" label="Почта" />
                  </div>
                  <Button
                    text="Напишите&nbsp;мне"
                    button_color="yellow"
                    text_color="black"
                    border_color="white"
                    hover="white"
                    type="submit"
                  />
                </div>
                <div className={s["contact-phone-wrapper"]}>
                  <InputCheckbox />
                  <p className={s["agree"]}>
                    Вы соглашаетесь на обработку персональных данных согласно <br />
                    <mark className={s["mark"]}>
                      политике конфиденциальности
                    </mark>
                  </p>
                </div>
              {/* </form> */}
              <div className={s["contact-buttons"]}>
                <p> Или </p>
                  <a href="">
                    <Button
                      text="Написать"
                      button_color="peach"
                      text_color="black"
                      inner_logo="telegram_black.svg"
                    />
                  </a>
                  <a href="">
                    <Button
                      text="Написать"
                      button_color="peach"
                      text_color="black"
                      inner_logo="whatsapp_black.svg"
                    />
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
