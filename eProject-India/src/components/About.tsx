import { FaCampground, FaFire, FaHiking } from "react-icons/fa";
import { GiHiking } from "react-icons/gi";

const About = () => {
  return (
    <div className="section-box flex flex-col lg:flex-row justify-center my-[60px] lg:my-[120px] px-4 lg:px-0">
      {/* Phần nội dung */}
      <div className="About-section w-full lg:w-[508px] h-auto lg:h-[426px] px-4 mb-10 lg:mb-0">
        <div className="section-subtitle flex items-center mb-4">
          <div className="icon text-[20px] lg:text-[24px] p-4 text-white bg-[#F2682A] rounded-full mr-2">
            <GiHiking />
          </div>
          <p className="font-outfit text-lg">CAMP & TRAIL</p>
        </div>

        <div className="section-title font-medium text-3xl lg:text-4xl mb-4">
          About the byCamp
        </div>

        <div className="font-outfit section-content mb-10 text-base lg:text-lg">
          Lorem ipsum amet nisl quam nestibulum the quam odiomise fermen
          sceisuenta the miss ulatio varius natoque fermen themanis
          sarturiention monte duru fermen.
        </div>

        {/* Các icon */}
        <div className="section-row flex justify-center lg:justify-start">
          <div className="flex justify-center space-x-8 my-6 lg:my-10">
            <div className="flex flex-col items-center px-2">
              <FaCampground className="text-greenCustom w-12 h-12 lg:w-16 lg:h-16" />
              <p className="mt-2 text-lg font-semibold">Tents Rent</p>
            </div>

            <div className="flex flex-col items-center px-2">
              <FaHiking className="text-greenCustom w-12 h-12 lg:w-16 lg:h-16" />
              <p className="mt-2 text-lg font-semibold">Activities</p>
            </div>

            <div className="flex flex-col items-center px-2">
              <FaFire className="text-greenCustom w-12 h-12 lg:w-16 lg:h-16" />
              <p className="mt-2 text-lg font-semibold">Firewoods</p>
            </div>
          </div>
        </div>
      </div>

      {/* Phần hình ảnh */}
      <div className="section-img relative w-full lg:w-[586px] h-auto lg:h-[456px]">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://duruthemes.com/demo/html/bycamp/img/about.jpg"
            alt="Sample Image"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
          />
        </div>

        <button className="absolute bottom-4 left-3 bg-[#F2682A] flex items-center p-4 lg:p-5 animate-bounce-slow rounded-2xl">
          <span className="text-3xl lg:text-4xl text-white">
            <GiHiking />
          </span>
          <div className="content ml-3 lg:ml-5">
            <span className="text-xl lg:text-2xl font-bold text-white text-right">
              Let's Camp!
            </span>
            <p className="text-white font-outfit text-sm lg:text-lg text-right">
              nature lovers
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default About;
