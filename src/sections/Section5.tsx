import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import img51 from "../../public/images/51.png";
import img52 from "../../public/images/52.png";
import img53 from "../../public/images/53.png";

type Props = {};

function Section5({}: Props) {
  const { locales } = useRouter();

  const intl = useIntl();
  return (
    <section className="section w-full h-[100%] xl:h-[100vh] bg-black flex justify-center items-center">
      <div className="max-w-screen-xl my-0 mx-auto px-6 flex flex-col justify-center items-center">
        <h3 className="text-[5rem]">
          <FormattedMessage id="page.home.section5.h" />
        </h3>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          <Image src={img51} alt="" width={350} height={300} />
          <Image src={img52} alt="" width={350} height={300} />
          <Image src={img53} alt="" width={350} height={300} />
        </div>
      </div>
    </section>
  );
}

export default Section5;