import React from "react";
import Image from "next/image";
import img2 from "../../public/images/2.jpeg";
import { FormattedMessage } from "react-intl";


const Section2 = () => {
  return (
    <section className="relative w-full h-[100%] xl:h-[100vh] bg-black">
      <div className="relative xl:absolute w-full h-[100%] xl:h-[100vh] top-0 left-0 bottom-0 right-0 flex flex-col xl:flex-row">
        <div className="relative w-full xl:w-[40%] text-white overflow-y-hidden flex justify-center items-center">
          <Image src={img2} alt="The young man climbing the rock" />
        </div>
        <div className="relative w-full xl:w-[60%] h-[100%] xl:h-[100vh] px-0 xl:px-[10rem] text-white flex flex-col justify-center items-center text-center overflow-y-hidden">
          <h3 className="overflow-y-hidden">
            <FormattedMessage id="page.home.h2" />
          </h3>
          <p className="text-center px-12 overflow-y-hidden">
            <FormattedMessage id="page.home.section2.p" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
