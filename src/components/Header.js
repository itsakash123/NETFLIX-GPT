import React from 'react'
import logo from "../utils/Netflix_Logo_PMS.png";
const Header = () => {
  return (
    <div className=" absolute px-18 py-2  z-10">
      <img
        className="w-44 brightness-125 contrast-150 saturate-200"
        src={logo}
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Header