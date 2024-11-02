import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
                imageUrl={
                  "https://scontent.fdad5-1.fna.fbcdn.net/v/t39.30808-6/463407362_2443844359147085_9201268441214917783_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0pUfVm2V7M0Q7kNvgEIGAXL&_nc_zt=23&_nc_ht=scontent.fdad5-1.fna&_nc_gid=ADZF92pKm2u2HDnaHvw9aC3&oh=00_AYAwMt9ZUDQ1EhQmzRyMJJx_enE5R5IQ-gavM0p1iiLh0w&oe=6727E920"
                }
                defaultIcon={<RiGameFill size={30} className="text-[#fff]" />}
              />
              <OurTeamCard
                id={2}
                name={"Nguyen Viet Long"}
                description={""}
                imageUrl={
                  "https://scontent.fdad5-1.fna.fbcdn.net/v/t39.30808-6/275692501_3202278090098074_4078068973612703237_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=js_v4JZ3A8EQ7kNvgGuKyD3&_nc_zt=23&_nc_ht=scontent.fdad5-1.fna&_nc_gid=ABe8WmioKGPOrRYLlfmDZOi&oh=00_AYDI5Pii_sZ-A-cS7etGjkkrkSOGv7RGdprMYEks73Rsvg&oe=6727F1F2"
                }
                defaultIcon={<RiGameFill size={30} className="text-[#fff]" />}
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-around">
              <OurTeamCard
                id={3}
                name={"Dinh Hoang Hiep"}
                description={""}
                imageUrl={
                  "https://scontent.fdad5-1.fna.fbcdn.net/v/t39.30808-6/449161627_342160248926003_5350170009082464452_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFH5eld2MFcq9kknrVg2rrUXfVMhKaGFWRd9UyEpoYVZJ84JZ346lMq276x0rQ4R9zYjEs2P-vxQ-H8QrdpJj6K&_nc_ohc=JWbAw4Z8_rUQ7kNvgH3lomL&_nc_zt=23&_nc_ht=scontent.fdad5-1.fna&_nc_gid=AKHVoD33pfai2eiPYLS5mOR&oh=00_AYC7qxKmsHQ2rZXAbKKqfOQ3Ue_tTQdEkSHDI13wvWWxbw&oe=6727F654"
                }
                defaultIcon={<RiGameFill size={30} className="text-[#fff]" />}
              />
              <OurTeamCard
                id={4}
                name={"Nguyen Thi Hong Dieu"}
                description={""}
                imageUrl={
                  "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/341517406_5899443956849079_434276773115296243_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7HjS4dkduDIQ7kNvgFYh6TX&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=A1Dhr1lDIsxP0PAoGLLScYS&oh=00_AYDsRU1m3Pt7M_UFFPLGo9CtVcLnaqo-u23o2h5-9mM9qg&oe=67292DCC"
                }
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
