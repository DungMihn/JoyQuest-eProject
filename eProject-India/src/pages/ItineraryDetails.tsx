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
    <div>
      {/* Thumbnail Section */}
      <div
        className="h-[382px] relative"
        style={{
          backgroundImage: `url(https://duruthemes.com/demo/html/bycamp/img/slider/08.jpg)`, // You might want to replace this with itinerary.imageUrl
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full h-full flex justify-center items-center px-4">
          <span className="text-[30px] md:text-[45px] z-20 text-[#fff] text-center">
            {itinerary.title}
          </span>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content Section */}
      <div className="mt-6 container mx-auto px-4 md:px-[10%] p-6 text-[18px]">
        <div>
          <h2 className="text-2xl mb-5">About {itinerary.title}</h2>
          <p className="font-outfit mb-5">{itinerary.content}</p>
        </div>

        {/* Suggested Activities */}
        <div className="mt-10">
          <h2 className="text-2xl mb-3">Suggested Activities</h2>
          <ul className="list-disc pl-5">
            {itinerary.suggestedActivities.map((activity, index) => (
              <li className="font-outfit" key={index}>
                {activity}
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Images */}
        <div className="mt-10">
          <h2 className="text-2xl mb-10">Additional Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {itinerary.images.map((img, index) => {
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
                    className="col-span-2 md:col-span-3 overflow-hidden rounded-lg"
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
