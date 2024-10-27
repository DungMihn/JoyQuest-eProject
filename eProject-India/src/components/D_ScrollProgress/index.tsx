import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const D_ScrollProgress: React.FC = () => {
  const [scroll, setScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const pathLength = 307.919;

  const updateScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / windowHeight;
    const progress = pathLength - scrollFraction * pathLength;
    setScroll(progress);

    // Show the button only after scrolling 10%
    setIsVisible(scrollFraction > 0.1);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-14 right-4 cursor-pointer transform transition-all duration-300 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 "
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        className="w-12 h-12 transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          className="stroke-current text-gray-300"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          className="stroke-current text-orange-500 hover:text-red-700"
          strokeWidth="3"
          strokeDasharray={pathLength}
          strokeDashoffset={scroll}
          fill="none"
        />
        <foreignObject x="35%" y="35%" width="50" height="50">
          <FaAngleUp className="text-orange-400 text-3xl hover:text-red-700" />
        </foreignObject>
      </svg>
    </div>
  );
};

export default D_ScrollProgress;
