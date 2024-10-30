import { GrMail, GrLocation, GrPhone } from "react-icons/gr";

function ContactThumbnail() {
  return (
    <div>
      <div
        className="relative h-60 md:h-96 bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(https://duruthemes.com/demo/html/bycamp/img/slider/08.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="absolute w-full h-full text-[30px] md:text-[45px] z-20 text-[#fff] flex justify-center items-center">
          Contact Us
        </span>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute flex w-full bottom-[-30%] flex-col md:flex-row gap-4 justify-center">
          {/* Email Card */}
          <div className="group md:flex flex-col w-[90%] md:w-[350px] h-[200px] bg-white shadow-lg rounded-lg p-6 transition-transform hover:-translate-y-2 duration-500 hover:bg-orangeCustom hover:text-white">
            <div className="text-5xl  text-orangeCustom my-4 transition-colors duration-300 group-hover:text-[#fff]">
              <GrMail />
            </div>
            <div>
              <h4 className="text-[20px]">e-Mail</h4>
              <p className="font-outfit">info@byJoyQuest.com</p>
            </div>
          </div>
          {/* Address Card */}
          <div className="group flex flex-col w-[90%] md:w-[350px] h-[200px] bg-white shadow-lg rounded-lg p-6 transition-transform hover:-translate-y-2 duration-500 hover:bg-orangeCustom hover:text-white">
            <div className="text-5xl text-orange-500 my-4 transition-colors duration-300 group-hover:text-[#fff]">
              <GrLocation />
            </div>
            <div>
              <h4 className="text-[20px]">Our Address</h4>
              <p className="font-outfit">
                115 Le Thanh Ton, Thach Thang, Hai Chau, Da Nang, Vietnam
              </p>
            </div>
          </div>
          {/* Phone Card */}
          <div className="group flex flex-col w-[90%] md:w-[350px] h-[200px] bg-greenCustom shadow-lg rounded-lg p-6 text-white transition-transform hover:-translate-y-2 duration-500 hover:bg-orangeCustom">
            <div className="text-5xl my-4 transition-colors duration-300 group-hover:text-[#fff]">
              <GrPhone />
            </div>
            <div>
              <h4 className="text-[20px]">Call Us</h4>
              <p className="font-outfit">+1 234 567 8910</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactThumbnail;
