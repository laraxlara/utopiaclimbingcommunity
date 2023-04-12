import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import img8 from "../../public/images/54.png";

type Props = {};

const Section9 = (props: Props) => {
  const { locales } = useRouter();

  const intl = useIntl();
  return (
    <section className="section w-[100%] h-[100%] sm:h-[100vh] bg-black relative flex justify-center items-center">
      <div className="max-w-screen-2xl my-0 mx-auto px-4 py-10 flex flex-col sm:flex-row justify-center items-center text-start sm:text-center">
        <div className="w-full sm:w-[55%]">
          <h3>
            <FormattedMessage id="page.home.section9.h" />
          </h3>
          <p className="text-start xl:ml-[8rem]"><FormattedMessage id="page.home.section9.p" /></p>
        </div>
        <div className="w-full h-[400px] sm:w-[45%] overflow-y-hidden">
          <div className="relative sm:absolute top-0 right-0">
            <Image
              src={img8}
              alt=""
              style={{ width: "100%", height: "100vh" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
