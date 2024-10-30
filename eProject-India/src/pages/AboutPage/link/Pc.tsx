import { Link } from "react-router-dom";
import "./All.css";
import { IoArrowForward } from "react-icons/io5";
import a from "../../../assets/img/a.jpg";
import b from "../../../assets/img/b.jpg";
import c from "../../../assets/img/c.jpg";
import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Pc: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<
    number | null
  >(null);
  const images = [a, b, c];
  const handleClick = (index: number) => {
    setSelectedImageIndex(index);
  };
  const handleClose = () => {
    setSelectedImageIndex(null);
  };
  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };
  const handlePreviousImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length
      );
    }
  };
  return (
    <>
      <section className="pt-0">
        <div className="H-title">
          <div className="w-full h-full flex flex-column justify-content-center bg-black bg-opacity-50">
            <div className="col-md-12">
              <h3 className="text-5xl text-white ms-5">Standard Tent</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="flex justify-content-center gap-x-2 ">
          <div className="flex flex-col w-[60%] gap-y-6">
            <h2>Standard Tent</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              posuere, velit sit amet viverra faucibus, est velit semper nunc,
              vel gravida nisi diam at ex.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              saepe repellat quas animi maxime ratione assumenda dolorem minima
              optio quaerat dicta, nam et suscipit dolorum! Cupiditate molestias
              magnam laudantium veritatis?
            </p>
            <h2>Our Standard Tents</h2>{" "}
            <div className="flex justify-content-around gap-4">
              <div className="overflow-hidden rounded">
                <img
                  onClick={() => handleClick(0)}
                  className="a"
                  src={a}
                  alt="img"
                />
              </div>
              <div className="overflow-hidden rounded">
                <img
                  onClick={() => handleClick(1)}
                  className="a"
                  src={b}
                  alt="img"
                />
              </div>
            </div>
            <div className="flex justify-content-around">
              <div className="overflow-hidden rounded">
                <img
                  onClick={() => handleClick(2)}
                  className="b"
                  src={c}
                  alt="img"
                />
              </div>
            </div>
            {selectedImageIndex !== null && (
              <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black bg-opacity-75">
                <div className="relative w-full max-w-4xl">
                  <span
                    className="absolute -top-10 right-0 text-white text-3xl cursor-pointer"
                    onClick={handleClose}
                  >
                    &times;
                  </span>
                  <img
                    className="w-[60rem]"
                    src={images[selectedImageIndex]}
                    alt="img"
                  />
                  <div>
                    <button
                      className="absolute left-0"
                      onClick={handleNextImage}
                    >
                      <FaArrowAltCircleLeft size={20} />
                    </button>
                    <button
                      className="absolute right-0"
                      onClick={handlePreviousImage}
                    >
                      <FaArrowAltCircleRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Accomodation */}
          <div className="relative -top-[232px]">
            <div className="bg-lime-600 py-10 rounded-t-xl w-[20rem]">
              <h3 className="text-white text-center ">Accommodations</h3>
            </div>
            <div className="shadow rounded-b-xl">
              <div className="p-10 flex flex-column">
                <div className="arrow flex hover:text-orange-400 cursor-pointer justify-content-between py-2">
                  <span className="items-center flex justify-content-center">
                    <Link to={"*"}>Mini Cabins</Link>{" "}
                  </span>
                  <div className="p-2">
                    <IoArrowForward size={20} />
                  </div>
                </div>
                <hr />
                <div className="arrow flex hover:text-orange-400 cursor-pointer justify-content-between py-2">
                  <span className="items-center flex justify-content-center">
                    <Link to={"*"}>Mini Cabins</Link>{" "}
                  </span>
                  <div className="p-2">
                    <IoArrowForward size={20} />
                  </div>
                </div>
                <hr />
                <div className="arrow flex hover:text-orange-400 cursor-pointer justify-content-between py-2">
                  <span className="items-center flex justify-content-center">
                    <Link to={"*"}>Mini Cabins</Link>{" "}
                  </span>
                  <div className="p-2">
                    <IoArrowForward size={20} />
                  </div>
                </div>
                <hr />
                <div className="arrow flex hover:text-orange-400 cursor-pointer justify-content-between py-2">
                  <span className="items-center flex justify-content-center">
                    <Link to={"*"}>Mini Cabins</Link>{" "}
                  </span>
                  <div className="p-2">
                    <IoArrowForward size={20} />
                  </div>
                </div>
                <hr />
                <div className="arrow flex hover:text-orange-400 cursor-pointer justify-content-between py-2">
                  <span className="items-center flex justify-content-center">
                    <Link to={"*"}>Mini Cabins</Link>{" "}
                  </span>
                  <div className="p-2">
                    <IoArrowForward size={20} />
                  </div>
                </div>
                <hr />
                <div className="arrow flex hover:text-orange-400 cursor-pointer justify-content-between py-2">
                  <span className="items-center flex justify-content-center">
                    <Link to={"*"}>Mini Cabins</Link>{" "}
                  </span>
                  <div className="p-2">
                    <IoArrowForward size={20} />
                  </div>{" "}
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pc;
