import GetButton from "../get-button/getButton";
import ExploreBtn from "../explore-btn/explore-btn";
const about = () => {
  return (
    <section id="about">
      <div className="container">
        <h1>About</h1>
        <p>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
          nisi felis non ultrices massa id egestas quam velit pretium nu.
        </p>
        <div className="about-cards">
          <div className="about-card">
            <img src="/project-images/about-card-1.png" alt="about-img-1" />
            <div className="card-info">
              <h3>1. Schedule online</h3>
              <p>
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>

            </div>
          </div>
          <div className="about-card">
            <img src="/project-images/about-card-2.png" alt="about-img-1" />
            <div className="card-info">
              <h3>2. Pay online easily</h3>
              <p>
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>

            </div>
          </div>
          <div className="about-card">
            <img src="/project-images/about-card-3.png" alt="about-img-1" />
            <div className="card-info">
              <h3>3. Get your house cleaned</h3>
              <p>
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>

            </div>
          </div>
        </div>
        <div className="about-btns">
            <GetButton />
            <ExploreBtn />
        </div>
      </div>
    </section>
  );
};

export default about;
