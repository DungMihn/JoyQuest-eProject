import { FaRegCalendarDays } from "react-icons/fa6";
import { FC } from "react";

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  onClick?: () => void;
}

export const BlogCard: FC<BlogCardProps> = ({
  title,
  description,
  imageUrl,
  date,
  onClick,
}) => {
  return (
    <div
      className="w-[380px] h-[450px] rounded-xl relative shadow-md transition-all duration-500 ease-in-out hover:shadow-lg hover:translate-y-[-5px]"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-[380px] h-[200px] rounded-t-xl object-cover"
      />
      <div className="flex justify-between items-center mt-5 mx-5">
        <div className="flex items-center rounded-full w-[130px] p-2 bg-[#f3f5f4] mx-3 mt-3 ">
          <FaRegCalendarDays size={12} className="text-orangeCustom mx-3" />
          <span className="text-gray-600 font-outfit text-xs">{date}</span>
        </div>
      </div>

      <div className="p-4 px-7">
        <h2 className="text-lg mb-2">{title}</h2>
        <p className="text-[#484848] text-[17px] font-outfit">{description}</p>
      </div>
    </div>
  );
};
