import img from "../../../assets/about/about.jpg"

const About = () => {
    return (
      <div className="justify-center justify-items-center text-center mt-10 mb-10">
        <h1 className="text-5xl font-bold mb-10  "> This is about section </h1>
        <img src={img} />
      </div>
    );
};

export default About;