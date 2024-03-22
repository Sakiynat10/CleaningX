import ExploreBtn from "../explore-btn/explore-btn";
import GetButton from "../get-button/getButton";
import ContactNumber from "../contact-number/contact-number";
import style from "./service.module.css";

const service = () => {
  return (
    <section id={style["service"]}>
      <div className="container">
        <div className={style["service-titles"]}>
          <h3>Our Services</h3>
          <ExploreBtn />
        </div>
        <div className={style["service-cards"]}>
          <div className={style["service-card"]}>
            <img src="/project-images/service-card-1.png" alt="service-img-1" />
            <h4>House cleaning</h4>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className={style["service-card"]}>
            <img src="/project-images/service-card-2.png" alt="service-img-2" />
            <h4>Office cleaning</h4>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className={style["service-card"]}>
            <img src="/project-images/service-card-3.png" alt="service-img-3" />
            <h4>Industrial cleaning</h4>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
      </div>
      <div id={style["covid"]}>
        <div className="container">
          <div className={style["service-covid"]}>
            <img src="/project-images/service-covid.png" alt="san-img" />
            <div className={style["service-covid-info"]}>
              <h3>Covid-19 sanitization</h3>
              <h1>
                We follow guidelines to keep you safe from the COVID-19 virus
              </h1>
              <p>
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
              <div className={style["service-btns"]}>
                <GetButton />
                <ContactNumber/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default service;
