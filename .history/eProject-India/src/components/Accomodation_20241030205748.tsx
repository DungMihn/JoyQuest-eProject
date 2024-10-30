import { FaCampground } from "react-icons/fa";
import { GiHiking } from "react-icons/gi";
import { MdOutlineCottage } from "react-icons/md";
import { TbBus } from "react-icons/tb";

const Accomodation = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[60px] md:py-[120px] bg-[#F3F5F4]">
      {/* Tiêu đề */}
      <div className="section-subtitle flex items-center mb-2">
        <div className="icon text-[20px] md:text-[24px] p-2 md:p-3 text-white bg-[#F2682A] rounded-full mr-2">
          <GiHiking />
        </div>
        <span className="font-light text-[14px] md:text-[16px]">
          What We Offer
        </span>
      </div>
      <div className="font-medium text-[28px] md:text-[36px]">
        Where To Stay
      </div>

      {/* Container cho các thẻ */}
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 mt-6 px-4 lg:px-0">
        {/* Thẻ 1 */}
        <div className="p-6 md:p-7 flex w-full lg:w-[382px] h-auto lg:h-[188px] rounded-lg transform transition-all duration-300 hover:-translate-y-3 hover:bg-white">
          <div className="icon pr-4 lg:pr-6">
            <MdOutlineCottage className="text-greenCustom w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="content">
            <div className="title text-lg lg:text-xl mb-3 md:mb-4">
              Private Cottages
            </div>
            <p className="font-sans text-[14px] md:text-[16px]">
              Lorem ipsum varius natosuen miss magnis sarturien monte nascete in
              the fermen.
            </p>
          </div>
        </div>

        {/* Thẻ 2 */}
        <div className="p-6 md:p-7 flex w-full lg:w-[382px] h-auto lg:h-[188px] rounded-lg transform transition-all duration-300 hover:-translate-y-3 hover:bg-white">
          <div className="icon pr-4 md:pr-6">
            <FaCampground className="text-greenCustom w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="content">
            <div className="title text-lg md:text-xl mb-3 md:mb-4">
              Tents With Territory
            </div>
            <p className="font-sans text-[14px] md:text-[16px]">
              Lorem ipsum varius natosuen miss magnis sarturien monte nascete in
              the fermen.
            </p>
          </div>
        </div>

        {/* Thẻ 3 */}
        <div className="p-6 md:p-7 flex w-full md:w-[382px] h-auto md:h-[188px] rounded-lg transform transition-all duration-300 hover:-translate-y-3 hover:bg-white">
          <div className="icon pr-4 md:pr-6">
            <TbBus className="text-greenCustom w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="content">
            <div className="title text-lg md:text-xl mb-3 md:mb-4">
              Compact Trailers
            </div>
            <p className="font-sans text-[14px] md:text-[16px]">
              Lorem ipsum varius natosuen miss magnis sarturien monte nascete in
              the fermen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
