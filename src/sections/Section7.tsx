import React from "react";
import Image from "next/image";
import { FormattedMessage} from "react-intl";

import img6 from "../../public/images/6.jpeg";

const Section7 = () => {
  return (
    <section className="section w-[100%] h-[100%] xl:h-[100vh] bg-black flex justify-center items-center">
      <div className="max-w-screen-xl my-0 mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-8">
        <div className="w-full sm:w-[60%]">
          <h3 className="text-start">
            <FormattedMessage id="page.home.section7.h" />
          </h3>
          <p className="text-start">
            <FormattedMessage id="page.home.section7.p" />
          </p>
        </div>
        <div className="w-full sm:w-[40%] m-auto flex justify-center items-center">
          <Image src={img6} alt="Camping cooking pot" />
        </div>
      </div>
    </section>
  );
};

export default Section7;
