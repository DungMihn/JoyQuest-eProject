import React, { useState } from "react";
import { FaPlay } from "react-icons/fa"; // Import icon từ react-icons
import ReactDOM from "react-dom";

const VideoPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Icon Video */}
      <div
        className="w-[90px] h-[90px] text-center text-white cursor-pointer p-3 border-solid border-2 hover:border-white border-greenCustom rounded-full flex items-center justify-center"
        onClick={openModal}
      >
        <FaPlay className="text-[#fff]" />
      </div>

      {/* Modal hiển thị video khi click */}
      {isOpen &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={closeModal} // Click vào ngoài modal để đóng
          >
            <div className="relative bg-white rounded-lg max-w-3xl w-full">
              <button
                className="absolute top-2 right-2 text-white text-xl"
                onClick={closeModal}
              >
                ✖
              </button>
              <video width="100%" controls autoPlay>
                <source
                  src="https://duruthemes.com/demo/html/cappa/camping.webm"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default VideoPlayer;
