import React from "react";
import { Button } from "@/components/ui/button";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        variant="outline"
        className="bg-white"
      >
        <MdOutlineKeyboardArrowLeft />
      </Button>
      <span className="text-sm font-medium">
        {currentPage} of {totalPages}
      </span>
      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        variant="outline"
        className="bg-white"
      >
        <MdOutlineKeyboardArrowRight />
      </Button>
    </div>
  );
};

export default Pagination;