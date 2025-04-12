import Image1 from "../assets/next1.png";
import Image2 from "../assets/next1.png";
import Image3 from "../assets/next1.png";

const Workflow = () => {
  return (
    <div className="mt-20 px-4 text-center bg-[#f8f9fc]">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        What Should You Expect?
      </h2>
      <p className="text-lg text-[#2d2d2f] max-w-3xl mx-auto mb-12">
        Docport offers a range of tools and features designed to streamline your logistics and make your workflows more efficient.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Workflow Automation */}
        <div className="flex flex-col items-center">
          <img src={Image1} alt="Workflow Automation" className="w-full max-w-xs mb-6" />
          <h3 className="text-xl font-semibold mb-2 text-[#2d2d2f]">Workflow Automation</h3>
          <p className="text-[#2d2d2f]">
            Automate your workflow with easy-to-use tools that allow you to seamlessly connect and manage tasks.
          </p>
        </div>

        {/* Real-Time Collaboration */}
        <div className="flex flex-col items-center">
          <img src={Image2} alt="Real-Time Collaboration" className="w-full max-w-xs mb-6" />
          <h3 className="text-xl font-semibold mb-2 text-[#2d2d2f]">Real-Time Collaboration</h3>
          <p className="text-[#2d2d2f]">
            Collaborate with your team in real time, ensuring smooth communication and efficient project management.
          </p>
        </div>

        {/* Data Insights */}
        <div className="flex flex-col items-center">
          <img src={Image3} alt="Data Insights" className="w-full max-w-xs mb-6" />
          <h3 className="text-xl font-semibold mb-2 text-[#2d2d2f]">Data Insights</h3>
          <p className="text-[#2d2d2f]">
            Gain actionable insights with our detailed data analytics to optimize your operations and decision-making.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <button className="bg-gradient-to-r from-[#5cb4a1] to-[#4cc597] hover:bg-[#5cb4a1] text-white font-semibold py-3 px-8 rounded-lg transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Workflow;
