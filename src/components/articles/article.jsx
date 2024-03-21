import GetButton from "../get-button/getButton";
import ExploreBtn from "../explore-btn/explore-btn";

const article = () => {
  return (
    <section id="article">
      <div className="container">
        <div className="article-titles">
          <h3>Articles & resources</h3>
          <div className="article-right-btns">
            <GetButton />
            <ExploreBtn />
          </div>
        </div>
        <div className="article-cards">
          <div className="article-card">
            <img src="/project-images/article-1.png" alt="cart img" />
            <div className="card-info">
              <h4>
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h4>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="info-data">
                <h5>Jan 28, 2022</h5>
                <img src="/project-images/blue.svg" alt="blue svg" />
              </div>
            </div>
          </div>
          <div className="article-card">
            <img src="/project-images/article-2.png" alt="cart img" />
            <div className="card-info">
              <h4>
              How to properly disinfect your phone and other electronics              </h4>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="info-data">
                <h5>Feb 1, 2022</h5>
                <img src="/project-images/blue.svg" alt="blue svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default article;
