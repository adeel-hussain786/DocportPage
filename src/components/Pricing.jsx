import { CheckCircle2 } from "lucide-react";
import next2 from "../assets/next2.jpg";

const Pricing = () => {
  return (
    <div className="mt-20 flex flex-col lg:flex-row items-center justify-between gap-12 px-4 lg:px-16">
      {/* Left: Features List */}
      <div className="max-w-xl">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8">
          Why Choose DocPort?
        </h2>
        <ul className="space-y-6 text-lg sm:text-xl">
          {[
            "Complete visibility of all logistics operations",
            "User-friendly interface",
            "Collaborate with unlimited partners",
            "Effortless document management",
            "Seamless integrations with popular tools",
          ].map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle2 className="text-[#4cc597] mr-3" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Static Image */}
      <div className="max-w-xl w-full">
        <img
          src={next2}
          alt="DocPort demo interface"
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Pricing;
