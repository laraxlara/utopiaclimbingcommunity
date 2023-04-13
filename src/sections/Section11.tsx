import React from "react";
import Image from "next/image";
import { FormattedMessage} from "react-intl";
import caveImg from "../../public/images/cave.jpg";

const Section11 = () => {
  return (
    <section className="relative w-full h-[100%] xl:h-[100vh] bg-black">
      <div className="relative xl:absolute w-full h-[100%] xl:h-[100vh] top-0 left-0 bottom-0 right-0 flex flex-col xl:flex-row">
        <div className="relative w-full xl:w-[50%] h-[100%] xl:h-[100vh] text-white flex flex-col justify-center items-center text-center overflow-y-hidden">
          <h3 className="overflow-y-hidden">
            <FormattedMessage id="page.home.section11.h" />
          </h3>
          <p className="text-start px-12 overflow-y-hidden">
            <FormattedMessage id="page.home.section11.p" />
          </p>
        </div>
        <div className="relative w-full xl:w-[50%] text-white overflow-y-hidden flex justify-center items-center">
          <Image src={caveImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section11;
