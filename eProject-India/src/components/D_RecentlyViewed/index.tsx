import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Blog {
  id: number; // Ensure 'id' exists for navigation
  title: string;
  imageUrl: string;
}

const RecentlyViewed: React.FC = () => {
  const [recentPosts, setRecentPosts] = useState<Blog[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const updatePosts = () => {
      const savedPosts = localStorage.getItem("recentPosts");
      if (savedPosts) {
        setRecentPosts(JSON.parse(savedPosts));
      }
    };

    updatePosts();
    window.addEventListener("storage", updatePosts);

    return () => window.removeEventListener("storage", updatePosts);
  }, []);

  // Handle navigation to blog page by ID
  const handleClick = (id: number) => {
    console.log("Navigating to:", id); // Debugging line
    navigate(`/blog/${id}`);
  };

  const renderRecentlyViewed = () =>
    recentPosts.slice(0, 3).map((post) => (
      <div
        key={post.id}
        className="flex items-center gap-3 mb-3 cursor-pointer duration-500 ease-in-out hover:shadow-lg hover:translate-y-[-3px]"
        onClick={() => handleClick(post.id)}
      >
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-[60px] h-[60px] rounded-md object-cover"
        />
        <p className="text-sm font-semibold">{post.title}</p>
      </div>
    ));

  return (
    <div className="w-full h-[350px] bg-white p-4 rounded-md shadow-lg">
      <h2 className="text-xl font-bold my-4">Recently Viewed</h2>
      <hr className="py-4 " />
      {renderRecentlyViewed()}
    </div>
  );
};

export default RecentlyViewed;
