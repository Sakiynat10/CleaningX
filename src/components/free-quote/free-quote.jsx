import GetButton from "../get-button/getButton";
import ContactNumber from "../contact-number/contact-number";

const freeQuote = () => {
  return (
    <div className="quote-btn">
      <GetButton />
      <ContactNumber/>
    </div>
  );
};

export default freeQuote;
