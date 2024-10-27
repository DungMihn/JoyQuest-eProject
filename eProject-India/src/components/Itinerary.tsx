import { ItineraryCard } from "./ItineraryCard";
import { itineraries } from "../../data/itineraries";

const Itinerary = () => {
  return (
    <div className="flex justify-center items-center mt-20 mb-32">
      <div className="grid md:grid-cols-2 md:gap-4 gap-y-20 lg:gap-y-24  justify-center items-center ">
        {itineraries.map((itinerary, index) => (
          <div key={index} className=" flex justify-center items-center ">
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
