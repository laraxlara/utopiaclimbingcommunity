import React from "react";
import EvenCard from "@/components/EventCard";
import { FormattedMessage } from "react-intl";

import eventImg1 from "../../public/images/1 - Copy.jpeg";
import eventImg2 from "../../public/images/e2.jpg";
import eventImg3 from "../../public/images/e3.jpg";

const Section4 = () => {
  const event1 = {
    src: eventImg1,
    alt: "Utopia",
    name: "Rti Utopia Fest",
    date: <FormattedMessage id="page.home.event.date.one" />,
    description: <FormattedMessage id="page.home.event.one" />,
  };
  // const event2 = {
  //   src: eventImg2,
  //   alt: "Hata Yin Flow",
  //   name: "Hata Yin Flow - Yoga retreat",
  //   date: <FormattedMessage id="page.home.event.date.two" />,
  //   description: <FormattedMessage id="page.home.event.two" />,
  // };
  // const event3 = {
  //   src: eventImg3,
  //   alt: "Yoga Retreat",
  //   name: "VIDIM TE - Yoga Retreat",
  //   date: <FormattedMessage id="page.home.event.date.three" />,
  //   description: <FormattedMessage id="page.home.event.three" />,
  // };

  return (
    <section
      id="events-section"
      className="section max-w-screen-2xl xl:h-full bg-black flex justify-center items-center overflow-y-hidden"
    >
      <div className="max-w-screen-xl my-0 mx-auto flex flex-col justify-center items-center">
        <h3 className="text-[4rem] xl:text-[6rem]">
          <FormattedMessage id="page.home.event.h" />
        </h3>
        <div className="flex flex-col xl:flex-row gap-12">
          <EvenCard {...event1} />
        </div>
      </div>
    </section>
  );
};

export default Section4;
