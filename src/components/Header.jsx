import React from "react";
import logo from "../img/logo.svg";

export default function Header() {
  return (
    <div className="w-[100%] h-[10vh] flex justify-center items-center">
      <div className="w-[90%]">
        <img className="animate-bounce" src={logo} alt="logo" />
      </div>
    </div>
  );
}
