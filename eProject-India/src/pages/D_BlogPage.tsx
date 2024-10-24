import React, { useState } from "react";
import { blogs, Blog } from "../../data/blogs";
import { BlogCard } from "../components/BlogCard";
import Pagination from "../components/D_Pagination";
import RecentlyViewed from "../components/D_RecentlyViewed";
import D_SearchBlog from "../components/D_SearchBlog";
import D_RecentlyViewedHandler from "../components/D_RecentlyViewedHandler";

const ITEMS_PER_PAGE = 4; // Adjust to display 4 items per page

const D_BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<Blog[]>(blogs);

  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = searchResults.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div>
      {/* Banner Header */}
      <div
        className="relative h-60 md:h-96 bg-fixed bg-center bg-cover flex justify-center items-center"
        style={{
          backgroundImage:
            'url("https://duruthemes.com/demo/html/bycamp/img/slider/04.jpg")',
        }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full flex justify-center items-center">
          <h3 className="text-5xl text-white">Camping Blog</h3>
        </div>
      </div>

      {/* Search bar is only visible on mobile and tablet */}
      <div className="flex justify-center mx-3">
        <div className="w-full mr-4 lg:hidden pt-16 pb-8">
          <D_SearchBlog
            blogs={blogs}
            setSearchResults={(results) => {
              setSearchResults(results);
              setCurrentPage(1); // Reset to the first page after search
            }}
          />
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center lg:pt-16 pb-16 mx-6 lg:mx-10">
        {/* All Section */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Left Section - Blog Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:pl-12 lg:pl-0 lg:gap-6">
              {currentItems.map((blog) => (
                <D_RecentlyViewedHandler
                  key={blog.id}
                  post={{
                    id: blog.id,
                    title: blog.title,
                    imageUrl: blog.imageUrl,
                  }}
                >
                  <BlogCard
                    id={blog.id}
                    title={blog.title}
                    description={blog.description}
                    imageUrl={blog.imageUrl}
                    date={blog.date}
                  />
                </D_RecentlyViewedHandler>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center items-center mt-10">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>

          {/* Right Section - Search and Recent Posts */}
          <div className="flex flex-col items-center lg:w-1/3 space-y-8">
            {/* D_SearchBlog for searching blog posts */}
            <div className="w-full mr-4 hidden lg:block">
              <D_SearchBlog
                blogs={blogs}
                setSearchResults={(results) => {
                  setSearchResults(results);
                  setCurrentPage(1); // Reset to the first page after search
                }}
              />
            </div>
            <RecentlyViewed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default D_BlogPage;
