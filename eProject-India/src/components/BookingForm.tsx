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
      className={`fixed inset-0 bg-gray-900 bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`booking-form w-full max-w-xl md:max-w-2xl lg:max-w-4xl mx-4 sm:mx-8 relative transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <div className="flex justify-between items-center text-[#fff] p-4 sm:p-6 md:p-8 mb-4 bg-greenCustom rounded-t-lg">
          <h2 className="text-[18px] sm:text-[20px] md:text-[24px]">
            Book A Place
          </h2>
          <button onClick={onClose}>
            <IoMdClose size={24} className="sm:size-30" />
          </button>
        </div>
        <form className="space-y-4 px-4 sm:px-6 md:px-8 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-outfit">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-outfit">
            <input
              type="tel"
              placeholder="Contact Number"
              required
              className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
            />
            <select
              required
              className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
            >
              <option value="">Reservation Type</option>
              <option>Single Room</option>
              <option>Double Room</option>
              <option>Suite</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block p-2 text-sm sm:text-base"
                htmlFor="checkIn"
              >
                Check In
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border font-outfit"
              />
            </div>
            <div>
              <label
                className="block p-2 text-sm sm:text-base"
                htmlFor="checkOut"
              >
                Check Out
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border font-outfit"
              />
            </div>
          </div>
          <textarea
            placeholder="Additional Note"
            className="w-full font-outfit px-4 py-2 rounded-2xl placeholder:text-black bg-[#fff] border-[#ccc] border h-32"
          ></textarea>
          <div className="flex flex-col md:flex-row items-start md:items-center p-4 sm:p-5 gap-y-4 md:gap-y-0 gap-x-4">
            <p className="font-outfit w-full md:w-[55%] text-[14px] sm:text-[16px] flex items-center">
              <IoInformationCircle size={24} className="mr-2" />
              We are committed to protecting your privacy. We will never collect
              information about you without your explicit consent.
            </p>
            <CustomButton
              icon={<BsCalendar2Check size={20} />}
              text="Book Your Stay Now"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
