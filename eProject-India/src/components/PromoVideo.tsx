import React from "react";
import { Parallax } from "react-parallax";
import IconVideo from "./IconVideo";

const PromoVideo = () => {
  return (
    <>
    
      <Parallax
        bgImage="https://duruthemes.com/demo/html/bycamp/img/slider/01.jpg"
        strength={500} // Điều chỉnh cường độ hiệu ứng
      >
        
          <div className="flex justify-center text-center text-white py-[200px] bg-black bg-opacity-50 ">
            <h1 className="text-4xl font-bold">
              JoyQuest Promo <p>Video</p>
              <div className="flex justify-center items-center pt-4">
                <IconVideo />
              </div>
            </h1>
          </div>
    
      </Parallax>
      
    </>
  );
};

export default PromoVideo;
