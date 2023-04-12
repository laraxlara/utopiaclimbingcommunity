import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

import img6 from "../../public/images/6.jpeg";

type Props = {};

const Section7 = (props: Props) => {
  const { locales } = useRouter();

  const intl = useIntl();
  return (
    <section className="section w-[100%] h-[100%] xl:h-[100vh] bg-black flex justify-center items-center">
      <div className="max-w-screen-xl my-0 mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-8">
        <div className="w-full sm:w-[60%] text-start">
          <h3>
            <FormattedMessage id="page.home.section7.h" />
          </h3>
          <p>
            <FormattedMessage id="page.home.section7.p" />
          </p>
        </div>
        <div className="w-full sm:w-[40%] m-auto flex justify-center items-center">
          <Image src={img6} width={600} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section7;
