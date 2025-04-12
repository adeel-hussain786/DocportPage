import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-green-600">DocPort</h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between flex-1 px-8 py-12 bg-[#f8f9fc]">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight mb-4">
            Welcome to Your Personal Document Portal
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Manage your documents, organize files, and stay on top of your work.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="/docs-illustration.svg" alt="DocPort" className="w-full max-w-md mx-auto" />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow mt-auto py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} DocPort. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
