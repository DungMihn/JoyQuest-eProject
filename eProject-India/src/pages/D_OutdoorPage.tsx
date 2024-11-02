import React, { useState } from "react";
import IconVideo from "../components/IconVideo";
import { ActivityCard } from "../components/ActivityCard";
import Pagination from "../components/D_Pagination";
import { activities } from "../../data/activities";

const OutdoorActivities = activities.filter((activity) =>
  activity.categories.includes("Outdoor Games")
);
const ITEMS_PER_PAGE = 6;

const D_OutdoorPage: React.FC = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleCloseVideo = () => {
    setIsVideoVisible(false);
  };

  {
    /* Pagination Logic*/
  }
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(OutdoorActivities.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = OutdoorActivities.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Section 1: Banner Header */}
      <div
        className="relative h-60 md:h-96 bg-fixed bg-center bg-cover flex justify-center items-center"
        style={{
          backgroundImage:
            'url("https://duruthemes.com/demo/html/bycamp/img/activities/2.jpg")',
        }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full flex justify-center items-center">
          <h3 className="text-3xl md:text-5xl text-white">
            Outdoor Activities
          </h3>
        </div>
      </div>

      {/* ProductCard Section */}
      <div className="mt-16 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 lg:mx-10">
          {currentItems.map((activity, index) => (
            <ActivityCard
              id={activity.id}
              key={index}
              title={activity.title}
              description={activity.description}
              imageUrl={activity.imageUrl}
              defaultIcon={activity.defaultIcon}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 mb-20">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Section 2: Video Section */}
      <section
        className="relative h-96 bg-fixed bg-center bg-cover flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            'url("https://duruthemes.com/demo/html/bycamp/img/slider/01.jpg")',
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
          <h3 className="text-3xl text-white mb-4">Outdoor Promo Video</h3>

          <button className="" onClick={() => setIsVideoVisible(true)}>
            <IconVideo />
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
              src="https://www.youtube.com/embed/mtc2IHdyz4s?autoplay=1"
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

export default D_OutdoorPage;
