import { RoundIconButton } from "./Button";
import { useState } from "react";
import Subtract from "/icons/HD_icon/Subtract.svg";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  defaultIcon: JSX.Element;
  onClick?: () => void;
}

export const ActivityCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  defaultIcon,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-[380px] h-[450px] relative transition-all duration-500 ease-in-out hover:translate-y-[-8px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: `url(${Subtract})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-[380px] h-[200px] rounded-t-xl object-cover"
      />

      <div className="p-6">
        <h2 className="text-[23px] mb-2">{title}</h2>
        <p className="text-[#484848] text-[19px] font-outfit">{description}</p>
      </div>

      <div className="absolute bottom-[-8px] right-[-3px] z-10">
        <RoundIconButton isHovered={isHovered} defaultIcon={defaultIcon} />
      </div>
    </div>
  );
};
