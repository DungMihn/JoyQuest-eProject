import React from "react";
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

  return (
    <div className="text-[18px]">
      <div
        className="h-[382px] relative"
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
      <div className="container my-[5%] px-4 md:px-[10%]">
        <h1 className="text-2xl mb-5">About {activity.title}</h1>
        <p className="text-[#17px] mb-10 font-outfit">{activity.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl mb-5">Materials</h2>
            <ul className="list-disc pl-5">
              {activity.materials.map((material, index) => (
                <li className="font-outfit" key={index}>
                  {material}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl mb-5">Details</h2>
            <p className="font-outfit">
              <span>Time Required:</span> {activity.timeRequired}
            </p>
            <p className="font-outfit">
              <span>Categories:</span> {activity.categories.join(", ")}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl mb-3">Instructions</h2>
          <p className="font-outfit">{activity.instructions}</p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl mb-5">Additional Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {activity.images.map((img) => (
              <div className="overflow-hidden rounded-lg" key={img.id}>
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
