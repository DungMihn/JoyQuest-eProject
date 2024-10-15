import React from "react";
import { useParams } from "react-router-dom";
import { itineraries } from "../../data/itineraries"; // Adjust the path as needed

const ItineraryDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const itineraryId = parseInt(id || "0", 10);
  const itinerary = itineraries.find(
    (itinerary) => itinerary.id === itineraryId
  );

  if (!itinerary) {
    return <p>Itinerary not found.</p>;
  }

  return (
    <div className="">
      {/* Thumbnail Section */}
      <div
        className="h-[382px] relative"
        style={{
          backgroundImage: `url(https://duruthemes.com/demo/html/bycamp/img/slider/08.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-[1000px] h-full px-[10%] top-1/3 z-20 items-center">
          <span className="text-[45px] z-20 text-[#fff]">
            {itinerary.title}
          </span>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content Section */}
      <div className="mt-6 container px-[10%] p-6 text-[18px]">
        <div>
          <h2 className="text-2xl mb-5">About {itinerary.title}</h2>
          <p className="font-outfit mb-5">{itinerary.content}</p>
        </div>

        {/* Suggested Activities */}
        <div className="mt-10">
          <h2 className="text-2xl mb-3">Suggested Activities</h2>
          <ul className="list-disc pl-5">
            {itinerary.suggestedActivities.map((activity, index) => (
              <li className=" font-outfit" key={index}>
                {activity}
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Images */}
        <div className="mt-10">
          <h2 className="text-2xl mb-10">Additional Images</h2>
          <div className="grid grid-cols-2 gap-10 mr-[20%]">
            {itinerary.images.map((img, index) => {
              // For the top two images
              if (index < 2) {
                return (
                  <div className="overflow-hidden rounded-lg" key={img.id}>
                    <img
                      src={img.image}
                      alt={`${itinerary.title} ${img.id}`}
                      className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110"
                    />
                  </div>
                );
              }
              if (index === 2) {
                return (
                  <div
                    className="col-span-2 overflow-hidden rounded-lg"
                    key={img.id}
                  >
                    <img
                      src={img.image}
                      alt={`${itinerary.title} ${img.id}`}
                      className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110"
                    />
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetails;
