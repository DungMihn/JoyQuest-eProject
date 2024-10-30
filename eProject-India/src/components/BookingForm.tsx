import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CustomButton } from "./Button";
import { BsCalendar2Check } from "react-icons/bs";
import { IoInformationCircle } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  contactNumber: string;
  reservationType: string;
  checkIn: string;
  checkOut: string;
  additionalNote: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted successfully:", data);
    onClose(); // Close the form after submission
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`booking-form w-full max-w-xl md:max-w-2xl lg:max-w-4xl mx-4 sm:mx-8 relative transform transition-transform duration-300 mt-[80px] ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <div className="flex justify-between items-center text-[#fff] p-4 sm:p-6 md:p-8 mb-4 bg-greenCustom">
          <h2 className="text-[18px] sm:text-[20px] md:text-[24px]">
            Book A Place
          </h2>
          <button onClick={onClose}>
            <IoMdClose size={24} className="sm:size-30" />
          </button>
        </div>
        <form
          className="space-y-4 px-4 sm:px-6 md:px-8 pb-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-outfit">
            <div>
              <input
                {...register("fullName", {
                  required: "Full Name is required",
                  minLength: {
                    value: 2,
                    message: "Full Name must be at least 2 characters long",
                  },
                })}
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] font-outfit border"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm font-outfit">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] font-outfit border"
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-outfit">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-outfit">
            <div>
              <input
                {...register("contactNumber", {
                  required: "Contact Number is required",
                  pattern: {
                    value: /^\d{10,15}$/,
                    message: "Phone must be 10-15 digits",
                  },
                })}
                type="tel"
                placeholder="Contact Number"
                className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] font-outfit border"
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-sm font-outfit">
                  {errors.contactNumber.message}
                </p>
              )}
            </div>
            <div>
              <select
                {...register("reservationType", {
                  required: "Reservation Type is required",
                })}
                className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] font-outfit border"
              >
                <option className="font-outfit " value="">
                  Reservation Type
                </option>
                <option className="font-outfit">Single Room</option>
                <option className="font-outfit">Double Room</option>
                <option className="font-outfit">Suite</option>
              </select>
              {errors.reservationType && (
                <p className="text-red-500 text-sm font-outfit">
                  {errors.reservationType.message}
                </p>
              )}
            </div>
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
                {...register("checkIn", {
                  required: "Check In date is required",
                })}
                type="date"
                className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border font-outfit"
              />
              {errors.checkIn && (
                <p className="text-red-500 text-sm font-outfit">
                  {errors.checkIn.message}
                </p>
              )}
            </div>
            <div>
              <label
                className="block p-2 text-sm sm:text-base"
                htmlFor="checkOut"
              >
                Check Out
              </label>
              <input
                {...register("checkOut", {
                  required: "Check Out date is required",
                })}
                type="date"
                className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border font-outfit"
              />
              {errors.checkOut && (
                <p className="text-red-500 text-sm font-outfit">
                  {errors.checkOut.message}
                </p>
              )}
            </div>
          </div>
          <textarea
            {...register("additionalNote")}
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
