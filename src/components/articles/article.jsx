import GetButton from "../get-button/getButton";
import ExploreBtn from "../explore-btn/explore-btn";
import style from "./article.module.css"

const article = () => {
  return (
    <section id={style["article"]}>
      <div className="container">
        <div className={style["article-titles"]}>
          <h3>Articles & resources</h3>
          <div className={style["article-right-btns"]}>
            <GetButton />
            <ExploreBtn />
          </div>
        </div>
        <div className={style["article-cards"]}>
          <div className={style["article-card"]}>
            <img src="/project-images/article-1.png" alt="cart img" />
            <div className={style["card-info"]}>
              <h4>
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h4>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className={style["info-data"]}>
                <h5>Jan 28, 2022</h5>
              </div>
            </div>
          </div>
          <div className={style["article-card"]}>
            <img src="/project-images/article-2.png" alt="cart img" />
            <div className={style["card-info"]}>
              <h4>
              How to properly disinfect your phone and other electronics              </h4>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <h5>Feb 1, 2022</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default article;
