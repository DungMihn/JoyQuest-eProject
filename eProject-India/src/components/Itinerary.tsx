import { ItineraryCard } from "./ItineraryCard";
import { itineraries } from "../../data/itineraries";

const Itinerary = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mt-20 mb-32">
      <div className="grid grid-cols-2 gap-4 justify-center items-center ">
        {itineraries.map((itinerary, index) => (
          <div
            key={index}
            className="w-[546px] h-[365px] flex justify-center items-center"
          >
            <ItineraryCard
              key={index}
              title={itinerary.title}
              imageUrl={itinerary.imageUrl}
              price={itinerary.price}
              isFocus={true}
              id={itinerary.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
