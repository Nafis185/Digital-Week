
import locSvg from "../../../assets/svg//location.svg";

const Contacts = () => {
  return (
    <div>
      <div className="black-container m-20 h-36">
        <div className="flex gap-2">
          <label className="swap swap-flip text-xl">
            <input type="checkbox" />

            <div className="swap-on">
              <p>We are open Monday-Friday</p>
              <p>7:00 am - 9:00 pm</p>
            </div>
            <div className="swap-off">📅</div>
          </label>
        </div>

        <div className="flex gap-2">
          <label className="swap swap-flip text-xl">
            <input type="checkbox" />

            <div className="swap-on">
              <p>Have a question?</p>
              <p>+88 019 9097 9098</p>
            </div>
            <div className="swap-off ">📞</div>
          </label>
        </div>

        <div className="flex gap-2">
          <label className="swap swap-flip text-xl">
            <input type="checkbox" />

            <div className="swap-on">
              <p> Our address</p>
              <p>Road No-02, Dhanmondi, Dhaka </p>
            </div>
            <div className="swap-off">📍</div>
          </label>
        </div>

       


      </div>
    </div>
  );
};

export default Contacts;

