import { useState, useEffect } from "react";
import { ItineraryCard } from "../components/ItineraryCard";
import PromoVideo from "../components/PromoVideo";
import { itineraries } from "../../data/itineraries";
import { IoIosArrowDown } from "react-icons/io";

const ItineraryPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [filteredItineraries, setFilteredItineraries] = useState(itineraries);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update filtered itineraries based on selected location
  useEffect(() => {
    if (selectedLocation === "All") {
      setFilteredItineraries(itineraries);
    } else {
      setFilteredItineraries(
        itineraries.filter((item) => item.location === selectedLocation)
      );
    }
  }, [selectedLocation]);

  // Unique locations for the dropdown
  const locations = [
    "All",
    ...new Set(itineraries.map((item) => item.location)),
  ];

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Parallax Section */}
      <div
        className="relative h-60 md:h-96 bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://duruthemes.com/demo/html/bycamp/img/slider/08.jpg")',
        }}
      >
        <div className="flex w-full h-full justify-center items-center text-center text-white bg-black bg-opacity-20">
          <h1 className="text-4xl font-bold">Itineraries</h1>
        </div>
      </div>

      {/* Custom Location Filter */}
      <div className="px-12 md:px-8 lg:px-[10%] py-8">
        <label className="mr-4 text-xl text-black">Location:</label>
        <div className="relative inline-block">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="px-10 py-2 border border-gray-300 rounded-md shadow-md cursor-pointer bg-white text-gray-700 font-medium flex items-center justify-between gap-3"
          >
            <span>{selectedLocation}</span>
            <IoIosArrowDown
              className={`transform transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {isOpen && (
            <div className="absolute z-10 mt-2 w-[200px] bg-white border border-gray-200 rounded-md shadow-lg">
              {locations.map((location) => (
                <div
                  key={location}
                  onClick={() => handleLocationSelect(location)}
                  className="px-4 py-2 hover:text-orangeCustom cursor-pointer text-gray-700"
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="px-12 md:px-8 lg:px-[10%] flex justify-center items-center mt-10 mb-32">
        <div className="grid md:grid-cols-2 md:gap-4 gap-y-20 lg:gap-y-24 justify-center items-center">
          {filteredItineraries.length ? (
            filteredItineraries.map((item) => (
              <div className="flex justify-center items-center" key={item.id}>
                <ItineraryCard
                  title={item.title}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  isFocus={true}
                  id={item.id}
                />
              </div>
            ))
          ) : (
            <p>No itineraries available for the selected location.</p>
          )}
        </div>
      </div>

      {/* Promo Video Section */}
      <div>
        <PromoVideo />
      </div>
    </div>
  );
};

export default ItineraryPage;
