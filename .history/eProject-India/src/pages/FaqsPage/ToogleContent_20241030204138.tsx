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
    <>
      <div
        className={` border-[1px] border-black rounded-xl hover:cursor-pointer overflow-hidden relative ${
          openIndexes ? "active" : "p-3"
        }`}
        onClick={toggleContent}
      >
        <div
          className={`title flex justify-between ${
            openIndexes ? "pb-3 p-4" : ""
          }`}
        >
          <div className={`text-lg ${openIndexes ? "top-2" : "top-3"}`}>
            {title}
          </div>
          <div
            className={`${
              openIndexes
                ? "bg-white p-4 text-black w-12 h-12 rounded-full"
                : "bg-orange-400 text-white w-12 h-12 p-4 rounded-full"
            }`}
          >
            <FaArrowRight
              className={`${openIndexes ? "rotate-90" : ""}`}
              size={15}
            />
          </div>
        </div>
        <div className={`${openIndexes ? "visible" : "hidden"}`}>
          <p className="overflow-hidden p-4 bg-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            perspiciatis veritatis delectus sequi quidem. Iure repellendus qui
            quos amet voluptatibus quae alias rerum ratione quidem earum, maxime
            mollitia at perspiciatis.
          </p>
        </div>
      </div>
    </>
  );
};

export default ToogleContent;
