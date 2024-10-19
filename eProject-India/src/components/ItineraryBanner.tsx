import { useState } from "react";
import { ItineraryCard } from "./ItineraryCard";
import { Navigation } from "swiper/modules";
import { itineraries } from "../../data/itineraries";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { RoundIconButton1 } from "./Button";
import { GiHiking } from "react-icons/gi";

const ItineraryBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Theo dõi slide đang ở vị trí trung tâm

  return (
    <div className="py-[60px] md:py-[120px] px-4">
      {/* Phần tiêu đề */}
      <div className="section-subtitle flex justify-center items-center mb-2">
        <div className="icon text-[20px] md:text-[24px] p-2 md:p-3 text-white bg-[#F2682A] rounded-full mr-2">
          <GiHiking />
        </div>
        <span className="font-outfit text-[14px] md:text-[16px]">OUR SERVICES</span>
      </div>
      <div className="font-medium text-[28px] md:text-[36px] flex justify-center text-center">
        Accommodations
      </div>

      {/* Swiper */}
      <Swiper
        className="overflow-visible pt-7"
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        loop={true}
        speed={850}
        centeredSlides={true}
        slidesPerView={1} // Số lượng slide hiển thị
        breakpoints={{
          640: {
            slidesPerView: 1.5, // Hiển thị 1.5 slides trên màn hình nhỏ hơn
          },
          768: {
            slidesPerView: 2.5, // Hiển thị 2.5 slides trên màn hình tablet
          },
          1024: {
            slidesPerView: 3.5, // Hiển thị 3.5 slides trên màn hình desktop
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Cập nhật chỉ số của slide hiện tại
      >
        {/* Nút prev */}
        <div className="text-white custom-prev-button absolute left-[5%] top-1/2 transform -translate-y-1/2 cursor-pointer z-10 md:left-[15%] lg:left-[25%]">
          <RoundIconButton1 defaultIcon={<IoIosArrowBack />} />
        </div>

        {/* Nút next */}
        <div className="text-white custom-next-button absolute right-[5%] top-1/2 transform -translate-y-1/2 cursor-pointer z-10 md:right-[15%] lg:right-[25%]">
          <RoundIconButton1 defaultIcon={<IoIosArrowForward />} />
        </div>

        {/* Các slide */}
        {itineraries.map((itinerary, index) => (
          <SwiperSlide className="flex justify-center px-3" key={index}>
            <ItineraryCard
              isFocus={index === activeIndex} // Gán isFocus=true nếu slide này đang ở trung tâm
              title={itinerary.title}
              imageUrl={itinerary.imageUrl}
              price={itinerary.price}
              id={itinerary.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ItineraryBanner;
