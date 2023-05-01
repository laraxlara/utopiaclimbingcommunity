import React from "react";
import EvenCard from "@/components/EventCard";
import { FormattedMessage } from "react-intl";

import eventImg1 from "../../public/images/event1.jpeg";
import eventImg2 from "../../public/images/event2.jpeg";
import eventImg3 from "../../public/images/event3.jpeg";

const Section4 = () => {

  const event1 = {
    src: eventImg1,
    alt: "The blooming of a lotus event",
    name: "THE BLOOMING OF A LOTUS",
    date: "19 - 21 Maj",
    description: <FormattedMessage id="page.home.event.one" />,
  };
  const event2 = {
    src: eventImg2,
    alt: "Sound healing with Peter Hess event",
    name: "SOUND HEALING WITH PETER HESS",
    date: "26 - 28 Maj",
    description: <FormattedMessage id="page.home.event.two" />,
  };
  const event3 = {
    src: eventImg3,
    alt: "Utopia Forest Party event",
    name: "UTOPIA FOREST PARTY",
    date: <FormattedMessage id="page.home.event.date" />,
    description: "",
  };

  return (
    <section
      id="events-section"
      className="section w-[100%] h-[100%] xl:h-[100vh] bg-black flex justify-center items-center overflow-y-hidden"
    >
      <div className="max-w-screen-xl my-0 mx-auto flex flex-col justify-center items-center">
        <h3 className="text-[4rem] xl:text-[6rem]">
          <FormattedMessage id="page.home.event.h" />
        </h3>
        <div className="flex flex-col xl:flex-row gap-12">
          <EvenCard {...event1} />
          <EvenCard {...event2} />
          <EvenCard {...event3} />
        </div>
      </div>
    </section>
  );
};

export default Section4;
