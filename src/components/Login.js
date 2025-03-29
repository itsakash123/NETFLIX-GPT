import React, { useRef, useState } from "react";

import Header from "./Header";
import logo from "/src/utils/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";

import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { user_AVATAR } from "../utils/constants";
const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const[errorMessage,seterrorMessage]=useState(null)
  
  const dispatch=useDispatch()
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const name=useRef(null);
  const email =useRef(null);
  const password=useRef(null);
  

  const handleButtonClick =()=>{
    //Validate the form data
    //  console.log(email.current.value);
    //  console.log(password.current.value);
    const message= checkValidData(email.current.value, password.current.value);
    
    seterrorMessage(message)

    if(message) return;

    //Sign In Sign Up Logic
    if(!isSignInForm){
    //Sign Up Logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL:
            user_AVATAR,
        })
          .then(() => {
            // Profile updated!
            // ...
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          })
          .catch((error) => {
            // An error occurred
            // ...
            seterrorMessage(error.message);
          });
        
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode + " " + errorMessage)
      });
        

    }
    else{
      //SignIn Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
        });

    }


    
  }
  return (
    <div>
      <Header  />
      <div className="absolute w-full">
        <img className="w-full " src={logo} alt="Background" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute inset-0 mt-25 flex justify-center items-center ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black h-full w-105 p-14  opacity-70"
        >
          <h1 className="text-white text-3xl font-bold mb-6 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="User Name"
              className="p-3 mb-4 w-full border border-gray-500  bg-gray-700 rounded  text-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="p-3 mb-4 w-full border border-gray-500 rounded  bg-gray-700 text-white"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 mb-4 w-full border border-gray-500 rounded  bg-gray-700 text-white"
          />

          <p className="text-red-600 font-bold py-2 mb-3 ">{errorMessage}</p>

          <button
            className="bg-red-600 w-full p-3 rounded text-white font-bold hover:bg-red-700 cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In " : "Sign Up"}
          </button>
          <a className="block text-white hover:underline mt-4">
            Forgot password?
          </a>
          <div className="text-gray-300  mt-4 flex justify-between">
            <label>
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a className="hover:underline">Need help?</a>
          </div>
          <p className="text-gray-300 mt-6">
            {isSignInForm ? (
              <>
                <span>New to Netflix? </span>
                <span
                  className="text-white font-semibold cursor-pointer hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign Up Now
                </span>
              </>
            ) : (
              <>
                <span>Already registered? </span>
                <span
                  className="text-white font-semibold cursor-pointer hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign In Now
                </span>
              </>
            )}
          </p>
          <p className="text-sm mt-6 text-white">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
