// import { useEffect , useState} from "react";


import EventSchedule from "./EventSchedule";
import EventCard from "./EventCard";
import useEvent from "../../../hooks/useEvent";

const Event = () => {
  const event = useEvent();



  // const [event, setEvent] = useState([]);
  // useEffect(() => {
  //   fetch("https://digital-week-server-updated.vercel.app/events")
  //     .then((res) => res.json())
  //     .then((data) => setEvent(data));
  // }, []);





  return (
    <div className="mt-10 ">
      <div className="text-center">
        <h3 className="text-5xl font-bold text-blue-500 ">**** Our Events ****</h3>
        <h2 className="text-5xl">Our Events Area</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
          laudantium blanditiis quibusdam sint <br />
          reiciendis, amet, nostrum exercitationem vitae maiores ad quam. Esse
          enim ad ullam porro nulla facere iusto iste.
        </p>
      </div>

      {/* grid grid-cols-1 justify-content-center items-center   md:grid-cols-2 md:gap-5 lg:grid-cols-3 gap-5 mt-10 mr-5 ml-5 */}

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {event.map((event) => (
          <EventCard key={event._id} event={event}></EventCard>
        ))}
      </div>

      <EventSchedule></EventSchedule>
    </div>
  );
};

export default Event;
