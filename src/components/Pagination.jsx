import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    console.log("Current Page Before Decrement:", currentPage);
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      console.log("Navigating to Page:", currentPage - 1);
    }
  };

  const handleNext = () => {
    console.log("Current Page Before Increment:", currentPage);
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      console.log("Navigating to Page:", currentPage + 1);
    }
  };

  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center">
      <div className="flex items-center">
        {/* Previous Button */}
        <div
          className={`px-8 ${
            currentPage === 1
              ? "text-gray-500 cursor-not-allowed"
              : "hover:cursor-pointer"
          }`}
          onClick={handlePrevious}
          aria-disabled={currentPage === 1}
        >
          <i className="fa-solid fa-backward"></i>
        </div>

        {/* Current Page */}
        <div className="px-4">{currentPage}</div>

        {/* Next Button */}
        <div
          className={`px-8 ${
            currentPage === totalPages
              ? "text-gray-500 cursor-not-allowed"
              : "hover:cursor-pointer"
          }`}
          onClick={handleNext}
          aria-disabled={currentPage === totalPages}
        >
          <i className="fa-solid fa-forward"></i>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
