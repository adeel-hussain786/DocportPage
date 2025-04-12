import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase"; // Import auth from your firebase configuration
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to store the user information

  // Check if user is authenticated (using Firebase's onAuthStateChanged)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // If a user is logged in, store the user info
    });

    return () => unsubscribe(); // Clean up the subscription when the component is unmounted
  }, []);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-[#e9f5f5]">
      <div className="container px-4 mx-auto">
        {user ? (
          // Show personalized message if the user is logged in
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-700">
              Welcome, {user.displayName ? user.displayName : "User"}!
            </h1>
            <button
              onClick={() => {
                auth.signOut(); // Log the user out when they click the button
                navigate("/login");
              }}
              className="bg-red-500 text-white py-2 px-3 rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          // Show login and signup buttons if the user is not logged in
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => navigate("/login")}
              className="py-2 px-3 rounded-md text-[#2d2d2f] border border-[#2d2d2f] hover:bg-[#e9f5f5] transition-all"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-gradient-to-r from-[#5cb4a1] to-[#4cc597] py-2 px-3 rounded-md text-white"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
