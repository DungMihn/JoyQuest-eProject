import React from "react";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center space-x-4">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex items-center justify-center rounded-full 
          transition-transform duration-300
          ${
            currentPage === 1
              ? "bg-gray-200 text-black cursor-not-allowed"
              : "bg-white text-black hover:bg-[#5b9a42] hover:text-white hover:-translate-y-1"
          }
        `}
      >
        &lt;
      </button>

      {/* Page numbers */}
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`w-10 h-10 flex items-center justify-center rounded-full 
            transition-transform duration-300 hover:bg-[#5b9a42] hover:text-white hover:-translate-y-1
            ${
              currentPage === i + 1
                ? "bg-[#5b9a42] text-white"
                : "bg-white text-black"
            }
          `}
        >
          {i + 1}
        </button>
      ))}
      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 flex items-center justify-center rounded-full 
          transition-transform duration-300
          ${
            currentPage === totalPages
              ? "bg-gray-200 text-black cursor-not-allowed"
              : "bg-white text-black hover:bg-[#5b9a42] hover:text-white hover:-translate-y-1"
          }
        `}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
