import { RoundIconButton } from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Subtract from "/icons/HD_icon/Subtract.svg";

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  defaultIcon: JSX.Element;
}

export const ActivityCard: React.FC<CardProps> = ({
  id,
  title,
  description,
  imageUrl,
  defaultIcon,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/activity/${id}`);
  };

  return (
    <div
      className="w-[380px] h-[450px] relative transition-all duration-500 ease-in-out hover:translate-y-[-8px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        backgroundImage: `url(${Subtract})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
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
