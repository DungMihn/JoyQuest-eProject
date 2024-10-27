import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gameCategories } from "../../data/gameCategories";
import { ButtonBooking, ButtonLogo } from "./Button";
import { MdMenu, MdClose } from "react-icons/md";
import BookingForm from "./BookingForm";

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.includes(path);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header
      className={`flex items-center justify-between h-[60px] md:h-[100px] px-4 md:px-[100px] shadow-md bg-white transition-all duration-300 ${
        isScrolled ? "fixed top-0 left-0 w-full z-50" : ""
      }`}
    >
      {/* Logo Section */}
      <Link to={"/"} className="flex items-center">
        <ButtonLogo />
        <span className="text-xl font-bold ml-2 lg:block md:hidden">
          <span className="text-greenCustom">Joy</span>Quest
        </span>
      </Link>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-[5000]">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`fixed md:static top-0 left-0 w-full h-auto bg-white md:bg-transparent flex flex-col md:flex-row items-center justify-center md:space-x-2 lg:space-x-6 transition-transform duration-700 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 z-[4000]`}
      >
        <Link
          to="/"
          className={`text-[16px] md:text-[12px] lg:text-[16px] hover:text-orangeCustom ${
            isActive("/") ? "text-orangeCustom" : ""
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-[16px] md:text-[12px] lg:text-[16px] hover:text-orangeCustom ${
            isActive("/about") ? "text-orangeCustom" : ""
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/itinerary"
          className={`text-[16px] md:text-[12px] lg:text-[16px] hover:text-orangeCustom ${
            isActive("/itinerary") ? "text-orangeCustom" : ""
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Itinerary
        </Link>

        {/* Dropdown container */}
        <div
          className="relative z-[1050]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`text-[16px] md:text-[12px] lg:text-[16px] hover:text-orangeCustom ${
              isActive("/activities") ? "text-orangeCustom" : ""
            }`}
          >
            Activities
          </div>
          {showDropdown && (
            <ul className="absolute left-0 w-[200px] lg:block h-auto bg-white shadow-lg rounded-md mt-2 z-[1050]">
              {gameCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/activities/${category.slug}`}
                    className="block font-outfit px-4 py-2 hover:text-orangeCustom"
                    onClick={() => setIsMobileMenuOpen(false)}
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
          className={`text-[16px] md:text-[12px] lg:text-[16px] hover:text-orangeCustom ${
            isActive("/faqs") ? "text-orangeCustom" : ""
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          FAQs
        </Link>
        <Link
          to="/blog"
          className={`text-[16px] md:text-[12px] lg:text-[16px] hover:text-orangeCustom ${
            isActive("/blog") ? "text-orangeCustom" : ""
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className={`text-[16px] md:text-[12px] lg:text-[16px] hover:text-orangeCustom ${
            isActive("/contact") ? "text-orangeCustom" : ""
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>

      {/* Booking Button for Desktop */}
      <div className="hidden md:block lg:w-[200px] md:w-[150px]">
        <ButtonBooking onClick={openModal} />
        <BookingForm isOpen={isModalOpen} onClose={closeModal} />
      </div>

      {/* Mobile Menu Links
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white absolute top-[30px] left-0 right-0 shadow-lg z-[4000]">
          <Link
            to="/home"
            className={`text-[16px] hover:text-orangeCustom ${
              isActive("/") ? "text-orangeCustom" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-[16px] hover:text-orangeCustom ${
              isActive("/about") ? "text-orangeCustom" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/itinerary"
            className={`text-[16px] hover:text-orangeCustom ${
              isActive("/itinerary") ? "text-orangeCustom" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Itinerary
          </Link>
          <Link
            to="/faqs"
            className={`text-[16px] hover:text-orangeCustom ${
              isActive("/faqs") ? "text-orangeCustom" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link
            to="/blog"
            className={`text-[16px] hover:text-orangeCustom ${
              isActive("/blog") ? "text-orangeCustom" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`text-[16px] hover:text-orangeCustom ${
              isActive("/contact") ? "text-orangeCustom" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )} */}
    </header>
  );
};

export default Header;
