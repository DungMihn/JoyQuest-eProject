import React from 'react';

const D_BlogPage: React.FC = () => {
  return (
    <div>
      {/* Section 1: Banner Header */}
      <div
        className="relative h-96 bg-fixed bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: 'url("https://duruthemes.com/demo/html/bycamp/img/slider/04.jpg")' }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full flex justify-center items-center">
          <h3 className="text-5xl text-white">Camping Blog</h3>
        </div>
      </div>

      {/* Middle Section: Blog Posts */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Item 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="img/blog/01.jpg" alt="" className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-gray-500">
                <i className="fa-regular fa-calendar-days mr-2"></i> 29 Dec 2024
              </span>
              <h5 className="font-bold text-lg mt-2">
                <a href="post.html" className="text-blue-600 hover:underline">How to Build a Campfire in 5 Easy Steps</a>
              </h5>
              <p className="text-gray-700 mt-1">Lorem ipsum dolor saten amet consecten adipiscing elit lobortis fermen.</p>
            </div>
          </div>
          {/* Blog Item 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="img/blog/02.jpg" alt="" className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-gray-500">
                <i className="fa-regular fa-calendar-days mr-2"></i> 27 Dec 2024
              </span>
              <h5 className="font-bold text-lg mt-2">
                <a href="post.html" className="text-blue-600 hover:underline">20 Things to Do Whe Camping (Actually Fun!)</a>
              </h5>
              <p className="text-gray-700 mt-1">Lorem ipsum dolor saten amet consecten adipiscing elit lobortis fermen.</p>
            </div>
          </div>
          {/* Blog Item 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="img/blog/03.jpg" alt="" className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-gray-500">
                <i className="fa-regular fa-calendar-days mr-2"></i> 25 Dec 2024
              </span>
              <h5 className="font-bold text-lg mt-2">
                <a href="post.html" className="text-blue-600 hover:underline">How to Clean Your Tent in 4 Simple Steps</a>
              </h5>
              <p className="text-gray-700 mt-1">Lorem ipsum dolor saten amet consecten adipiscing elit lobortis fermen.</p>
            </div>
          </div>
          {/* Blog Item 4 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="img/blog/04.jpg" alt="" className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-gray-500">
                <i className="fa-regular fa-calendar-days mr-2"></i> 23 Dec 2024
              </span>
              <h5 className="font-bold text-lg mt-2">
                <a href="post.html" className="text-blue-600 hover:underline">What Is Cliff Camping? The Camping Experience!</a>
              </h5>
              <p className="text-gray-700 mt-1">Lorem ipsum dolor saten amet consecten adipiscing elit lobortis fermen.</p>
            </div>
          </div>
          {/* Blog Item 5 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="img/blog/05.jpg" alt="" className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-gray-500">
                <i className="fa-regular fa-calendar-days mr-2"></i> 21 Dec 2024
              </span>
              <h5 className="font-bold text-lg mt-2">
                <a href="post.html" className="text-blue-600 hover:underline">5 Genius Hacks for Outdoor Cooking</a>
              </h5>
              <p className="text-gray-700 mt-1">Lorem ipsum dolor saten amet consecten adipiscing elit lobortis fermen.</p>
            </div>
          </div>
          {/* Blog Item 6 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="img/blog/06.jpg" alt="" className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-gray-500">
                <i className="fa-regular fa-calendar-days mr-2"></i> 20 Dec 2024
              </span>
              <h5 className="font-bold text-lg mt-2">
                <a href="post.html" className="text-blue-600 hover:underline">The Ultimate Sleeping Bag Guide For Campers</a>
              </h5>
              <p className="text-gray-700 mt-1">Lorem ipsum dolor saten amet consecten adipiscing elit lobortis fermen.</p>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <ul className="flex space-x-4">
            <li>
              <a href="blog.html" className="text-blue-600 hover:underline">
                <i className="fa-light fa-angle-left"></i>
              </a>
            </li>
            <li>
              <a href="blog.html" className="text-blue-600 hover:underline">1</a>
            </li>
            <li>
              <a href="blog.html" className="text-blue-600 hover:underline active">2</a>
            </li>
            <li>
              <a href="blog.html" className="text-blue-600 hover:underline">3</a>
            </li>
            <li>
              <a href="blog.html" className="text-blue-600 hover:underline">
                <i className="fa-light fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default D_BlogPage;
