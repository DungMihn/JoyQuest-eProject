import { RoundIconButton } from "./Button";
import { useState } from "react";
import React from "react";

interface CardProps {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  defaultIcon: JSX.Element;
}

export const OurTeamCard: React.FC<CardProps> = ({
  id,
  name,
  description,
  imageUrl,
  defaultIcon,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="w-full md:w-[300px] lg:w-[380px] lg:h-[350px] overflow-hidden rounded-xl">
        <div
          className="relative transition-all cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-full duration-500 ease-in-out hover:scale-105 h-auto md:h-[200px] object-cover">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="absolute right-3 -bottom-[140px] z-10 rounded-b-xl">
            <RoundIconButton isHovered={isHovered} defaultIcon={defaultIcon} />
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6 ">
        <h2 className="text-[13px] md:text-xl lg:text-[23px] mb-1">{name}</h2>
        <p className="text-xs md:text-[17px] lg:text-[19px] text-[#484848] font-outfit">
          {description}
        </p>
      </div>
    </div>
  );
};
