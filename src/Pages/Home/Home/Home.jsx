import About from "../About/About";
import Banner from "../Banner/Banner";
import Collapse from "./Collapse";


const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Banner></Banner>
            <About></About>
            <Collapse></Collapse>
        </div>
    );
};

export default Home;