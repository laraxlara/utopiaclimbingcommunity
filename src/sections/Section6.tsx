import React from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import footerImg from "../../public/images/footer.jpeg";

const Section6 = () => {
  return (
    <section
      id="contact-section"
      className="section w-full h-[100%] xl:h-[100vh] bg-black flex justify-center items-center overflow-y-hidden"
    >
      <div className="max-w-screen-xl my-0 mx-auto py-8 lg:py-16 px-4 max-w-screen-md flex flex-col xl:flex-row justify-between items-center gap-10 overflow-y-hidden">
        <div className="max-w-4xl mb-10 xl:mb-0">
          <ContactForm />
        </div>
        <div className="max-w-3xl">
          <Image src={footerImg} alt="Man resting on the deck surrounded by the woods" />
        </div>
      </div>
    </section>
  );
};

export default Section6;
