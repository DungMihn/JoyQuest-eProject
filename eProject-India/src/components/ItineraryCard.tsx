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
  id:number
}

export const ItineraryCard: React.FC<ItineraryCardProps> = ({
  title,
  price,
  imageUrl,
  isFocus,
  id
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/itinerary/${id}`);
  };
  return (
    <div
      className=" relative rounded-lg shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className={`object-cover transition-transform duration-500 ease-in-out ${
            isHovered ? "scale-105" : ""
          }`}
        />
      </div>

      {isFocus && (<div className="absolute bottom-[-50px] left-5 right-5 bg-white px-6 py-5 shadow-lg flex justify-between rounded-lg ">
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
          <CustomButton text="Details" onClick={handleButtonClick} />
          <div className="flex flex-col">
            <span className="text-[24px]">{price}</span>
            <span className="font-outfit">per day</span>
          </div>
        </div>
      </div>)}
      
    </div>
  );
};

