import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { RoundIconButton1 } from "./Button";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [iconOffset, setIconOffset] = useState(0);

  // Tạo hiệu ứng icon chạy ngang
  useEffect(() => {
    const interval = setInterval(() => {
      setIconOffset((prevOffset) => (prevOffset === -100 ? 0 : prevOffset - 1));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const socialIcons = [
    <FaFacebookF size={25} />,
    <FaTwitter size={25} />,
    <FaInstagram size={25} />,
    <FaLinkedinIn size={25} />,
    <FaYoutube size={25} />,
    <FaPinterestP size={25} />,
  ];

  return (
    <footer className="mt-8 ">
      {/* Icon chạy ngang */}
      <div className="bg-greenCustom text-white h-[120px]  py-5 overflow-hidden">
        <div
          className="flex w-max animate-scroll"
          style={{ transform: `translateX(${iconOffset}px)` }}
        >
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="flex space-x-8 mx-[10%]">
                {socialIcons.map((icon, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center w-[80px] h-[80px]  text-[#fff]"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>

      {/* Footer chính */}
      <div className="bg-white h-[360px] px-[15%] flex gap-[100px] justify-between py-10">
        {/* Cột 1: Logo, mô tả và icon */}
        <div className="flex flex-col space-y-4">
          <img
            src="https://i.pinimg.com/control/564x/72/6e/e9/726ee946502e188083b0d1ca19b7a69c.jpg"
            alt="logo"
            className="w-[60px] h-auto"
          />
          <p className="text-gray-600 font-outfit">
            Welcome to JoyQuest, your ultimate destination for exciting games
            and fun adventures.
          </p>
          <div className="flex space-x-4">
            <RoundIconButton1 defaultIcon={<FaInstagram />} />
            <RoundIconButton1 defaultIcon={<FaYoutube />} />
            <RoundIconButton1 defaultIcon={<FaFacebookF />} />
          </div>
        </div>

        {/* Cột 2: Contact */}
        <div className="flex flex-col space-y-4">
          <h3 className=" text-lg">Contact Us</h3>
          <p className="text-gray-600 font-outfit">
            123 JoyQuest Avenue, Adventure City
          </p>
          <p className="text-gray-600 font-outfit">Phone: +1 234 567 890</p>
          <p className="text-gray-600 font-outfit">Email: info@joyquest.com</p>
        </div>

        {/* Cột 3: Subscribe */}
        <div className="flex flex-col space-y-4">
          <h3 className=" text-lg">Subscribe</h3>
          <p className="text-gray-600 font-outfit">
            Stay updated with the latest games and offers by subscribing to our
            newsletter.
          </p>
          <div className="flex relative w-[350px]">
            <input
              type="Email Address"
              placeholder="Enter your email"
              className="border font-outfit bg-white w-[350px] border-greenCustom rounded-full px-6 py-3 "
            />
            <span className="absolute right-1">
              <RoundIconButton1 defaultIcon={<MdArrowOutward />} />
            </span>
          </div>
        </div>
      </div>

      {/* Footer dưới */}
      <div className="h-[110px] bg-[#f4f3f5] flex items-center justify-center ">
        <p className="text-center text-sm font-outfit">
          &copy; 2024 JoyQuest. All rights reserved. | Terms & Conditions |
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
