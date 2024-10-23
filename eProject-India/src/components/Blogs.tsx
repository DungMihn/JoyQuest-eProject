import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { GiHiking } from "react-icons/gi";
import { BlogCard } from "./BlogCard";

const Blogs = () => {
  return (
    <div className="py-[120px] bg-[#F3F5F4]">
      <div className="section-subtitle flex justify-center items-center mb-2">
        <div className="icon text-[24px] p-3 text-white bg-[#F2682A] rounded-full mr-2">
          <GiHiking />
        </div>
        <span className=" font-outfit text-[16px]">LASTEST NEWS</span>
      </div>
      <div className="font-medium text-[36px] flex justify-center">
        Our Blog
      </div>
      <Swiper
        // install Swiper modules
        // install Swiper modules
        className="w-[1325px]"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        speed={800}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="flex justify-center flex-wrap mb-6">
          <div className="flex p-7">
          <BlogCard
            date=" 29 Dec 2024"
            title="How to Build a Campfire in 5 Easy Steps"
            imageUrl="https://duruthemes.com/demo/html/bycamp/img/blog/01.jpg"
            description="Lorem ipsum dolor saten amet consecten adipiscing elit lobortis fermen."
          />
          </div>

          <div className="flex p-7">
          <BlogCard
            date=" 29 Dec 2024"
            title="How to Build a Campfire in 5 Easy Steps"
            imageUrl="https://duruthemes.com/demo/html/bycamp/img/blog/02.jpg"
            description="Lorem ipsum dolor saten amet consecten adipiscing elit lobortis fermen."
          />
          </div>

          <div className="flex p-7">
          <BlogCard
            date=" 29 Dec 2024"
            title="How to Build a Campfire in 5 Easy Steps"
            imageUrl="https://duruthemes.com/demo/html/bycamp/img/blog/03.jpg"
            description="Lorem ipsum dolor saten amet consecten adipiscing elit lobortis fermen."
          />
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center flex-wrap mb-6">
        <div className="flex p-7">
          <BlogCard
            date=" 29 Dec 2024"
            title="How to Build a Campfire in 5 Easy Steps"
            imageUrl="https://duruthemes.com/demo/html/bycamp/img/blog/04.jpg"
            description="Lorem ipsum dolor saten amet consecten adipiscing elit lobortis fermen."
          />
          </div>

          <div className="flex p-7">
          <BlogCard
            date=" 29 Dec 2024"
            title="How to Build a Campfire in 5 Easy Steps"
            imageUrl="https://duruthemes.com/demo/html/bycamp/img/blog/05.jpg"
            description="Lorem ipsum dolor saten amet consecten adipiscing elit lobortis fermen."
          />
          </div>

          <div className="flex p-7">
          <BlogCard
            date=" 29 Dec 2024"
            title="How to Build a Campfire in 5 Easy Steps"
            imageUrl="https://duruthemes.com/demo/html/bycamp/img/blog/06.jpg"
            description="Lorem ipsum dolor saten amet consecten adipiscing elit lobortis fermen."
          />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Blogs;
