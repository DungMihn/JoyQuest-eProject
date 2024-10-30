import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { itineraries } from "../../data/itineraries";

const ItineraryDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const itineraryId = parseInt(id || "0", 10);
  const itinerary = itineraries.find(
    (itinerary) => itinerary.id === itineraryId
  );

  if (!itinerary) {
    return <p>Itinerary not found.</p>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      {/* Thumbnail Section */}

      <div
        className="relative h-60 md:h-96 bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://duruthemes.com/demo/html/bycamp/img/slider/08.jpg")',
        }}
      >
        <div className="flex w-full h-full justify-center items-center text-center text-white bg-black bg-opacity-30 ">
          <h1 className="text-4xl font-bold">{itinerary.title}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-6 container px-[10%] p-6 text-[18px]">
        <div className="mb-5">
          <span className="text-2xl">Location:</span>
          <span className="font-outfit text-xl ml-2 mb-5">
            {itinerary.location}
          </span>
        </div>
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
                    className="col-span-1 md:col-span-2 overflow-hidden rounded-lg"
                    key={img.id}
                  >
                    <img
                      src={img.image}
                      alt={`${itinerary.title} ${img.id}`}
                      className="w-full rounded-lg h-full object-cover transition-transform duration-700 transform hover:scale-110"
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetails;
