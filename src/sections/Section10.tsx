import React from "react";
import Image from "next/image";
import { FaPaw } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import img9 from "../../public/images/9.jpg";

const Section10 = () => {
  return (
    <section id="activities-section" className="relative w-full h-[100%] xl:h-[100vh] bg-black">
      <div className="relative xl:absolute w-full h-[100%] xl:h-[100vh] top-0 left-0 bottom-0 right-0 flex flex-col xl:flex-row">
        <div className="relative w-full xl:w-[40%] text-white overflow-y-hidden flex justify-center items-center">
          <Image src={img9} alt="" />
        </div>
        <div className="w-full xl:w-[55%] text-center flex flex-col justify-center items-center mb-[2rem]">
           <h3>
             <FormattedMessage id="page.home.section10.h" />
          </h3>
          <p className="text-center xl:text-end px-12">
            <FormattedMessage id="page.home.section10.p" />
          </p>
          <div className="flex text-white justify-center items-center text-center text-[2.7rem] gap-6 pt-10">
            <FaPaw />
            <h6>
              <FormattedMessage id="page.home.section10.a" />
           </h6>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Section10;
