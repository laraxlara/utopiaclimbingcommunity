import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import img1 from "../../public/images/1.jpeg";

type Props = {};

const Section1 = (props: Props) => {
  const { locales } = useRouter();

  const intl = useIntl();
  return (
    <section className="section w-[100%] h-[100%] xl:h-[100vh] bg-black flex justify-center items-center">
      <div className="max-w-screen-xl my-0 px-6 py-10 xl:py-0 mx-auto flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full sm:w-[60%] pl-2">
          <h1 className="text-[4rem] xl:text-[8rem]">
            <FormattedMessage id="page.home.h1" />
          </h1>
          <p>
            <FormattedMessage id="page.home.section1.p" />
          </p>
        </div>
        <div className="w-full sm:w-[40%] m-auto flex justify-center items-center">
          <Image src={img1} width={480} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
