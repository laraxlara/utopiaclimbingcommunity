import React from "react";
import Image from "next/image";
import { FaPaw } from "react-icons/fa";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import img9 from "../../public/images/9.jpg";

type Props = {};

const Section10 = (props: Props) => {
  const { locales } = useRouter();

  const intl = useIntl();
  return (
    <section
      id="activities-section"
      className="section w-[100%] h-[100%] xl:h-[100vh] bg-black relative flex justify-center items-center"
    >
      <div className="max-w-screen-xl my-0 mx-auto px-4 py-10 flex flex-col xl:flex-row justify-center items-center text-start sm:text-center">
        <div className="w-full h-[600px] xl:w-[45%] overflow-y-hidden flex justify-center items-center">
          <div className="relative xl:absolute top-0 left-0">
            <Image
              src={img9}
              alt=""
              style={{ width: "100%", height: "100vh" }}
            />
          </div>
        </div>
        <div className="w-full xl:w-[55%]">
          <h3>
            <FormattedMessage id="page.home.section10.h" />
          </h3>
          <p className="text-start xl:text-end px-12">
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
