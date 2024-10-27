import React from "react";

interface Blog {
  id: number; // Ensure 'id' exists for navigation
  title: string;
  imageUrl: string;
}

// Function to add a post to recent posts in localStorage
const addToRecentPosts = (post: Blog) => {
  const existingPosts = JSON.parse(localStorage.getItem("recentPosts") || "[]");

  // Filter out the clicked post if it already exists to avoid duplication
  const filteredPosts = existingPosts.filter(
    (p: Blog) => p.title !== post.title
  );

  // Add the post with the 'id'
  const updatedPosts = [
    { id: post.id, title: post.title, imageUrl: post.imageUrl },
    ...filteredPosts,
  ].slice(0, 10);

  localStorage.setItem("recentPosts", JSON.stringify(updatedPosts));
};

interface WrapperProps {
  post: Blog;
  children: React.ReactNode;
}

// Wrapper component to track when a BlogCard is clicked
const D_RecentlyViewedHandler: React.FC<WrapperProps> = ({
  post,
  children,
}) => {
  const handlePostClick = () => addToRecentPosts(post);

  return <div onClick={handlePostClick}>{children}</div>;
};

export default D_RecentlyViewedHandler;
