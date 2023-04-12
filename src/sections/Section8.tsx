import React from "react";
import Image from "next/image";
import img7 from "../../public/images/7.jpeg";
import { FormattedMessage } from "react-intl";


const Section8 = () => {
  return (
    <section className="section w-[100%] h-[100%] xl:h-[100vh] bg-black flex justify-center items-center">
      <div className="max-w-screen-xl my-0 mx-auto px-6 py-10 xl:py-0 flex flex-col xl:flex-row justify-center items-center gap-10">
        <div className="w-full xl:w-[40%] m-auto flex justify-center items-center">
          <Image src={img7} width={350} alt="" />
        </div>
        <div className="w-full xl:w-[60%] text-start">
          <h3 className="text-[4.2rem] xl:text-[6.5rem]"><FormattedMessage id="page.home.section8.h" /></h3>
          <p><FormattedMessage id="page.home.section8.p" /></p>
        </div>
      </div>
    </section>
  );
};

export default Section8;
