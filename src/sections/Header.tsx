import React from "react";
import Image from "next/image";

import Navbar from "@/components/Navbar";

import headerImage from "../../public/images/header1.jpeg";
import logo from "../../public/images/logo.png";


const Header = () => {
  return (
    <div className="section relative w-[100%] h-[600px] xl:h-[100vh]">
      <div className="absolute w-[100%] h-[100%] top-0 z-[-1]">
        <Image src={headerImage} alt="" fill priority />
      </div>
      <Navbar />
      <div className="flex justify-center items-center">
        <Image src={logo} alt="Logo" width={400} height={400} />
      </div>
    </div>
  );
};

export default Header;
