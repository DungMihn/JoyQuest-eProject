import { CustomButton } from "./Button";
import { IoMdPaperPlane } from "react-icons/io";

function GetInTouch() {
  return (
    <div className="px-5 md:px-8 w-full max-w-[550px] h-auto">
      <h3 className="text-[24px] mb-4">Get in Touch</h3>
      <form className="space-y-4">
        <div className="flex flex-col gap-4 font-outfit">
          <input
            type="text"
            placeholder="Name *"
            className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 font-outfit">
          <input
            type="email"
            placeholder="e-Mail *"
            className="w-full md:w-1/2 px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
          />
          <input
            type="text"
            placeholder="Phone *"
            className="w-full md:w-1/2 px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
          />
        </div>

        <div className="flex flex-col gap-4 font-outfit">
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
          />
        </div>

        <textarea
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
