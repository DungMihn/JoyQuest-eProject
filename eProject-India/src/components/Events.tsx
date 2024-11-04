import { CiCalendar } from "react-icons/ci";
import { CustomButton2 } from "./Button";
import { GiHiking } from "react-icons/gi";
import React, { useState } from "react";
import BookingModal from "./BookingModel";

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({ name: "", date: "" });

  const openModal = (eventName: string, eventDate: string) => {
    setCurrentEvent({ name: eventName, date: eventDate });
    setIsModalOpen(true);
  };

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
      <div className="event-box mt-7">
        {/*----------------------- Event 1 ---------------------------*/}
        <div className="flex items-center justify-center space-x-6 p-4">
          <div className="w-[586px] md:h-[330px] overflow-hidden rounded-lg">
            <img
              src="https://duruthemes.com/demo/html/bycamp/img/slider/04.jpg"
              alt="Sample"
              className="w-full transition-transform duration-1000 ease-in-out transform hover:scale-110"
            />
          </div>
          <div className="w-[586px] lg:p-10 md:h-[300px]">
            <span className="flex items-center text-orangeCustom mb-1">
              <CiCalendar />
              <p className="font-outfit ml-1">12-20 June</p>
            </span>
            <h2 className="w-[100px] text-[15px] md:text-3xl font-medium mb-3">
              Kid Summer Camp
            </h2>
            <p className="hidden md:block text-lg leading-6 font-outfit mb-4">
              Camping inilla duiman at elit finibus viverra nec a lacus miss the
              nesun seneoice misuscipit non sagie the fermen ziverra tristiue
              duru iviten onen nivami in the miss acsestion.
            </p>
            <CustomButton2
              text="Book A Ticket"
              onClick={() => openModal("Kid Summer Camp", "12-20 June")}
            />
          </div>
        </div>

        {/*----------------------- Event 2 ---------------------------*/}
        <div className="flex items-center justify-center space-x-6 p-4 md:flex-row lg:flex-row-reverse">
          <div className="w-[586px] md:h-[330px] overflow-hidden rounded-lg">
            <img
              src="https://duruthemes.com/demo/html/bycamp/img/slider/05.jpg"
              alt="Sample"
              className="w-full transition-transform duration-1000 ease-in-out transform hover:scale-110"
            />
          </div>
          <div className="w-[586px] lg:p-10 md:h-[300px]">
            <span className="flex items-center text-orangeCustom mb-1">
              <CiCalendar />
              <p className="font-outfit ml-1">12-20 June</p>
            </span>
            <h2 className="w-[100px] text-[15px] md:text-3xl font-medium mb-3">
              Weekend Picnic Camping
            </h2>
            <p className="hidden md:block text-lg leading-6 font-outfit mb-4">
              Camping inilla duiman at elit finibus viverra nec a lacus miss the
              nesun seneoice misuscipit non sagie the fermen ziverra tristiue
              duru iviten onen nivami in the miss acsestion.
            </p>
            <CustomButton2
              text="Book A Ticket"
              onClick={() => openModal("Weekend Picnic Camping", "12-20 June")}
            />
          </div>
        </div>

        {/*----------------------- Event 3 ---------------------------*/}
        <div className="flex items-center justify-center space-x-6 p-4">
          <div className="w-[586px] md:h-[330px] overflow-hidden rounded-lg">
            <img
              src="https://duruthemes.com/demo/html/bycamp/img/slider/06.jpg"
              alt="Sample"
              className="w-full transition-transform duration-1000 ease-in-out transform hover:scale-110"
            />
          </div>
          <div className="w-[586px] lg:p-10 md:h-[300px]">
            <span className="flex items-center text-orangeCustom mb-1">
              <CiCalendar />
              <p className="font-outfit ml-1">12-20 June</p>
            </span>
            <h2 className="w-[100px] text-[15px] md:text-3xl font-medium mb-3">
              Trekking and Camp
            </h2>
            <p className="hidden md:block text-lg leading-6 font-outfit mb-4">
              Camping inilla duiman at elit finibus viverra nec a lacus miss the
              nesun seneoice misuscipit non sagie the fermen ziverra tristiue
              duru iviten onen nivami in the miss acsestion.
            </p>
            <CustomButton2
              text="Book A Ticket"
              onClick={() => openModal("Trekking and Camp", "12-20 June")}
            />
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        eventName={currentEvent.name}
        eventDate={currentEvent.date}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Events;
