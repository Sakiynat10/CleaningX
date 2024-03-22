import ContactNumber from "../contact-number/contact-number";
import style from "./contact.module.css";
const contact = () => {
  return (
    <section id={style["contact"]}>
      <div className="container">
        <div className={style["contact-container"]}>
          <div className={style["contact-left"]}>
            <h1>Contact Us</h1>
            <p>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <ContactNumber />
            <span className={style["line"]}></span>
            <h3>Not convinced yet?</h3>
            <p>
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </p>
            <button className={style["contact-btn"]}>
              Browse our packages
            </button>
          </div>
          <div className={style["contact-right"]}>
            <div className={style["input-group"]}>
              <label htmlFor="name">
                Full name <br />
                <input id="name" type="text" />
              </label>
              <label htmlFor="number">
                Phone Number <br />
                <input id="number" type="text" />
              </label>
            </div>
            <div className={style["input-group"]}>
              <label htmlFor="address">
                Address <br />
                <input id="address" type="text" />
              </label>
              <label htmlFor="email">
                Email <br />
                <input id="email" type="email" />
              </label>
            </div>
            <div className={style["input-group"]}>
              <label htmlFor="request">
                Requested service <br />
                <input id="request" type="text" />
              </label>
              <label htmlFor="date">
                Date <br />
                <input id="date" type="date" />
              </label>
            </div>
            <label htmlFor="textarea">
              Add a note
              <textarea
                name="textarea"
                id="textarea"
                cols="60"
                rows="4"
              ></textarea>
            </label>
            <button className="submit-btn">Submit messages</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
