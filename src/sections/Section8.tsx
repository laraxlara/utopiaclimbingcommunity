import React from "react";
import Image from "next/image";
import img7 from "../../public/images/7.jpeg";
import { FormattedMessage } from "react-intl";


const Section8 = () => {
  return (
    <section className="relative w-full h-[100%] xl:h-[100vh] bg-black">
      <div className="relative xl:absolute w-full h-[100%] xl:h-[100vh] top-0 left-0 bottom-0 right-0 flex flex-col xl:flex-row">
        <div className="relative w-full xl:w-[40%] text-white overflow-y-hidden flex justify-center items-center mt-10 xl:mt-0">
          <Image src={img7} alt="Boy playing the guitar on the deck" />
        </div>
        <div className="w-full xl:w-[60%] flex flex-col justify-center items-center text-center px-0 xl:px-[10rem]">
          <h3 className="text-[4.2rem] xl:text-[6.5rem]">
            <FormattedMessage id="page.home.section8.h" />
          </h3>
          <p>
            <FormattedMessage id="page.home.section8.p" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section8;
