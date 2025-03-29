import React, { useEffect } from "react";
import logo from "../utils/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";


const Header = () => {
    const navigate =useNavigate();
      const dispatch=useDispatch()
    const user = useSelector((store) => store.user);
    

    const handleToSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    };
     useEffect(() => {
       const unsubscribe= onAuthStateChanged(auth, (user) => {
         if (user) {
           // User is signed in

           const { uid, email, displayName, photoURL } = user;
           dispatch(
             addUser({
               uid: uid,
               email: email,
               displayName: displayName,
               photoURL:photoURL,
             })
           );
           navigate("/browse")

           // ...
         } else {
           // User is signed out
           dispatch(removeUser());
           navigate("/");
         }
       });

       //unsubscribe when component unmounts
       return ()=>unsubscribe();
     }, []);

     const handleGptSearchClick=()=>{
      //toggle GPT Search
          dispatch(toggleGptSearchView());
     }

    return (
      <div className="absolute px-18 py-2 z-20  w-full flex justify-between">
        <img
          className="w-44 brightness-125 contrast-150 saturate-200"
          src={logo}
          alt="Netflix Logo"
        />
        <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10"></div>

        {/* Hide user profile and sign-out button if user is not logged in */}
        {user && (
          <div className="flex items-center">
            <button
              type="button"
              class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-5 mb-2 "
              onClick={handleGptSearchClick}
            >
              GPT Search
            </button>
            <img
              className="w-12 h-12 mr-3"
              src={user.photoURL}
              alt="User Profile"
            />
            <button
              onClick={handleToSignOut}
              className="font-bold text-white cursor-pointer"
            >
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    );
};

export default Header;
