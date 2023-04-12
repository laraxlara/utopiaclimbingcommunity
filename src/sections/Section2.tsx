import React from "react";
import Image from "next/image";
import img2 from "../../public/images/2.jpeg";
import { FormattedMessage } from "react-intl";


const Section2 = () => {
  return (
    <section className="section w-[100%] h-[100%] xl:h-[100vh] bg-black relative flex justify-center items-center">
      <div className="max-w-screen-xl my-0 px-6 mx-auto flex flex-col-reverse xl:flex-row justify-center items-center text-start sm:text-center">
        <div className="w-full h-full xl:w-[40%] overflow-y-hidden">
          <div className="relative xl:absolute top-0 left-0">
            <Image
              src={img2}
              alt=""
              style={{ width: "100%", height: "100vh" }}
            />
          </div>
        </div>
        <div className="w-full xl:w-[60%]">
          <h2 className="text-[6.7rem]">
            <FormattedMessage id="page.home.h2" />
          </h2>
          <p className="text-start px-8 py-4">
            <FormattedMessage id="page.home.section2.p" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
