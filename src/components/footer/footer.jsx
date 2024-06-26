import GetButtons from "../get-button/getButton";
import style from "./footer.module.css"

const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={style["footer-top"]}>
          <ul className={style["info-1"]}>
            <li className={style["footer-title"]}>Quality cleaning for your home</li>
            <li>
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </li>
            <li className={style["info-cards"]}>
              <img src="/project-images/telegram.svg" alt="gray-kv" />
              <img src="/project-images/instagram.svg" alt="gray-kv" />
              <img src="/project-images/linkedin.svg" alt="gray-kv" />
              <img src="/project-images/github.svg" alt="gray-kv" />
              <img src="/project-images/facebook.svg" alt="gray-kv" />
            </li>
          </ul>
          <ul className={style["info-2"]}>
            <li className="info-title">Contact us</li>
            <li>1827 Nickel Road, Los Angeles, CA, 90017, United States</li>
            <li>(414) 567 - 2109</li>
            <li>
              <a href="contact@cleaning.com">contact@cleaning.com</a>
            </li>
          </ul>
          <ul className={style["info-3"]}>
            <li className={style["info-title"]}>Hours</li>
            <li className={style["info-title"]}>Monday to Friday</li>
            <p>6:00 AM - 9:00 PM</p>
            <li className={style["info-title"]}>Saturday & Sunday</li>
            <p>8:00 AM - 8:00 PM</p>
          </ul>
          <ul className={style["info-4"]}>
            <li className="info-title">Get a free estimate</li>
            <li className="info-number">(414) 567 - 2109</li>
            <li>
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
              eiusmod.
            </li>
            <GetButtons />
          </ul>
        </div>
        <div className={style["line"]}></div>
        <div className={style["footer-bottom"]}>
          <img src="/project-images/logo.svg" alt="logo svg" />
          <p>
            Copyright © Cleaning X | Designed by BRIX Templates - Powered by
            Webflow - Licenses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
