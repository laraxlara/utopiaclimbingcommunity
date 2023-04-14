import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: string | StaticImageData;
  alt: string;
  name: string;
  date: number | string | React.ReactNode;
  description: React.ReactNode | string;
};

const Card = ({ src, alt, name, date, description }: Props) => {
  return (
    <div className="max-w-2xl w-full xl:w-[390px] rounded overflow-hidden shadow-lg flex flex-col">
      <Image src={src} alt={alt} style={{ width: "100%", height: "auto" }} />
      <div className="w-full h-[290px] border-2 border-white overflow-y-hidden mt-6">
        <h4 className="text-white text-center text-[2rem]">{name}</h4>
        <h4 className="text-white text-center text-[2rem]">{date}</h4>
        <div className="text-white">
          <p className="text-[1.6rem] text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
