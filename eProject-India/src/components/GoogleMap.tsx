import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div className="w-full max-w-[550px] h-[450px] mb-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.6624477976796!2d108.22328251568285!3d16.069238788876704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b2c21a7cd7%3A0x276bfc0d1f10ed1!2s115%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20H%E1%BA%A3i%20Ch%C3%A2u%2C%20%C4%90%C3%A0%20N%E1%BA%B5ng%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1646760525018!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "20px" }}
        allowFullScreen
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
