import React, { useState } from "react";
import {
  GiCampingTent,
  GiCampfire,
  GiBackpack,
  GiForestCamp,
} from "react-icons/gi";

import { CustomButton } from "./Button";
import { useNavigate } from "react-router-dom";

interface ItineraryCardProps {
  title: string;
  price: string;
  imageUrl: string;
  onButtonClick?: () => void;
  isFocus: boolean;
  id: number;
}

export const ItineraryCard: React.FC<ItineraryCardProps> = ({
  title,
  price,
  imageUrl,
  isFocus,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/itinerary/${id}`);
  };
  return (
    <div
      className="w-full sm:w-[450px] md:w-[500px] lg:w-full relative rounded-lg shadow-md transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
            isHovered ? "scale-105" : ""
          }`}
        />
      </div>

      {isFocus && (
        <div className="absolute bottom-[-50px] left-5 right-5 bg-white px-2 md:px-6 py-2 md:py-5 shadow-lg flex flex-col md:flex-row justify-between rounded-lg">
          <div>
            <h2 className="text-[11px] text-center md:text-left md:text-lg">
              {title}
            </h2>

            <div className="hidden md:flex space-x-2 mt-2 text-[12px] md:text-[24px]">
              <GiCampingTent className="text-greenCustom" />
              <GiCampfire className="text-greenCustom" />
              <GiBackpack className="text-greenCustom" />
              <GiForestCamp className="text-greenCustom" />
            </div>
          </div>

          <div className="flex justify-between items-center md:gap-3 mt-2 md:mt-4 md:mt-0">
            <CustomButton text="Details" onClick={handleButtonClick} />
            <div className="flex flex-col text-xs md:text-base">
              <span className="text-[9px] md:text-[24px]">{price}</span>
              <span className="text-[8px] md:text-base font-outfit">
                per day
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
