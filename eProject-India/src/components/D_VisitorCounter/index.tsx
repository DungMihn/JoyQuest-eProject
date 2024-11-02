import React, { useEffect, useState } from "react";

const D_VisitorCounter: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    const visitKey = "visitorCount"; // Tên key lưu trữ lượt truy cập
    let visits = Number(localStorage.getItem(visitKey)) || 0;
    visits += 0.5; // Tăng lượt truy cập
    localStorage.setItem(visitKey, visits.toString());
    setVisitorCount(visits);

    console.log(`Visitor count increased to: ${visits}`); // Log kiểm tra
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 z-50 bg-orange-500 font-semibold text-[#fff] text-xs md:text-base p-1 px-4
                    rounded-tr-md shadow-md flex items-center space-x-2"
    >
      <span className="font-outfit">{Math.round(visitorCount)} Visitors</span>
    </div>
  );
};

export default D_VisitorCounter;
