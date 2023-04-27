import React from "react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import {
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import footerImg from "../../public/images/logo_white.png";

function Footer() {
  return (
    <footer className="section h-[100%] bg-black relative">
      <div className="max-w-screen-xl my-0 mx-auto px-4 flex flex-col items-center justify-between md:flex-row text-start overflow-y-hidden">
        <div className="h-[100%] flex flex-col gap-6 overflow-y-hidden">
          <h3 className="overflow-y-hidden text-center xl:text-start">
            <FormattedMessage id="page.home.footer.h" />
          </h3>
          <div className="flex text-white text-[4rem] justify-start items-center overflow-y-hidden">
            <AiFillInstagram />
            <a href="https://www.instagram.com/utopia_climbing__community/" target="blank" className="text-[2.3rem] ml-[2rem]">
              instagram
            </a>
          </div>
          <div className="flex text-white text-[4rem] justify-start items-center overflow-y-hidden">
            <AiFillFacebook />
            <a href="https://www.facebook.com/profile.php?id=100084301151119" target="blank" className="text-[2.3rem] ml-[2rem]">
              facebook
            </a>
          </div>
        </div>
        <div className="h-[100%]">
          <div className="w-full flex justify-center items-center overflow-y-hidden">
            <Image src={footerImg} width={300} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] flex justify-center items-center">
        <div className="absolute bottom-10 flex flex-col justify-center items-center text-center text-white">
          <p>2023 © Utopia Climbing Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
