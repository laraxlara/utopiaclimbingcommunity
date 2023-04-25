import React from "react";
import Image from "next/image";
import img3 from "../../public/images/3.jpeg";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FormattedMessage } from "react-intl";

const Section3 = () => {
  return (
    <section className="section w-[100%] h-[100%] xl:h-[100vh] bg-black flex justify-center items-center overflow-y-hidden">
      <div className="max-w-screen-xl my-0 px-6 py-10 xl:py-0 mx-auto flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full sm:w-[60%] pl-2 mb-10 xl:mb-0 text-center">
          <h1 className="text-[4rem] xl:text-[6rem]">
            <FormattedMessage id="page.home.section3.h" />
          </h1>
          <p>
            <FormattedMessage id="page.home.section3.p" />
          </p>
          <div className="text-gray-400 text-[4rem] flex justify-center items-center mt-[3rem]">
             <AiOutlineArrowDown />
          </div>
        </div>
        <div className="w-full sm:w-[40%] m-auto flex justify-center items-center pl-0 md:pl-8">
          <Image src={img3} width={480} alt="People sitting in the common area" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
