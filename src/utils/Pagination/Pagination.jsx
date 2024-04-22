import React, { useState } from "react";
import styles from "./Pagination.module.css";
import leftArrow from "../../assets/important/leftArrow.png";
import rightArrow from "../../assets/important/rightArrow.png";
// import InputDropDown from "../InputDropDown/InputDropDown";
const Pagination = ({ page = 1, setPage = () => { }, totalPage = 1, limit, setLimit, }) => {

  const MAX_VISIBLE_PAGES = 5; // Maximum number of page links to display

  const getPageNumbers = () => {
    if (totalPage <= MAX_VISIBLE_PAGES) {
      // If the total number of pages is less than or equal to the maximum visible pages, display all pages
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    }

    // Calculate the range of visible page numbers
    const rangeStart = Math.max(page - 2, 1);
    const rangeEnd = Math.min(page + 2, totalPage);

    const pages = [];

    if (rangeStart > 1) {
      pages.push(1); // Always display the first page

      if (rangeStart > 2) {
        pages.push('...'); // Display ellipsis if there are skipped pages between the first page and the range start
      }
    }

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    if (rangeEnd < totalPage) {
      if (rangeEnd < totalPage - 1) {
        pages.push('...'); // Display ellipsis if there are skipped pages between the range end and the last page
      }

      pages.push(totalPage); // Always display the last page
    }

    return pages;
  };
  return (

    <div className={styles.paginationConatiner} >
      {limit && setLimit && <div className={styles.pageLimit} >
        <div>Rows per page</div>
        <div>
          <select value={limit} onChange={e => setLimit(e.target.value)}>
            {/* <option value="5">5</option> */}
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>}

      <div className={styles.pageNumbers} >
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          <img src={leftArrow} alt="" />
        </button>
        {getPageNumbers().map((page1, index) => (
          <React.Fragment key={index}>
            {page1 === '...' ? (
              <span >...</span>
            ) : (
              <button
                onClick={() => setPage(page1)}
                disabled={page1 === page}
              >
                {page1}
              </button>
            )}
          </React.Fragment>
        ))}
        <button
          disabled={page === totalPage}
          onClick={() => setPage(page + 1)}
        >
          <img src={rightArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
