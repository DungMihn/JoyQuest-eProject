import Accomodation from "../components/Accomodation";
import BannerVideo from "../components/BannerVideo";
import About from "../components/About";
import PromoVideo from "../components/PromoVideo";
import Activity from "../components/Activity";
import Events from "../components/Events";
import Testiominals from "../components/Testiominals";
import Blogs from "../components/Blogs";
import ItineraryBanner from "../components/ItineraryBanner";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-white">
        {/*-------------------------------- Banner Video -----------------------------------*/}
        <BannerVideo />
        {/*--------------------------------- About ------------------------------------------*/}
        <About />
        {/*--------------------------------- Accomodation ------------------------------------------*/}
        <Accomodation />
        {/*--------------------------------- Intinerary ------------------------------------------*/}
        <ItineraryBanner />
        {/*--------------------------------- Promo Video ------------------------------------------*/}
        <PromoVideo />
        {/*--------------------------------- Activity ------------------------------------------*/}
        <Activity />
        {/*--------------------------------- Events ------------------------------------------*/}
        <Events />
        {/*---------------------------------Testiomials ------------------------------------------*/}
        <Testiominals />
        {/*--------------------------------- Blogs ------------------------------------------*/}
        <Blogs />
      </div>
    </>
  );
};

export default Home;
