import React from "react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import img8 from "../../public/images/54.png";


const Section9 = () => {
  return (
    <section className="relative w-full h-[100%] xl:h-[100vh] bg-black">
      <div className="relative xl:absolute w-full h-[100%] xl:h-[100vh] top-0 left-0 bottom-0 right-0 flex flex-col xl:flex-row">
        <div className="w-full xl:w-[60%] flex flex-col justify-center items-center px-0 xl:px-[10rem]">
          <h3>
            <FormattedMessage id="page.home.section9.h" />
          </h3>
          <p className="text-center xl:mb-0">
            <FormattedMessage id="page.home.section9.p" />
          </p>
        </div>
        <div className="relative w-full xl:w-[40%] text-white overflow-y-hidden flex justify-center items-center">
          <Image src={img8} alt="Homemade bruscetti made of fresh ingredients" />
        </div>
      </div>
    </section>
  );
};

export default Section9;
