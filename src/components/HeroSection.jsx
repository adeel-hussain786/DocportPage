import Image from "../assets/laptop.png"; 

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-[#e9f5f5]">
      
      <div className="lg:w-1/2">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#2d2d2f] leading-tight">
          Boost your efficiency <br />
          <span className="text-[#2d2d2f]">with docport</span>
        </h1>
        <div className="w-20 h-2 bg-blue-500 mt-4 mb-6 rounded-full"></div>
        <p className="text-lg text-[#2d2d2f] mb-8">
          Docport brings all your operations into one centralized platform, ensuring seamless management and clarity on every front.
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="bg-[#5cb4a1] text-white px-6 py-3 rounded-md font-medium shadow-md hover:opacity-90"
          >
            Learn More
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-3 rounded-md bg-white text-[#2d2d2f] border shadow-sm hover:bg-gray-100"
          >
            <div className="w-6 h-6 border border-black rounded-full flex items-center justify-center mr-2">
              ▶
            </div>
            Explore More
          </a>
        </div>
      </div>

      <div className="lg:w-1/2 mb-12 lg:mb-0">
        <img
          src={Image}
          alt="Laptop showing docport dashboard"
          className="w-full max-w-xl mx-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
