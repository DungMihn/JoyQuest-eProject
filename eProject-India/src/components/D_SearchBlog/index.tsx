import React, { useState } from "react";
import { Blog } from "../../../data/blogs";
import { CiSearch } from "react-icons/ci";

interface SearchBlogProps {
  blogs: Blog[];
  setSearchResults: React.Dispatch<React.SetStateAction<Blog[]>>;
}

const D_SearchBlog: React.FC<SearchBlogProps> = ({
  blogs,
  setSearchResults,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredBlogs = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.description.toLowerCase().includes(query)
    );

    setSearchResults(filteredBlogs);
  };

  return (
    <div className="flex justify-center items-center w-full bg-[#fff] p-4 mx-2 rounded-md shadow-lg">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={handleSearch}
          className="border rounded-full px-6 py-3 w-full pr-12"
        />
        <CiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
      </div>
    </div>
  );
};

export default D_SearchBlog;
