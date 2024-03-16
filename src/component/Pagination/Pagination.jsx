import React from "react";
import './Pagination.scss'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div className="pagination">
      <button onClick={onPrevPage} disabled={currentPage === 1}>
      <MdKeyboardArrowLeft />

      </button>
      {/* <span>{`${currentPage} / ${totalPages}`}</span> */}
      <button onClick={onNextPage} disabled={currentPage === totalPages}>
      <MdKeyboardArrowRight />

      </button>
    </div>
  );
};

export default Pagination;
