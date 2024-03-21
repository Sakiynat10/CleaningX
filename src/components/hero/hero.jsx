import GetButton from "../get-button/getButton";
import ContactNumber from "../contact-number/contact-number";
import style from "./hero.module.css";
import heroImage from "../../assets/images/hero-right.png";

const hero = () => {
  return (
    <section id={style["hero"]}>
      <div className="container">
        <div className={style["hero-infos"]}>
          <div className={style["hero-left"]}>
            <h1>Quality cleaning for your home</h1>
            <p>
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className="hero-left-btns">
              <GetButton />
              <ContactNumber />
            </div>
          </div>
          <div className={style["hero-right"]}>
            <img src={heroImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
