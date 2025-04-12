import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        await createUserWithEmailAndPassword(auth, values.email, values.password);
        toast.success("Signup Successful!");
        setTimeout(() => navigate("/login"), 2000);
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  const fields = [
    { icon: <FaUser />, name: "name", placeholder: "Name" },
    { icon: <FaEnvelope />, name: "email", placeholder: "Email", type: "email" },
    { icon: <FaLock />, name: "password", placeholder: "Password", type: "password" },
    { icon: <FaLock />, name: "confirmPassword", placeholder: "Confirm Password", type: "password" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#eaf6f6] px-4">
      <ToastContainer />
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-center text-[#2d4d4d] text-3xl font-bold mb-2">docport</h2>
        <h3 className="text-center text-xl font-semibold mb-1 text-[#406060]">Sign up</h3>
        <p className="text-center text-gray-500 mb-6">Create an account</p>

        <form onSubmit={formik.handleSubmit} className="space-y-3">
          {fields.map(({ icon, name, placeholder, type = "text" }) => (
            <div key={name}>
              <div className="flex items-center border border-[#b2d8d8] rounded-md px-3 py-2">
                <span className="text-[#4db8b8] mr-2">{icon}</span>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[name]}
                  className="w-full outline-none text-gray-700 bg-transparent"
                />
              </div>
              {formik.touched[name] && formik.errors[name] && (
                <div className="text-red-500 text-sm mt-1">{formik.errors[name]}</div>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-[#4db8b8] text-white py-2 rounded-md font-semibold hover:bg-[#3aa7a7] transition duration-300"
          >
            Signup
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#4db8b8] hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
