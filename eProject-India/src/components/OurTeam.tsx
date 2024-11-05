import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { OurTeamCard } from "./OurTeamCard"; // Correct the import path
import { GiHiking } from "react-icons/gi";
import { activities } from "../../data/activities";
import { RiGameFill } from "react-icons/ri";

const OurTeam = () => {
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
        <span className="font-outfit text-[16px] uppercase">Our Team</span>
      </div>
      <div className="font-medium text-[36px] flex justify-center mb-10">
        Meet Our Team
      </div>

      <Swiper
        className="w-full" // Đảm bảo chiếm toàn bộ chiều rộng
        modules={[Pagination]}
        spaceBetween={30} // Điều chỉnh khoảng cách giữa các slide
        slidesPerView={1} // Mặc định 1 slide cho màn hình nhỏ
        pagination={{ clickable: true }}
        loop={true}
        speed={800}
      >
        <div className="flex justify-center ">
          <div className="flex flex-col md:flex-row md:justify-center w-[300px] md:w-full gap-y-10 gap-5  mb-20">
            <SwiperSlide className="flex justify-around ">
              <OurTeamCard
                id={1}
                name={"Dang Minh Dung"}
                description={""}
                imageUrl="/images/dung.jpg"
                defaultIcon={<RiGameFill size={30} className="text-[#fff]" />}
              />
              <OurTeamCard
                id={2}
                name={"Nguyen Viet Long"}
                description={""}
                imageUrl="/images/long.jpg"
                defaultIcon={<RiGameFill size={30} className="text-[#fff]" />}
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-around">
              <OurTeamCard
                id={3}
                name={"Dinh Hoang Hiep"}
                description={""}
                imageUrl="/images/hiep.jpg"
                defaultIcon={<RiGameFill size={30} className="text-[#fff]" />}
              />
              <OurTeamCard
                id={4}
                name={"Nguyen Thi Hong Dieu"}
                description={""}
                imageUrl="/images/dieu.jpg"
                defaultIcon={<RiGameFill size={30} className="text-[#fff]" />}
              />
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
      <a href=""></a>
    </div>
  );
};

export default OurTeam;
