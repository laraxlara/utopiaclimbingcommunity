import React from "react";
import Image from "next/image";

import Navbar from "@/components/Navbar";

import headerImage from "../../public/images/header1.jpeg";
import logo from "../../public/images/logo.png";


const Header = () => {
  return (
    <header className="section relative w-[100%] h-[600px] xl:h-[100vh] overflow-y-hidden">
      <div className="absolute w-[100%] h-[100%] top-0 z-[-1]">
        <Image src={headerImage} alt="" fill priority />
      </div>
      <Navbar />
      <div className="flex justify-center items-center mt-0 xl:mt-[10rem]">
        <Image src={logo} alt="Logo" width={400} height={400} />
      </div>
    </header>
  );
};

export default Header;
