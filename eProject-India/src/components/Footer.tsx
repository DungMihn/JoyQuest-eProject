import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { RoundIconButton1 } from "./Button";
import Marquee from "react-marquee-slider";
import { ButtonLogo } from "./Button";
import { ButtonArrow } from "./Button";

const Footer: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const socialIcons = [
    "https://duruthemes.com/demo/html/bycamp/img/clients/4.svg",
    "https://duruthemes.com/demo/html/bycamp/img/clients/3.svg",
    "https://duruthemes.com/demo/html/bycamp/img/clients/5.svg",
    "https://duruthemes.com/demo/html/bycamp/img/clients/1.svg",
    "https://duruthemes.com/demo/html/bycamp/img/clients/2.svg",
  ];

  return (
    <footer className="">
      {/* Social Media Marquee */}
      <div className="bg-greenCustom text-white h-[120px] py-5 overflow-hidden px-4 md:px-[15%]">
        <Marquee
          velocity={50}
          resetAfterTries={200}
          direction="rtl"
          scatterRandomly={false}
          onInit={() => {}}
          onFinish={() => {}}
        >
          {socialIcons.map((icon, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-[120px] h-[80px] mx-2 md:mx-[50px]"
            >
              <img
                src={icon}
                alt={`Social icon ${i + 1}`}
                className="w-full h-full"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Footer Content */}
      <div className="bg-white h-auto px-4 md:px-[15%] text-[16px] flex flex-col md:flex-row gap-10 justify-between py-10">
        <div className="flex flex-col space-y-4">
          <ButtonLogo />
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

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg">Contact Us</h3>
          <p className="text-gray-600 font-outfit">
            115 Le Thanh Ton, Thach Thang, Hai Chau, Da Nang, Vietnam
          </p>
          <p className="text-gray-600 font-outfit">Phone: +1 234 567 890</p>
          <p className="text-gray-600 font-outfit">Email: info@joyquest.com</p>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg">Subscribe</h3>
          <p className="text-gray-600 font-outfit">
            Stay updated with the latest games and offers by subscribing to our
            newsletter.
          </p>
          <div
            className="flex relative w-full max-w-[350px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className={`border font-outfit text-xs lg:text-[16px] bg-white w-full rounded-full px-6 py-3 ${
                isFocused ? "border-none" : "border-greenCustom"
              }`}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <span className="absolute right-1 bottom-[2px]">
              <ButtonArrow isHovered={isHovered} />
            </span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="h-[110px] bg-[#f4f3f5] flex items-center justify-center">
        <p className="text-center text-sm font-outfit">
          &copy; 2024 JoyQuest. All rights reserved. | Terms & Conditions |
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;