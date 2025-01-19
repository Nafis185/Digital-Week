

const useEvent = () => {
   const [event, setEvent] = useState([]);

   useEffect(() => {
     fetch("http://localhost:5000/events")
       .then((res) => res.json())
       .then((data) => setEvent(data));
   }, []);

   return [event, setEvent];
};

export default useEvent;