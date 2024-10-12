import React, { useState } from 'react';
import { FaCirclePlay } from 'react-icons/fa6';

const D_IndoorPage: React.FC = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleCloseVideo = () => {
    setIsVideoVisible(false);
  };

  return (
    <div>
      {/* Section 1: Banner Header */}
      <div
        className="relative h-96 bg-fixed bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: 'url("https://todaysparent.mblycdn.com/tp/resized/2017/01/1534x862/5-fun-indoor-games-for-kids-1.jpg")' }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full flex justify-center items-center">
          <h3 className="text-5xl text-white">Indoor Activities</h3>
        </div>
      </div>

      {/* Middle Section: ProductCard */}
      <div className="font-outfit my-8 flex justify-center">
        PHẦN SẢN PHẨM INDOOR
      </div>

      {/* Section 2: Video Section */}
      <section
        className="relative h-96 bg-fixed bg-center bg-cover flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url("https://duruthemes.com/demo/html/bycamp/img/slider/10.jpg")' }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
          <h3 className="text-3xl text-white mb-4">Indoor Promo Video</h3>

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
              src="https://www.youtube.com/embed/example_video?autoplay=1"
              title="Indoor Promo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default D_IndoorPage;
