import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CustomButton } from "./Button";
import { BsCalendar2Check } from "react-icons/bs";
import { IoInformationCircle } from "react-icons/io5";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={` fixed inset-0 bg-gray-900 bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`booking-form rounded-lg w-full max-w-3xl relative transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <div className="flex justify-between items-center text-[#fff] p-8 mb-4 bg-greenCustom">
          <h2 className="text-[24px] ">Book A Place</h2>
          <button className=" " onClick={onClose}>
            <IoMdClose size={35} />
          </button>
        </div>
        <form className="space-y-4 mx-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-outfit">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
            />
            <input
              type="email"
              placeholder="Email Adress"
              className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-outfit">
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
            />
            <select className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border">
              <option className=" font-outfit">Reservation Type</option>
              <option className=" font-outfit">Single Room</option>
              <option className=" font-outfit">Double Room</option>
              <option className=" font-outfit">Suite</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label className="" htmlFor="checkOut">
                Check In
              </label>
              <input
                type="date"
                placeholder="Check In"
                className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border font-outfit"
              />
            </div>
            <div>
              <label className="" htmlFor="checkOut">
                Check Out
              </label>
              <input
                type="date"
                placeholder="Check Out"
                className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border font-outfit"
              />
            </div>
          </div>
          <textarea
            placeholder="Additional Note"
            className="w-full font-outfit px-4 py-2 rounded-2xl placeholder:text-black bg-[#fff] border-[#ccc] border h-32"
          ></textarea>
          <div className="flex p-4 gap-x-7">
            <p className="font-outfit w-[55%] text-[14px] flex ">
              <IoInformationCircle size={30} />
              We are committed to protecting your privacy. We will never collect
              information about you without your explicit consent.
            </p>

            <CustomButton
              icon={<BsCalendar2Check size={20} />}
              text=" Book Your Stay Now"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;