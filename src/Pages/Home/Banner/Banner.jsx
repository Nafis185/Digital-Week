// import img from "../../../assets/banner/Digital_Week_Banner.jpg";
// import img2 from "../../../assets/banner/Digital_Week_Banner_2.jpg";

import img2 from "../../../assets/banner/Digital_Week_Banner_2.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      <img src={img2} alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[#15151500] flex items-center justify-center">
        <div className="text-white text-center space-y-7 p-10">
          <h2 className="text-6xl font-bold">Welcome to Digital Week</h2>
          <p className="text-2xl">
            Explore the future of technology at our university's premier digital
            event
          </p>
          <div className="flex gap-5 justify-center items-center">
            <button className="btn btn-primary">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
