import React from "react";
import Image from "next/image";
import img3 from "../../public/images/3.jpeg";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FormattedMessage } from "react-intl";

const Section3 = () => {
  return (
    <section
      id="accomodation-section"
      className="section w-[100%] h-[100%] xl:h-[100vh] bg-black flex justify-center items-center overflow-y-hidden"
    >
      <div className="max-w-screen-xl my-0 mx-auto px-6 flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full xl:w-[60%] text-center text-center px-0 xl:px-[5rem] mb-10 xl:mb-0">
          <h3 className="text-[4rem] xl:text-[6rem]">
            <FormattedMessage id="page.home.section3.h" />
          </h3>
          <p>
            <FormattedMessage id="page.home.section3.p" />
          </p>
          <div className="text-gray-400 text-[4rem] flex justify-center items-center mt-[3rem]">
            <AiOutlineArrowDown />
          </div>
        </div>
        <div className="w-full xl:w-[40%] m-auto ml-12 xl:ml-0">
          <Image src={img3} width={600} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
