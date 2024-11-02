import About from "../components/About";
import Accomodation from "../components/Accomodation";
import Testimonials from "../components/Testiominals";
import Activity from "../components/Activity";
import PromoVideo from "../components/PromoVideo";
import OurTeam from "../components/OurTeam";

const AboutPage = () => {
  return (
    <>
      {/* ////////////////////////// Banner */}
      <div
        className="relative h-60 md:h-96 bg-fixed bg-center bg-cover flex justify-center items-center"
        style={{
          backgroundImage:
            'url("	https://duruthemes.com/demo/html/bycamp/img/slider/10.jpg")',
        }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full flex justify-center items-center">
          <h3 className="text-5xl text-white">Camping Blog</h3>
        </div>
      </div>
      <About />
      <Accomodation />
      <OurTeam />
      <Testimonials />
      <Activity />
      <PromoVideo />
    </>
  );
};

export default AboutPage;
