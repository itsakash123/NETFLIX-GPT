import React from "react";
import { useState } from "react";
import Header from "./Header";
import logo from "/src/utils/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img className="w-full h-full" src={logo} alt="Background" />

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute inset-0 my-10 flex justify-center items-center ">
        <form className="bg-black h-full w-100 p-14  rounded-lg opacity-80">
          <h1 className="text-white text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="User Name"
              className="p-3 mb-4 w-full border border-gray-500  bg-gray-700 rounded  text-white"
            />
          )}
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-3 mb-4 w-full border border-gray-500 rounded  bg-gray-700 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 mb-4 w-full border border-gray-500 rounded  bg-gray-700 text-white"
          />
          <button className="bg-red-600 w-full p-3 rounded text-white font-bold hover:bg-red-700">
            Sign In
          </button>
          <a href="#" className="block text-white hover:underline mt-4">
            Forgot password?
          </a>
          <div className="text-gray-300  mt-4 flex justify-between">
            <label>
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
          <p className="text-gray-300 mt-6">
            <a
              href="#"
              className="text-white hover:underline font-semibold"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to Netflix ? Sign Up Now"
                : "Already registered ? Sign In Now."}
            </a>
            <p className="text-sm  mt-6 text-white">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
