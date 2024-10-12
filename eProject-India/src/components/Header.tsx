import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gameCategories } from "../../data/gameCategories";
import { ButtonBooking } from "./Button";

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`flex items-center justify-between h-[100px] px-[100px] shadow-md bg-white transition-all duration-300 ${
        isScrolled ? "fixed top-0 left-0 w-full z-50" : ""
      }`}
    >
      <div className="flex items-center">
        <div className="flex flex-col">
          <img
            src="https://i.pinimg.com/564x/54/5e/a3/545ea30090ee45ede06cfb8daf376b16.jpg"
            alt="logo"
            className="w-[55px] h-auto rounded-full"
          />
          <span className="text-xl font-bold">
            <span className="text-greenCustom">Joy</span>Quest
          </span>
        </div>
      </div>

      <nav className="flex space-x-6">
        <Link
          to="/home"
          className={`text-[16px] hover:text-orangeCustom ${
            isActive("/") ? "text-orangeCustom" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-[16px] hover:text-orangeCustom ${
            isActive("/about") ? "text-orangeCustom" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/itinerary"
          className={`text-[16px] hover:text-orangeCustom ${
            isActive("/itinerary") ? "text-orangeCustom" : ""
          }`}
        >
          Itinerary
        </Link>

        <div className="relative" onMouseEnter={handleMouseEnter}>
          <div
            className={`text-[16px] hover:text-orangeCustom ${
              isActive("/activities") ? "text-orangeCustom" : ""
            }`}
          >
            Activities
          </div>
          {showDropdown && (
            <ul
              className="absolute w-[200px] top-[30px] left-0 bg-white shadow-lg rounded-md"
              onMouseLeave={handleMouseLeave}
            >
              {gameCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/activities/${category.slug}`}
                    className="block font-outfit px-4 py-2 hover:text-orangeCustom"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link
          to="/faqs"
          className={`text-[16px] hover:text-orangeCustom ${
            isActive("/faqs") ? "text-orangeCustom" : ""
          }`}
        >
          FAQs
        </Link>
        <Link
          to="/blog"
          className={`text-[16px] hover:text-orangeCustom ${
            isActive("/blog") ? "text-orangeCustom" : ""
          }`}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className={`text-[16px] hover:text-orangeCustom ${
            isActive("/contact") ? "text-orangeCustom" : ""
          }`}
        >
          Contact
        </Link>
      </nav>

      <div>
        <ButtonBooking />
      </div>
    </header>
  );
};

export default Header;
