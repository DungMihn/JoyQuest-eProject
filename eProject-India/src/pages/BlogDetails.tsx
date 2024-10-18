import { useParams } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { IoIosCalendar } from "react-icons/io";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";
import { CustomButton } from "../components/Button";

function BlogDetails() {
  const { id } = useParams<{ id: string }>();
  const blogId = Number(id);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div>
      <div
        className="h-[382px] relative"
        style={{
          backgroundImage: `url(${blog.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full max-w-[1000px] h-full px-5 md:px-[10%] top-1/3 z-20 flex flex-col items-start">
          <span className="text-[30px] md:text-[45px] z-20 text-[#fff]">
            {blog.title}
          </span>
          <div className="flex gap-5 py-5">
            <div className="flex gap-2">
              <img
                src={blog.writer_image}
                alt="avatar"
                className="w-8 h-8 rounded-full border-greenCustom border-2"
              />
              <span className="block text-white font-outfit">
                @{blog.writer_name}
              </span>
            </div>
            <div className="flex gap-2">
              <IoIosCalendar size={25} className="text-greenCustom" />
              <span className="text-white text-sm font-outfit">
                {blog.date}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="p-5 md:p-10 pt-[100px] px-5 md:px-[10%] text-[16px] md:text-[18px]">
        <p className="text-gray-700 mb-10 font-outfit">{blog.content}</p>
        <div className="relative text-[#fff] bg-greenCustom rounded-xl p-5 md:p-14 mb-10 font-outfit">
          {blog.description}
          <MdOutlineSpeakerNotes
            size={80}
            className="absolute opacity-50 right-0 top-0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          {blog.images.map((image) => (
            <img
              key={image.id}
              src={image.image}
              alt="Blog related"
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
      {/* Comment Section */}
      <div className="p-5 md:p-8 bg-[#f1f1f1] py-[50px] md:py-[100px] px-5 md:px-[10%]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col md:flex-row gap-5 w-full md:w-[600px]">
            <img
              src={blog.writer_image}
              alt="avatar"
              className="w-[100px] h-[100px] rounded-full border-greenCustom border-3"
            />
            <div>
              <div className="flex gap-2">
                <span className="block text-greenCustom text-[18px]">
                  {blog.writer_name}
                </span>
                <div>
                  <span className="text-[12px] font-outfit">{blog.date}</span>
                </div>
              </div>
              <p className="font-outfit py-5">
                Camping ultricies nibh non dolor maximus sceleue interion
                molliser rana neque nec fermen.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl mb-6">Leave a Reply</h3>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  className="w-full md:w-1/2 px-4 py-4 rounded-full placeholder-gray-500 bg-white border border-gray-300 font-outfit"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  className="w-full md:w-1/2 px-4 py-4 rounded-full placeholder-gray-500 bg-white border border-gray-300 font-outfit"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Comment *"
                className="w-full px-4 py-4 rounded-3xl placeholder-gray-500 bg-white border border-gray-300 h-32 font-outfit"
                required
              ></textarea>
              <div>
                <CustomButton
                  icon={<IoMdPaperPlane size={20} />}
                  text="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
