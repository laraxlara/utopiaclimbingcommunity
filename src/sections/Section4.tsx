import React from "react";
import Card from "@/components/Card";
import { FormattedMessage } from "react-intl";

import roomImg1 from "../../public/images/room1.jpeg";
import roomImg2 from "../../public/images/room2.jpg";
import roomImg3 from "../../public/images/room3.jpeg";

const Section4 = () => {
  const room1 = {
    src: roomImg1,
    alt: "Rustic cozy single and double bedroom",
    name: <FormattedMessage id="page.home.room.one" />,
    description2: <FormattedMessage id="page.home.room.one.desc" />,
    description1: <FormattedMessage id="page.home.room.two.desc" />,
  };
  const room2 = {
    src: roomImg2,
    alt: "Rustic cozy three bed room",
    name: <FormattedMessage id="page.home.room.three" />,
    description1: <FormattedMessage id="page.home.room.three.desc" />,
    description2: undefined,
  };
  const room3 = {
    src: roomImg3,
    alt: "Rustic cozy four bed room",
    name: <FormattedMessage id="page.home.room.four" />,
    description1: <FormattedMessage id="page.home.room.four.desc" />,
    description2: undefined,
  };

  return (
    <section className="section w-[100%] h-[100%] xl:h-[100vh] bg-black flex justify-center items-center overflow-y-hidden">
      <div className="max-w-screen-xl my-0 mx-auto flex flex-col justify-center items-center overflow-y-hidden">
        <h3 className="text-[4rem] sm:text-[4rem] xl:text-[6rem] px-6">
          <FormattedMessage id="page.home.room.h" />
        </h3>
        <div className="flex flex-col xl:flex-row gap-12">
          <Card {...room1} />
          <Card {...room2} />
          <Card {...room3} />
        </div>
      </div>
    </section>
  );
};

export default Section4;
