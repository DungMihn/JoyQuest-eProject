import React, { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import "../About/index.css"

const Active: React.FC = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleCloseVideo = () => {
    setIsVideoVisible(false);
  };

  return (
    <div>
      {/* Section 2: Video Section */}
      <section className="relative h-96 py-0 bg-fixed bg-center bg-cover flex flex-col justify-center items-center H-img2">
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center ">
          <h3 className="font-otomanopee text-3xl text-white mb-4">
            byCamp Promo Video
          </h3>

          <button
            className="bg-white p-2 rounded-full hover:bg-[#5b9a42]"
            onClick={() => setIsVideoVisible(true)}
          >
            <FaCirclePlay size={90} />
          </button>
        </div>
      </section>

      {/* Modal for Video */}
      {isVideoVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl">
            <span
              className="absolute top-2 right-2 text-white text-3xl cursor-pointer"
              onClick={handleCloseVideo}
            >
              &times;
            </span>
            <iframe
              className="w-full h-96"
              src="https://www.youtube.com/embed/mtc2IHdyz4s?autoplay=1"
              title="Promo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Active;
