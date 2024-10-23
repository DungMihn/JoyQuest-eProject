import { RiStarFill } from "react-icons/ri";
import { Parallax } from "react-parallax";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testiominals = () => {
  return (
    <>
      <Parallax
        className="h-[500px]"
        bgImage="https://duruthemes.com/demo/html/bycamp/img/slider/07.jpg"
        bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
        strength={500} // Điều chỉnh cường độ hiệu ứng
      >
        {/* Lớp nền đen với độ trong suốt */}
        <div className="bg-black h-[500px] content-center bg-opacity-50">
          <Swiper
          className="w-[586px] cursor-pointer"
            spaceBetween={500}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 3000, disableOnInteraction: true }} // Tự động chuyển slide sau 3 giây
            modules={[Autoplay]} // Kích hoạt module Autoplay
            loop={true}
          >
            {/*-------------------- Thẻ 1 ------------------------ */}
            <SwiperSlide>
              <div className="flex flex-col w-[586px] items-center p-6 rounded-lg mx-auto">
                {/* Đánh giá năm sao */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <RiStarFill key={index} className="text-yellow-400" />
                  ))}
                </div>

                {/* Tiêu đề */}
                <h4 className="text-2xl text-white font-medium mb-2">
                  Highly recommended!
                </h4>

                {/* Nội dung */}
                <p className="text-center font-outfit text-white mb-4">
                  Lorem dapibus asue metus the nec feusiate eraten miss hendreri
                  net ve ante the lemon sanleo nectan feugiat erat hendrerit
                  necuis ante viventa miss sapien silver duman lorem ipsum miss
                  rana duru the satien.
                </p>
                {/* Avatar */}
                <div className="mb-4 border-solid border-2 border-greenCustom rounded-full p-[2px]">
                  <img
                    src="https://duruthemes.com/demo/html/bycamp/img/team/1.jpg" // URL ảnh avatar
                    alt="Avatar"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                </div>
                {/* Tên */}
                <h3 className="text-lg font-outfit text-white mb-2">@Pablo</h3>
              </div>
            </SwiperSlide>

            {/*-------------------- Thẻ 2 ------------------------ */}
            <SwiperSlide>
              <div className="flex flex-col w-[586px] items-center p-6 rounded-lg mx-auto">
                {/* Đánh giá năm sao */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <RiStarFill key={index} className="text-yellow-400" />
                  ))}
                </div>

                {/* Tiêu đề */}
                <h4 className="text-2xl text-white font-medium mb-2">
                  Highly recommended!
                </h4>

                {/* Nội dung */}
                <p className="text-center font-outfit text-white mb-4">
                  Lorem dapibus asue metus the nec feusiate eraten miss hendreri
                  net ve ante the lemon sanleo nectan feugiat erat hendrerit
                  necuis ante viventa miss sapien silver duman lorem ipsum miss
                  rana duru the satien.
                </p>
                {/* Avatar */}
                <div className="mb-4 border-solid border-2 border-greenCustom rounded-full p-[2px]">
                  <img
                    src="https://duruthemes.com/demo/html/bycamp/img/team/2.jpg" // URL ảnh avatar
                    alt="Avatar"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                </div>
                {/* Tên */}
                <h3 className="text-lg font-outfit text-white mb-2">@Rober</h3>
              </div>
            </SwiperSlide>

            {/*-------------------- Thẻ 3 ------------------------ */}
            <SwiperSlide>
              <div className="flex flex-col w-[586px] items-center p-6 rounded-lg mx-auto">
                {/* Đánh giá năm sao */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <RiStarFill key={index} className="text-yellow-400" />
                  ))}
                </div>

                {/* Tiêu đề */}
                <h4 className="text-2xl text-white font-medium mb-2">
                  Highly recommended!
                </h4>

                {/* Nội dung */}
                <p className="text-center font-outfit text-white mb-4">
                  Lorem dapibus asue metus the nec feusiate eraten miss hendreri
                  net ve ante the lemon sanleo nectan feugiat erat hendrerit
                  necuis ante viventa miss sapien silver duman lorem ipsum miss
                  rana duru the satien.
                </p>
                {/* Avatar */}
                <div className="mb-4 border-solid border-2 border-greenCustom rounded-full p-[2px]">
                  <img
                    src="https://duruthemes.com/demo/html/bycamp/img/team/3.jpg" // URL ảnh avatar
                    alt="Avatar"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                </div>
                {/* Tên */}
                <h3 className="text-lg font-outfit text-white mb-2">@EmilyDan</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Parallax>
    </>
  );
};

export default Testiominals;
