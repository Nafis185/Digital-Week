// import { useEffect, useState } from "react";

// const useEvent = () => {
//   const [event, setEvent] = useState([]);

//   useEffect(() => {
//     fetch("https://digital-week-server-updated.vercel.app/events")
//       .then((res) => res.json())
//       .then((data) => setEvent(data));
//   }, []);

//   return event;
// };

// export default useEvent;



// from chat gpt
import { useEffect, useState } from "react";

const useEvent = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetch("https://digital-week-server-updated.vercel.app/events")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);

  return event;
};

export default useEvent;
