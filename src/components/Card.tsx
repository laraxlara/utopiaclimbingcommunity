import React from "react";
import Image from "next/image";
import { MdOutlineKingBed } from "react-icons/md";
import roomImg1 from "../../public/images/room1.jpeg";

type Props = {
  // src: string;
  alt: string;
  name: React.ReactNode;
  description1: React.ReactNode;
  description2: React.ReactNode | undefined;
};

const Card = ({ alt, name, description1, description2 }: Props) => {
  return (
    <div className="max-w-xl h-[500px] w-full rounded overflow-hidden shadow-lg flex flex-col justify-center items-center">
      <Image
        src={roomImg1}
        alt={alt}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="w-full h-[200px] py-8 border-2 border-white flex flex-col">
        <h4 className={`text-white text-center text-[2.4rem] overflow-y-hidden ${description2 ? 'mb-4' :'mb-[3rem]'}`}>{name}</h4>
        <div className="text-white flex justify-start items-center text-[1rem] overflow-y-hidden">
          <div className="text-[4rem] px-6">
            <MdOutlineKingBed />
          </div>
          <p>{description1}</p>
        </div>
        {description2 ? (
          <div className="text-white flex justify-start items-center text-[1rem] overflow-y-hidden">
            <div className="text-[4rem] px-6">
              <MdOutlineKingBed />
            </div>
            <p>{description2}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
