import GetButton from "../get-button/getButton";
import style from "./header.module.css";
const header = () => {
  return (
    <nav className={style["nav"]}>
      <div className="container">
        <div className={style["navbar"]}>
          <div className={style["navbar-left"]}>
            <img src="/project-images/logo.svg" alt="logo" />
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="index.html">About</a>
              </li>
              <li>
                <a href="index.html">Services</a>
              </li>
              <li>
                <a href="index.html">Articles</a>
              </li>
              <li>
                <a href="index.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className={style["navbar-right"]}>
            <div className={style["cart"]}>
              Cart <span>(0)</span>
            </div>
            <GetButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default header;
