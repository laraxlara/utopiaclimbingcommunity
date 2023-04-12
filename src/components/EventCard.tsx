import React from "react";
import Image from "next/image";
import { MdOutlineKingBed, MdOutlineSingleBed } from "react-icons/md";

type Props = {
  src: string;
  alt: string;
  name: string;
  date: number | string;
  description: string;
};

const Card = ({ src, alt, name, date, description }: Props) => {
  return (
    <div className="max-w-2xl w-full xl:w-[390px] rounded overflow-hidden shadow-lg flex flex-col">
      <Image src={src} alt={alt} style={{ width: "100%", height: "auto" }} />
      <div className="w-full h-[290px] border-2 px-4 border-white overflow-y-hidden text-start">
        <h4 className="text-white text-center text-[2rem]">{name}</h4>
        <h4 className="text-white text-center text-[2rem]">{date}</h4>
        <div className="text-white">
          <p className="text-[1.6rem]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
