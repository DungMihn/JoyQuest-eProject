import { Parallax } from "react-parallax";
import Itinerary from "../components/Itinerary";
import PromoVideo from "../components/PromoVideo";
import React from "react";

const ItineraryPage = () => {
  return (
    <div>
      {/* Parallax Section */}
      <Parallax
        bgImage="https://duruthemes.com/demo/html/bycamp/img/slider/08.jpg"
        bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
        strength={500}
      >
        <div className="h-[300px] sm:h-[400px] md:h-[480px] flex justify-center items-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Itineraries
          </h1>
        </div>
      </Parallax>

      {/* Itinerary Section */}
      <div className="px-12 md:px-8 lg:px-[10%]">
        <Itinerary />
      </div>

      {/* Promo Video Section */}
      <div className="">
        <PromoVideo />
      </div>
    </div>
  );
};

export default ItineraryPage;
