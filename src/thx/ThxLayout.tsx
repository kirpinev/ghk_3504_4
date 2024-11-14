import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import rocket from "../assets/rocket.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";

export const ThxLayout = () => {
    const clickSuccess = () => {
        window.gtag("event", "3504_ok_click", {
            variant_name: "ghk_3504_4",
        });
    };

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={rocket}
          width={135}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Спасибо, мы записали ваш ответ
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          Сервис находится в разработке. Как только он будет доступен, мы
          обязательно вам сообщим.
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtnThx}>
        <ButtonMobile block view="primary" href="alfabank://debit_card_showcase?flowType=KIDS" onClick={clickSuccess}>
          Хорошо
        </ButtonMobile>
      </div>
    </>
  );
};
