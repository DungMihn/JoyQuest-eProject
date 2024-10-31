import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { activities } from "../../data/activities";

interface Activity {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  materials: string[];
  timeRequired: string;
  instructions: string;
  categories: string[];
  images: { id: number; image: string }[];
}

const ActivityDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const activityId = parseInt(id || "0", 10);

  const activity = activities.find((activity) => activity.id === activityId);
  if (!activity) {
    return <p>Activity not found.</p>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="text-[18px]">
      <div
        className="relative  h-60 md:h-96 bg-fixed bg-center bg-cover flex"
        style={{
          backgroundImage: `url(${activity.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full h-full flex justify-center items-center px-4">
          <span className="text-[30px] md:text-[45px] z-20 text-[#fff] text-center">
            {activity.title}
          </span>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="container py-[8%] px-6 md:px-[12%]">
        <h1 className="text-3xl mb-8 tracking-wider text-center  drop-shadow-lg">
          About {activity.title}
        </h1>

        <p className="text-lg mb-12 font-outfit">{activity.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6">
          {/* Materials Section */}
          <div className="">
            <h2 className="text-2xl mb-5  drop-shadow-md">Materials</h2>
            <ul className="list-disc pl-5 space-y-2">
              {activity.materials.map((material, index) => (
                <li className="font-outfit /90" key={index}>
                  {material}
                </li>
              ))}
            </ul>
          </div>

          {/* Details Section */}
          <div>
            <h2 className="text-2xl mb-5  drop-shadow-md">Details</h2>
            <p className="font-outfit /80 mb-3">
              <span className="">Time Required:</span> {activity.timeRequired}
            </p>
            <p className="font-outfit /80">
              <span className="">Categories:</span>{" "}
              {activity.categories.join(", ")}
            </p>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="mt-12">
          <h2 className="text-2xl mb-5  drop-shadow-md text-center">
            Instructions
          </h2>
          <p className="font-outfit text-lg leading-relaxed /80">
            {activity.instructions}
          </p>
        </div>

        {/* Additional Images Section */}
        <div className="mt-12">
          <h2 className="text-2xl mb-5  drop-shadow-md text-center">
            Additional Images
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {activity.images.map((img) => (
              <div
                className="overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
                key={img.id}
              >
                <img
                  src={img.image}
                  alt={`${activity.title} ${img.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
