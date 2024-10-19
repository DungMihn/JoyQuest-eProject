import { ButtonBooking } from "../components/Button";
import { CustomButton2 } from "../components/Button";
import { CustomButton3 } from "../components/Button";
import { RoundIconButton1 } from "../components/Button";
import { RoundIcon } from "../components/Button";
import { ActivityCard } from "../components/ActivityCard";
import { activities } from "../../data/activities";
import { BlogCard } from "../components/BlogCard";
import { blogs } from "../../data/blogs";
import { ItineraryCard } from "../components/ItineraryCard";
import { itineraries } from "../../data/itineraries";
import { FiYoutube } from "react-icons/fi";

const TestPage = () => {
  return (
    <div>
      <div className="mx-10 py-10">
        <ButtonBooking />
      </div>
      <div className="mx-10 my-10">
        <CustomButton2 text="Hello" />
      </div>
      <div className="mx-10 my-10">
        <CustomButton3 text="hello" />
      </div>
      <div className="mx-10 my-10">
        <RoundIconButton1 defaultIcon={<FiYoutube size={20} />} />
      </div>
      <div className="mx-10 my-10">
        <RoundIcon />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            title={activity.title}
            description={activity.description}
            imageUrl={activity.imageUrl}
            defaultIcon={activity.defaultIcon}
          />
        ))}
      </div>
      <div className="grid grid-cols-2  gap-6 m-20">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
            date={blog.date}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-60 m-20 ">
        {itineraries.map((itinerary, index) => (
          <ItineraryCard
            key={index}
            title={itinerary.title}
            imageUrl={itinerary.imageUrl}
            price={itinerary.price}
          />
        ))}
      </div>
    </div>
  );
};

export default TestPage;
