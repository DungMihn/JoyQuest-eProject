import { FaFire } from "react-icons/fa";
import { GiHiking } from "react-icons/gi";
import { LuTent } from "react-icons/lu";
import "./index.css";
import { MdCottage, MdOutlineStarPurple500 } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo1 from "../../assets/img/2.jpg";
import logo2 from "../../assets/img/3.jpg";
import scale from "../../assets/img/img.png";
import { Link } from "react-router-dom";
const About = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease",
    arrows: false,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease",
    swipeToSlide: true,
  };
  return (
    <>
      {/* About the byCamp */}
      {/* //////////////////////////////////////////////////////// */}
      <section className="relative bg-cover pt-0">
        <div className="H-img">
          <div className="w-full h-full flex flex-column justify-content-center bg-black bg-opacity-50">
            <div className="col-md-12">
              <h3 className="text-5xl text-white ms-5">About us</h3>
            </div>
          </div>
        </div>
        <div className="mx-auto pt-16">
          <div className="flex justify-content-center column-gap-4">
            <div className="col-5">
              <div className="flex gap-2 align-items-center">
                <GiHiking
                  size={50}
                  className="bg-orange-500 rounded-full text-white"
                />
                Camp & Trail
              </div>
              <h2 className="mb-3">About the byCamp</h2>
              <p>
                ByCamp is a unique and creative platform designed to connect
                people from different cultures, backgrounds, and abilities. Our
                mission is to foster a sense of belonging, empowerment, and
                connection between people.
              </p>
              <div className="flex justify-content-between">
                <div>
                  <LuTent color="green" size={100} name="Tents Rent" />
                  <div className="text-center font-semibold text-xl text-lime-700">
                    Tents Rent
                  </div>
                </div>
                <div>
                  <GiHiking color="green" size={100} name="Activities" />
                  <div className="text-center font-semibold text-xl text-lime-700">
                    Activities
                  </div>
                </div>
                <div>
                  <FaFire color="green" size={100} name="Firewoods" />
                  <div className="text-center font-semibold text-xl text-lime-700">
                    Firewoods
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="overflow-hidden position-relative  rounded">
                <img className="img rounded" src={scale} alt="img compoment" />
                <div className="float-box animation-float text-white flex justify-content-between w-[200px]">
                  <GiHiking size={40} />
                  <div className="text-right">
                    <div className="text-lg fw-bold">Let's Camp!</div>
                    <div>nature lovers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Where To Stay */}
      {/* //////////////////////////////////////////////////////// */}
      <section className="bg-neutral-100">
        <div className="container">
          <div className="col-md-6 text-center mx-auto">
            <div className="flex justify-content-center align-items-center column-gap-2 uppercase">
              <GiHiking
                size={50}
                className="bg-orange-500 rounded-full text-white"
              />
              What We Offer
            </div>
            <h2 className="mb-5">Where To Stay</h2>
          </div>
          <div className="flex justify-content-center column-gap-4">
            <div className="H-button col-3 h-32 flex justify-content-center">
              <span>
                <MdCottage color="green" size={60} className="me-3" />
              </span>
              <div>
                <Link
                  to={"/about/privatecottages"}
                  className="text-xl font-semibold"
                >
                  Private Cottages
                </Link>
                <div className="text-left">
                  Lorem ipsum varius natosuen miss magnis sarturien monte
                  nascete in the fermen.
                </div>
              </div>
            </div>
            <div className="H-button col-3 h-32 flex justify-content-center">
              <span>
                <MdCottage color="green" size={60} className="me-3" />
              </span>
              <div>
                <Link
                  to={"/about/tentswtithteritory"}
                  className="text-xl font-semibold"
                >
                  Tents With Territory
                </Link>
                <div className="text-left">
                  Lorem ipsum varius natosuen miss magnis sarturien monte
                  nascete in the fermen.
                </div>
              </div>
            </div>
            <div className="H-button col-3 h-32 flex justify-content-center">
              <span>
                <MdCottage color="green" size={60} className="me-3" />
              </span>
              <div>
                <Link
                  to={"/about/conpacttrailers"}
                  className="text-xl font-semibold"
                >
                  Compact Trailers
                </Link>
                <div className="text-left">
                  Lorem ipsum varius natosuen miss magnis sarturien monte
                  nascete in the fermen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Meet Our Team */}
      {/* //////////////////////////////////////////////////////// */}
      <section className="">
        <div>
          <div className="col-md-6 mx-auto text-center">
            <div className="flex justify-content-center align-items-center column-gap-2 uppercase">
              <GiHiking
                size={50}
                className="bg-orange-500 rounded-full text-white"
              />
              Our Seniors
            </div>
            <h2 className="mb-5">Meet Our Team</h2>
          </div>
          <div className="H-slider-container2 hover:cursor-grab mx-auto col-lg-6 col-md-12 text-center">
            <Slider {...settings2}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* Recommended */}
      {/* //////////////////////////////////////////////////////// */}
      <section className="relative H-slider-container bg-cover py-0">
        <div className=" bg-black bg-opacity-50 w-full flex flex-col justify-center h-full">
          <div className="flex justify-content-center">
            <div className=" col-lg-6 col-md-12 text-center">
              <Slider {...settings1}>
                <div>
                  <div className="flex justify-content-center">
                    <MdOutlineStarPurple500 color="orange" />
                    <MdOutlineStarPurple500 color="orange" />
                    <MdOutlineStarPurple500 color="orange" />
                    <MdOutlineStarPurple500 color="orange" />
                    <MdOutlineStarPurple500 color="orange" />
                  </div>
                  <h3>Highly recommended!</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim adipisci similique, ipsum, accusamus aut aspernatur
                    voluptates ullam rem deleniti magnam aliquam sequi tempora
                    ea dolore placeat maiores reprehenderit quae commodi!
                  </p>
                  <img
                    src={logo1}
                    alt="Logo"
                    className="w-12 h-12 mx-auto rounded-full border-green-300 border-2 p-1"
                  />
                  <div className="mx-auto">@Robert</div>
                </div>
                <div>
                  <div className="flex justify-content-center">
                    <MdOutlineStarPurple500 color="orange" />
                    <MdOutlineStarPurple500 color="orange" />
                    <MdOutlineStarPurple500 color="orange" />
                    <MdOutlineStarPurple500 color="orange" />
                    <MdOutlineStarPurple500 color="orange" />
                  </div>
                  <h3>A Unique Camping!</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Placeat unde non illo odio assumenda totam, veniam minus
                    impedit deleniti exercitationem obcaecati, recusandae error
                    sit est soluta culpa tenetur corrupti qui?
                  </p>
                  <img
                    src={logo2}
                    alt="Logo"
                    className="w-12 h-12 mx-auto rounded-full border-green-300 border-2 p-1"
                  />
                  <div className="mx-auto">@EmilyDan</div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="col-md-6 mx-auto text-center">
            <div className="flex justify-content-center align-items-center column-gap-2 uppercase">
              <GiHiking
                size={50}
                className="bg-orange-500 rounded-full text-white"
              />
              What We're Offering
            </div>
            <h2 className="mb-5">Our Activities</h2>
          </div>
          <div className="H-slider-container2 hover:cursor-grab mx-auto col-lg-6 col-md-12 text-center">
            <Slider {...settings2}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
