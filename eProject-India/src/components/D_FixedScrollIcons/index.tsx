import React from 'react';
import { FaFacebookMessenger, FaPhone } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const D_FixedScrollIcons: React.FC = () => {
  return (
    <div className="fixed bottom-36 right-4 flex flex-col space-y-3">
      <a
        href="https://m.me"
        className="bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
      >
        <FaFacebookMessenger size={24} />
      </a>
      <a
        href="https://zalo.me"
        className="bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600 transition transform hover:scale-105"
      >
        <SiZalo size={24} />
      </a>
      <a
        href="tel:+123456789"
        className="bg-blue-700 text-white rounded-full p-2 shadow-lg hover:bg-blue-800 transition transform hover:scale-105"
      >
        <FaPhone size={24} />
      </a>
    </div>
  );
};

export default D_FixedScrollIcons;
