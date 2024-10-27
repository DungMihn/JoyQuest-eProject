import React from "react";
import { RiStarFill } from "react-icons/ri";
import { Parallax } from "react-parallax";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <div>
      <Parallax
        className="h-[500px] object-cover "
        bgImage="https://duruthemes.com/demo/html/bycamp/img/slider/07.jpg"
        bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
        strength={500} // Adjust effect intensity
      >
        {/* Background overlay */}
        <div className="bg-black h-[500px]  content-center bg-opacity-50">
          <Swiper
            className="w-[90%] sm:w-[100%] md:w-[450px] lg:w-[586px] cursor-pointer"
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            modules={[Autoplay]}
            loop={true}
          >
            {/*-------------------- Slide 1 ------------------------ */}
            <SwiperSlide>
              <div className="flex flex-col w-[90%] sm:w-[100%] md:w-[450px] lg:w-[586px] items-center p-6 sm:p-4 rounded-lg mx-auto">
                {/* Five-star rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <RiStarFill key={index} className="text-yellow-400" />
                  ))}
                </div>

                {/* Title */}
                <h4 className="text-2xl sm:text-xl md:text-2xl text-white font-medium mb-2">
                  Highly recommended!
                </h4>

                {/* Content */}
                <p className="text-center font-outfit text-white mb-4 text-base sm:text-sm md:text-base">
                  Lorem dapibus asue metus the nec feusiate eraten miss hendreri
                  net ve ante the lemon sanleo nectan feugiat erat hendrerit
                  necuis ante viventa miss sapien silver duman lorem ipsum miss
                  rana duru the satien.
                </p>

                {/* Avatar */}
                <div className="mb-4 border-solid border-2 border-greenCustom rounded-full p-[2px]">
                  <img
                    src="https://duruthemes.com/demo/html/bycamp/img/team/1.jpg"
                    alt="Avatar"
                    className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px] rounded-full"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-outfit text-white mb-2 sm:text-base md:text-lg">
                  @Pablo
                </h3>
              </div>
            </SwiperSlide>

            {/* Repeat for other slides */}
            {/* Slide 2 */}
            <SwiperSlide>
              <div className="flex flex-col w-[90%] sm:w-[100%] md:w-[450px] lg:w-[586px] items-center p-6 sm:p-4 rounded-lg mx-auto">
                {/* Five-star rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <RiStarFill key={index} className="text-yellow-400" />
                  ))}
                </div>

                {/* Title */}
                <h4 className="text-2xl sm:text-xl md:text-2xl text-white font-medium mb-2">
                  Highly recommended!
                </h4>

                {/* Content */}
                <p className="text-center font-outfit text-white mb-4 text-base sm:text-sm md:text-base">
                  Lorem dapibus asue metus the nec feusiate eraten miss hendreri
                  net ve ante the lemon sanleo nectan feugiat erat hendrerit
                  necuis ante viventa miss sapien silver duman lorem ipsum miss
                  rana duru the satien.
                </p>

                {/* Avatar */}
                <div className="mb-4 border-solid border-2 border-greenCustom rounded-full p-[2px]">
                  <img
                    src="https://duruthemes.com/demo/html/bycamp/img/team/2.jpg"
                    alt="Avatar"
                    className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px] rounded-full"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-outfit text-white mb-2 sm:text-base md:text-lg">
                  @Rober
                </h3>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="flex flex-col w-[90%] sm:w-[100%] md:w-[450px] lg:w-[586px] items-center p-6 sm:p-4 rounded-lg mx-auto">
                {/* Five-star rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <RiStarFill key={index} className="text-yellow-400" />
                  ))}
                </div>

                {/* Title */}
                <h4 className="text-2xl sm:text-xl md:text-2xl text-white font-medium mb-2">
                  Highly recommended!
                </h4>

                {/* Content */}
                <p className="text-center font-outfit text-white mb-4 text-base sm:text-sm md:text-base">
                  Lorem dapibus asue metus the nec feusiate eraten miss hendreri
                  net ve ante the lemon sanleo nectan feugiat erat hendrerit
                  necuis ante viventa miss sapien silver duman lorem ipsum miss
                  rana duru the satien.
                </p>

                {/* Avatar */}
                <div className="mb-4 border-solid border-2 border-greenCustom rounded-full p-[2px]">
                  <img
                    src="https://duruthemes.com/demo/html/bycamp/img/team/3.jpg"
                    alt="Avatar"
                    className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px] rounded-full"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-outfit text-white mb-2 sm:text-base md:text-lg">
                  @EmilyDan
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Parallax>
    </div>
  );
};

export default Testimonials;
