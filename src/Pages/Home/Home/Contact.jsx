import "../../../App.css";

const Contact = () => {
  return (
    <div>
      <div className="black-container m-20 h-36">
        <div className="flex gap-2">
          <div className="icon">📅</div>
          <div>
            <p>We are open Monday-Friday</p>
            <p>7:00 am - 9:00 pm</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="icon">📞</div>
          <div>
            <p>Have a question?</p>
            <p>+88 019 9097 9098</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="icon">📍</div>
          <div>
            <p> Our address</p>
            <p>Road No-02, Dhanmondi, Dhaka </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
