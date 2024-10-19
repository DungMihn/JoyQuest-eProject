import { CiCalendar } from "react-icons/ci";
import { CustomButton2 } from "./Button";
import { GiHiking } from "react-icons/gi";

const Events = () => {
  return (
    <div className="py-[120px]">
      <div className="section-subtitle flex justify-center items-center mb-2">
        <div className="icon text-[24px] p-3 text-white bg-[#F2682A] rounded-full mr-2">
          <GiHiking />
        </div>
        <span className=" font-outfit text-[16px]">ENROLL NOW</span>
      </div>
      <div className="font-medium text-[36px] flex justify-center mb-4">
        Our Events
      </div>
      <div className="even-box mt-7">
        {/*----------------------- Event 1 ---------------------------*/}
        <div className="flex items-center justify-center space-x-6 p-4">
          {/* Div chứa ảnh */}
          <div className="w-[586px] h-[330px] overflow-hidden rounded-lg">
            <img
              src="https://duruthemes.com/demo/html/bycamp/img/slider/04.jpg" // Đổi URL này thành đường dẫn ảnh của bạn
              alt="Sample"
              className="w-full transition-transform duration-1000 ease-in-out transform hover:scale-110"
            />
          </div>

          {/* Div nội dung */}
          <div className="w-[586px] p-10 h-[300px]">
            <span className="flex items-center text-orangeCustom mb-1">
              <CiCalendar />
              <p className="font-outfit ml-1">12-20 June</p>
            </span>
            <h2 className="text-3xl font-medium mb-3">Kid Summer Camp</h2>
            <p className="text-lg leading-6 font-outfit mb-4">
              Camping inilla duiman at elit finibus viverra nec a lacus miss the
              nesun seneoice misuscipit non sagie the fermen ziverra tristiue
              duru iviten onen nivami in the miss acsestion.
            </p>
            <CustomButton2 text="Book A Ticket" />
          </div>
        </div>

        {/*----------------------- Event 2 ---------------------------*/}

        {/* Div nội dung */}
        <div className="flex items-center justify-center space-x-6 p-4">
          <div className="w-[586px] p-10 h-[300px]">
            <span className="flex items-center text-orangeCustom mb-1">
              <CiCalendar />
              <p className="font-outfit ml-1">12-20 June</p>
            </span>
            <h2 className="text-3xl font-medium mb-3">
              Weekend Picnic Camping
            </h2>
            <p className="text-lg leading-6 font-outfit mb-4">
              Camping inilla duiman at elit finibus viverra nec a lacus miss the
              nesun seneoice misuscipit non sagie the fermen ziverra tristiue
              duru iviten onen nivami in the miss acsestion.
            </p>
            <CustomButton2 text="Book A Ticket" />
          </div>
          {/* Div chứa ảnh */}
          <div className="w-[586px] h-[330px] overflow-hidden rounded-lg">
            <img
              src="https://duruthemes.com/demo/html/bycamp/img/slider/05.jpg" // Đổi URL này thành đường dẫn ảnh của bạn
              alt="Sample"
              className="w-full transition-transform duration-1000 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>

        {/*----------------------- Event 3 ---------------------------*/}
        <div className="flex items-center justify-center space-x-6 p-4">
          {/* Div chứa ảnh */}
          <div className="w-[586px] h-[330px] overflow-hidden rounded-lg">
            <img
              src="https://duruthemes.com/demo/html/bycamp/img/slider/06.jpg" // Đổi URL này thành đường dẫn ảnh của bạn
              alt="Sample"
              className="w-full transition-transform duration-1000 ease-in-out transform hover:scale-110"
            />
          </div>

          {/* Div nội dung */}
          <div className="w-[586px] p-10 h-[300px]">
            <span className="flex items-center text-orangeCustom mb-1">
              <CiCalendar />
              <p className="font-outfit ml-1">12-20 June</p>
            </span>
            <h2 className="text-3xl font-medium mb-3">Trekking and Camp</h2>
            <p className="text-lg leading-6 font-outfit mb-4">
              Camping inilla duiman at elit finibus viverra nec a lacus miss the
              nesun seneoice misuscipit non sagie the fermen ziverra tristiue
              duru iviten onen nivami in the miss acsestion.
            </p>
            <CustomButton2 text="Book A Ticket" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
