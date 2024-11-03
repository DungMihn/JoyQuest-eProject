import { FaRegCalendarDays } from "react-icons/fa6";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export const BlogCard: FC<BlogCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  date,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div
      key={id}
      className="w-full md:w-[300px] lg:w-[380px] bg-[#fff] h-auto lg:h-[450px] rounded-xl relative shadow-md transition-all duration-500 ease-in-out hover:shadow-lg hover:translate-y-[-5px] cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[130px] md:h-[200px] rounded-t-xl object-cover"
      />
      <div className="flex justify-between items-center mt-5 mx-5">
        <div className="flex items-center rounded-full w-auto md:w-[130px] p-2 bg-[#f3f5f4] md:mx-3 md:mt-3">
          <FaRegCalendarDays size={12} className="text-orangeCustom mx-3" />
          <span className="text-gray-600 font-outfit text-xs">{date}</span>
        </div>
      </div>
      <div className="p-4 px-7">
        <h2 className="text-[12px] md:text-lg mb-2">{title}</h2>
        <p className="text-[10px] md:text-[15px] lg:text-[17px] text-[#484848] font-outfit">
          {description}
        </p>
      </div>
    </div>
  );
};
