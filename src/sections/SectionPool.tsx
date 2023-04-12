import React from "react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import imgbg from "../../public/images/bg.jpg";

const SectionPool = () => {
  return (
    <div className="section relative w-[100%] h-[400px] xl:h-[100vh] flex justify-center items-center">
      <div className="absolute w-[100%] h-[100%] top-0 z-[-1] brightness-50">
        <Image src={imgbg} alt="" fill priority />
      </div>
      <h3><FormattedMessage id="page.home.pool.h" /></h3>
    </div>
  );
};

export default SectionPool;
