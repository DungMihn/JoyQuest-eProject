import React from "react";
import GoogleMap from "../components/GoogleMap";
import ContactThumbnail from "../components/ContactThumbnail";
import GetInTouch from "../components/GetInTouch";

const ContactPage: React.FC = () => {
  return (
    <div className="pb-10">
      <ContactThumbnail />
      <div className="mx-5 md:mx-[10%] mt-[100px] md:mt-[200px]">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex-1">
            <GoogleMap />
          </div>
          <div className="flex-1">
            <GetInTouch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
