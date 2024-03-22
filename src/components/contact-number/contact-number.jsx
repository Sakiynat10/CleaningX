import style from "./contact-number.module.css"

const contactNumber = () => {
  return (
    <div className={style["contact-number"]}>
      <img src="/project-images/phone.svg" alt="phone" />
      <div className="contact-info">
        <span>CALL US NOW</span>
        <p>(414) 567 - 2109</p>
      </div>
    </div>
  );
};

export default contactNumber;
