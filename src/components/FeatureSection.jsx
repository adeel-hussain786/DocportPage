import { FaChartLine, FaRegClock, FaProjectDiagram } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <section className="bg-[#e9f5f5] py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Column */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2d2d2f] mb-6">
            What is DocPort and how can we help?
          </h2>
          <p className="text-[#2d2d2f] text-lg">
            DocPort provides an array of features designed to simplify your logistics, increase productivity, and offer a clear view of your processes.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 space-y-10">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#d1f0d1] p-3 rounded-md">
              <FaProjectDiagram className="text-[#4cc597] text-xl" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#2d2d2f]">Collaboration</h4>
              <p className="text-[#2d2d2f]">
                Seamlessly collaborate with partners, carriers, and others involved in your shipments.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#d1f0d1] p-3 rounded-md">
              <FaChartLine className="text-[#4cc597] text-xl" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#2d2d2f]">Dashboard</h4>
              <p className="text-[#2d2d2f]">
                Visualize all of your logistics data in one place with the powerful DocPort dashboard.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#d1f0d1] p-3 rounded-md">
              <FaRegClock className="text-[#4cc597] text-xl" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#2d2d2f]">Engagement</h4>
              <p className="text-[#2d2d2f]">
                Add partners, share journeys, and access documents easily via both desktop and mobile apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
