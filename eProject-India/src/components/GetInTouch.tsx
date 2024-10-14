import { CustomButton } from "./Button";
import { IoMdPaperPlane } from "react-icons/io";

function GetInTouch() {
  return (
    <div>
      <div className="px-8 w-[550px] h-[450px]">
        <h3 className="text-[24px] mb-4">Get in touch</h3>
        <form className="space-y-4">
          <div className="flex gap-4 font-outfit ">
            <input
              type="text"
              placeholder="Name *"
              className="w-full px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
            />
          </div>

          <div className="flex gap-4 font-outfit">
            <input
              type="email"
              placeholder="e-Mail *"
              className="w-1/2  px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
            />
            <input
              type="text"
              placeholder="Phone *"
              className="w-1/2  px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
            />
          </div>
          <div className="flex gap-4 font-outfit ">
            <input
              type="text"
              placeholder="Subject"
              className="w-full  px-4 py-2 rounded-full placeholder:text-black bg-[#fff] border-[#ccc] border"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full font-outfit px-4 py-2 rounded-2xl placeholder:text-black bg-[#fff] border-[#ccc] border h-32"
          ></textarea>
          <button type="submit" className="">
            <CustomButton icon={<IoMdPaperPlane size={20} />} text={`Submit`} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
