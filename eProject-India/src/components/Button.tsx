import { AiTwotoneCalendar } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import { GiForestCamp } from "react-icons/gi";
import { RiGameFill } from "react-icons/ri";

interface ButtonProps {
  text?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}
//Button chung nền cam sang xanh
export const CustomButton: React.FC<ButtonProps> = ({
  text,
  icon,
  onClick,
}) => {
  return (
    <button
      className="flex items-center justify-center bg-[#f2682a] text-[#fff] p-[5px] font-medium md:p-3 lg:py-[15px] lg:px-[40px] rounded-full transition-transform hover:-translate-y-1 duration-300 hover:bg-greenCustom hover:text-white  border-none text-[10px] md:text-[13px] lg:text-[15px]"
      onClick={onClick}
    >
      <div className="flex gap-3">
        {icon}
        {text}
      </div>
    </button>
  );
};
//Button chung nền xanh sang cam
export const CustomButton2: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="flex items-center justify-center bg-greenCustom text-[#fff] px-4 py-2 font-medium md:py-[15px] md:px-[40px] rounded-full transition-transform duration-300 hover:bg-[#f2682a] hover:text-white hover:-translate-y-1 border-none text-[12px] md:text-[15px]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
//Button chung cam sang trắng
export const CustomButton3: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="flex items-center justify-center bg-[#f2682a] text-[#fff] font-medium py-[15px] px-[40px] rounded-full transition-transform duration-300 hover:bg-[#fff] hover:text-black hover:-translate-y-1 border-none text-[15px]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

//Button Booking
export const ButtonBooking: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-[#f2682a] text-[#fff] font-medium lg:py-[12px] py-2 px-3 lg:px-[24px] rounded-full transition-transform duration-300 hover:bg-[#5b9a42] hover:text-white hover:-translate-y-1 border-none md:text-[9px] text-[7px] lg:text-[15px]"
    >
      <AiTwotoneCalendar className="mr-2" />
      Book Now
    </button>
  );
};

//Button Card
interface RoundIconButtonProps {
  defaultIcon?: JSX.Element;
  isHovered?: boolean;
}

export const RoundIconButton: React.FC<RoundIconButtonProps> = ({
  defaultIcon,
  isHovered,
}) => {
  return (
    <div
      className={` w-[42px] h-[42px] lg:w-[60px] lg:h-[60px] rounded-full flex items-center justify-center transition-all duration-300 ${
        isHovered ? "bg-orangeCustom" : "bg-greenCustom"
      }`}
    >
      {isHovered ? (
        <>
          <MdArrowOutward size={30} className="text-[#fff]" />
        </>
      ) : (
        <>{defaultIcon}</>
      )}
    </div>
  );
};
//Button arow
export const ButtonArrow: React.FC<RoundIconButtonProps> = ({ isHovered }) => {
  return (
    <div
      className={`w-[42px] h-[42px] rounded-full flex items-center justify-center transition-all duration-1000 transform ${
        isHovered ? "bg-greenCustom rotate-45" : "bg-orangeCustom"
      }`}
    >
      <>
        <MdArrowOutward size={20} className="text-[#fff]" />
      </>
    </div>
  );
};
//Around button
export const RoundIconButton1: React.FC<RoundIconButtonProps> = ({
  defaultIcon,
}) => {
  return (
    <div
      className={`w-[42px] h-[42px] rounded-full flex items-center justify-center transition-all duration-300 text-[#fff] bg-orangeCustom  hover:bg-greenCustom
      }`}
    >
      <>{defaultIcon}</>
    </div>
  );
};

//Around not button
export const RoundIcon = () => {
  return (
    <div
      className={`w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all duration-300 text-[#fff] bg-orangeCustom
      }`}
    >
      <>
        <GiForestCamp size={30} />
      </>
    </div>
  );
};

//Button Logo
export const ButtonLogo = () => {
  return (
    <div
      className={`w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-300 text-[#fff] bg-greenCustom
      }`}
    >
      <>
        <RiGameFill size={25} />
      </>
    </div>
  );
};
