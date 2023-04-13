import React from "react";
import Image from "next/image";
import img3 from "../../public/images/3.jpeg";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FormattedMessage } from "react-intl";

const Section3 = () => {
  return (
    <section
      id="accomodation-section"
      className="section w-[100%] h-[100%] xl:h-[100vh] bg-black flex justify-center items-center"
    >
      <div className="max-w-screen-xl my-0 mx-auto px-6 flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full sm:w-[50%] text-start sm:text-center">
          <h3 className="text-[4.5rem] xl:text-[6.7rem] px-6">
            <FormattedMessage id="page.home.section3.h" />
          </h3>
          <p className="text-start">
            <FormattedMessage id="page.home.section3.p" />
          </p>
          <div className="text-white text-[5rem] flex justify-center items-center mt-[3rem]">
            <AiOutlineArrowDown />
          </div>
        </div>
        <div className="w-full sm:w-[50%] m-auto">
          <Image src={img3} width={650} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
