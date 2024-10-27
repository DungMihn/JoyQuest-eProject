import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { GiHiking } from "react-icons/gi";
import { BlogCard } from "./BlogCard";
import { blogs } from "../../data/blogs";

const Blogs = () => {
  return (
    <div className="py-[120px] bg-[#F3F5F4]">
      {/* Subtitle and Title */}
      <div className="section-subtitle flex justify-center items-center mb-2">
        <div className="icon text-[24px] p-3 text-white bg-[#F2682A] rounded-full mr-2">
          <GiHiking />
        </div>
        <span className="font-outfit text-[14px] lg:text-[16px]">
          LATEST NEWS
        </span>
      </div>
      <div className="font-medium text-[24px] lg:text-[36px] flex justify-center">
        Our Blog
      </div>

      {/* Swiper Component */}
      <Swiper
        className="md:w-[80%] w-[60%] "
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        speed={800}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          // When window width is >= 640px (mobile)
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          // When window width is >= 768px (tablet)
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          // When window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index} className="flex justify-center my-14">
            <BlogCard
              id={blog.id}
              title={blog.title}
              description={blog.description}
              imageUrl={blog.imageUrl}
              date={blog.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blogs;
