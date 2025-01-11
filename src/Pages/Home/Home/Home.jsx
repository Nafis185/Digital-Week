import About from "../About/About";
import Banner from "../Banner/Banner";
import EventSchedule from "../Event/EventSchedule";
import Collapse from "./Collapse";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <Collapse></Collapse>
            <div className=" ">
                <EventSchedule></EventSchedule>
            </div>
        </div>
    );
};

export default Home;