import { useForm, SubmitHandler } from "react-hook-form";
import { CustomButton } from "./Button";
import { IoMdPaperPlane } from "react-icons/io";

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function GetInTouch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="px-5 md:px-8 w-full max-w-[550px] h-auto">
      <h3 className="text-[24px] mb-4">Get in Touch</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-4 font-outfit">
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Name *"
            className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
          />
          {errors.name && (
            <p className="text-red-500 text-sm font-outfit">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4 font-outfit">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            placeholder="e-Mail *"
            className="w-full md:w-1/2 px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
          />
          {errors.email && (
            <p className="text-red-500 text-sm font-outfit">
              {errors.email.message}
            </p>
          )}

          <input
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^\d{10,15}$/,
                message: "Phone must be 10-15 digits",
              },
            })}
            type="text"
            placeholder="Phone *"
            className="w-full md:w-1/2 px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm font-outfit">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4 font-outfit">
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
          />
        </div>

        <textarea
          {...register("message")}
          placeholder="Message"
          className="w-full font-outfit px-4 py-2 rounded-2xl placeholder:text-black bg-[#fff] border-[#ccc] border h-32"
        ></textarea>

        <button type="submit" className="w-full">
          <CustomButton icon={<IoMdPaperPlane size={20} />} text="Submit" />
        </button>
      </form>
    </div>
  );
}

export default GetInTouch;
