

import img from "../../../assets/about/about.jpg";

const About = () => {
  return (
    <div className="text-center mt-10 mb-10">
      <h1 className="text-5xl font-bold mb-10">About Digital Week</h1>

      <hr />

      <div className="lg:flex lg:justify-center md:flex md:justify-center sm:flex sm:justify-center ">
        <div className="lg:flex lg:justify-center  sm:justify-center  lg:gap-20 mt-10 ">
          <div className="lg:w-1/2">
            <div className="font-medium text-xl">
              <div className="mb-10 text-start">
                <h2 className="text-2xl font-semibold">What to Expect</h2>
                <ul className="list-disc pl-5 mt-2">
                  <li>Keynote speeches from industry leaders</li>
                  <li>Hands-on workshops on cutting-edge technologies</li>
                  <li>Networking opportunities with tech professionals</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="font-medium text-xl text-start">
              <h2 className="text-2xl font-semibold">Event Details</h2>
              <ul className="list-disc pl-5 mt-2">
                <li>Date: 3rd March 2025</li>
                <li>Location: Dhaka City College</li>
                <li>
                  Who Should Attend: Students, Faculty, Industry Professionals
                </li>
                <li>Cost: Free for students, $50 for non-students</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

