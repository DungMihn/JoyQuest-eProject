import React, { useState } from "react";
import { ActivityCard } from "../components/ActivityCard"; // Ensure proper path and default export if needed
import Pagination from "../components/D_Pagination";
import { activities } from "../../data/activities";

const familyActivities = activities.filter((activity) =>
  activity.categories.includes("Family Games")
);
const ITEMS_PER_PAGE = 6;

const D_FamilyPage: React.FC = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCloseVideo = () => setIsVideoVisible(false);

  // Pagination Logic
  const totalPages = Math.ceil(familyActivities.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = familyActivities.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div>
      {/* Section 1: Banner Header */}
      <div
        className="relative h-60 md:h-96 bg-fixed bg-center bg-cover flex justify-center items-center"
        style={{
          backgroundImage:
            'url("https://duruthemes.com/demo/html/bycamp/img/slider/05.jpg")',
        }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full flex justify-center items-center">
          <h3 className="text-3xl md:text-5xl text-white">Family Activities</h3>
        </div>
      </div>

      {/* ProductCard Section */}
      <div className="mt-16 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 lg:mx-10">
          {currentItems.map((activity) => (
            <ActivityCard
              key={activity.id}
              id={activity.id}
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
            'url("https://duruthemes.com/demo/html/bycamp/img/activities/6.jpg")',
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
          <h3 className="text-3xl text-white mb-4">Family Promo Video</h3>
          <button
            className="bg-white p-2 rounded-full hover:bg-[#5b9a42]"
            onClick={() => setIsVideoVisible(true)}
          >
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
              title="Family Promo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default D_FamilyPage;
