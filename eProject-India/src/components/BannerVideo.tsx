import { CustomButton3 } from './Button'
import { FaWhatsapp } from 'react-icons/fa'

const BannerVideo = () => {
  return (
    <div className="relative">
      <video
        className="w-full h-auto" // Thay đổi chiều cao cho màn hình nhỏ
        autoPlay
        loop
        muted
      >
        <source
          src="https://duruthemes.com/demo/html/cappa/camping.webm"
          type=""
        />
      </video>

      {/* Nội dung trong video */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
          Join the <span className="text-[#9AC532]">Adventure</span>
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-white mt-2">
          Join us for a Fun-Filled Summer Adventure!
        </p>
        <button className="mt-4 sm:mt-6 md:mt-8">
          <CustomButton3 text="Discover" />
        </button>
      </div>

      {/* WhatsApp Line */}
      <div className="call absolute top-[50%] right-0 -rotate-90 hidden lg:flex">
        <div className="icon text-[18px] sm:text-[20px] lg:text-[24px] bg-[#5B9A42] rounded-full p-2 sm:p-3 lg:p-4 text-white m-1 sm:m-2 animate-bounce-scale">
          <FaWhatsapp />
        </div>
        <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white flex flex-col justify-center">
          <p>WhatsApp Line</p>
          <p>+1 234 567 8910</p>
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
