import ExploreBtn from "../explore-btn/explore-btn";
import FreeQuote from "../free-quote/free-quote";

const service = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="service-titles">
          <h3>Our Services</h3>
          <ExploreBtn />
        </div>
        <div className="service-cards">
          <div className="service-card">
            <img src="/project-images/service-card-1.png" alt="service-img-1" />
            <h4>House cleaning</h4>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="service-card">
            <img src="/project-images/service-card-2.png" alt="service-img-2" />
            <h4>Office cleaning</h4>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="service-card">
            <img src="/project-images/service-card-3.png" alt="service-img-3" />
            <h4>Industrial cleaning</h4>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
        <div className="service-covid">
          <img src="/project-images/service-covid.png" alt="san-img" />
          <div className="service-covid-info">
            <h3>Covid-19 sanitization</h3>
            <h1>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h1>
            <p>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <FreeQuote />
          </div>
        </div>
      </div>
    </section>
  );
};

export default service;
