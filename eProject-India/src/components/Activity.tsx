import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ActivityCard } from "./ActivityCard";
import { GiHiking } from "react-icons/gi";
import { activities } from "../../data/activities";

const Activity = () => {
  // Chia hoạt động thành các nhóm 3 phần tử
  const activityGroups = [];
  for (let i = 0; i < activities.length; i += 3) {
    activityGroups.push(activities.slice(i, i + 3));
  }

  return (
    <div className="py-[120px] bg-[#F3F5F4]">
      <div className="section-subtitle flex justify-center items-center mb-2">
        <div className="icon text-[24px] p-3 text-white bg-[#F2682A] rounded-full mr-2">
          <GiHiking />
        </div>
        <span className="font-outfit text-[16px]">WHAT WE'RE OFFERING</span>
      </div>
      <div className="font-medium text-[36px] flex justify-center mb-10">
        Our Activities
      </div>

      <Swiper
        className="w-full" // Đảm bảo chiếm toàn bộ chiều rộng
        modules={[Pagination]}
        spaceBetween={30} // Điều chỉnh khoảng cách giữa các slide
        slidesPerView={1} // Mặc định 1 slide cho màn hình nhỏ
        pagination={{ clickable: true }}
        speed={800}
      >
        {activityGroups.map((group, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="flex flex-col md:flex-row md:justify-center justify-between w-[300px] md:w-full gap-y-10 gap-5 px-5 mb-20">
              {group.map((activity, index) => (
                <ActivityCard
                  id={activity.id}
                  key={index}
                  title={activity.title}
                  imageUrl={activity.imageUrl}
                  description={activity.description}
                  defaultIcon={activity.defaultIcon}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <a href=""></a>
    </div>
  );
};

export default Activity;
