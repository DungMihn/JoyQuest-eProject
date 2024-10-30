import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface Ttitle {
  title: string;
}

const ToogleContent: React.FC<Ttitle> = ({ title }) => {
  const [openIndexes, setOpenIndexes] = React.useState(false);
  const toggleContent = () => {
    setOpenIndexes(!openIndexes);
  };

  return (
    <div
      className={`border-[1px] border-greenCustom rounded-2xl hover:cursor-pointer overflow-hidden relative transition-all duration-300 ${
        openIndexes ? "active" : "p-3"
      }`}
      onClick={toggleContent}
    >
      <div
        className={`title flex justify-between ${
          openIndexes ? "pb-3 p-4" : ""
        }`}
      >
        <div
          className={`text-[17px] flex items-center ${
            openIndexes ? "top-2" : "top-3"
          }`}
        >
          {title}
        </div>
        <div
          className={`${
            openIndexes
              ? "bg-white p-4 text-black w-12 h-12 rounded-full"
              : "bg-orangeCustom text-white w-12 h-12 p-4 rounded-full"
          }`}
        >
          <FaArrowRight
            className={`${
              openIndexes ? "rotate-90" : ""
            } transition-transform duration-300`}
            size={15}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${
          openIndexes ? "max-h-60" : "max-h-0"
        }`}
      >
        <p className="p-4 bg-white font-outfit transition-opacity duration-700 opacity-100">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
          perspiciatis veritatis delectus sequi quidem. Iure repellendus qui
          quos amet voluptatibus quae alias rerum ratione quidem earum, maxime
          mollitia at perspiciatis.
        </p>
      </div>
    </div>
  );
};

export default ToogleContent;
