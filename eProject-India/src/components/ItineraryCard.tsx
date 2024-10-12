import React, { useState } from "react";
import {
  GiCampingTent,
  GiCampfire,
  GiBackpack,
  GiForestCamp,
} from "react-icons/gi";

import { CustomButton } from "./Button";

interface ItineraryCardProps {
  title: string;
  price: string;
  imageUrl: string;
  onButtonClick?: () => void;
}

export const ItineraryCard: React.FC<ItineraryCardProps> = ({
  title,
  price,
  imageUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-[586px] relative rounded-lg shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={imageUrl}
          alt={title}
          className={`object-cover transition-transform duration-500 ease-in-out ${
            isHovered ? "scale-105" : ""
          }`}
        />
      </div>

      <div className="absolute bottom-[-50px] left-5 right-5 bg-white px-6 py-5 shadow-lg flex justify-between rounded-lg">
        <div>
          <h2 className="text-lg">{title}</h2>

          <div className="flex space-x-2 mt-2">
            <GiCampingTent className="text-greenCustom" size={20} />
            <GiCampfire className="text-greenCustom" size={20} />
            <GiBackpack className="text-greenCustom" size={20} />
            <GiForestCamp className="text-greenCustom" size={20} />
          </div>
        </div>

        <div className="flex justify-between items-center gap-3 mt-4">
          <CustomButton text="Details" />
          <div className="flex flex-col">
            <span className="text-[24px]">{price}</span>
            <span className="font-outfit">per day</span>
          </div>
        </div>
      </div>
    </div>
  );
};
