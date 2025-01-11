import About from "../About/About";
import Banner from "../Banner/Banner";
import EventSchedule from "../Event/EventSchedule";
import Collapse from "./Collapse";
import Contact from "./Contact";
import Contacts from "./Contacts";



const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <Collapse></Collapse>
            <div className=" ">
                <EventSchedule></EventSchedule>
            </div>
           <Contacts></Contacts>
            <Contact></Contact>
        </div>
    );
};

export default Home;