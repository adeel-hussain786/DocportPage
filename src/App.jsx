import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase"; // Import Firebase auth configuration
import { onAuthStateChanged } from "firebase/auth";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Login from "./components/Login";
import Signup from "./components/Signup";

const Home = () => (
  <>
    <Navbar />
    <div className="max-w-8xl mx-auto pt-0 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  </>
);

const App = () => {
  const [user, setUser] = useState(null); // Track the user authentication status

  // Check if the user is authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user if logged in
    });

    return () => unsubscribe(); // Clean up the subscription on component unmount
  }, []);

  return (
    <Router>
      <Routes>
        {/* If the user is logged in, show the full Home page, otherwise navigate to login */}
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
