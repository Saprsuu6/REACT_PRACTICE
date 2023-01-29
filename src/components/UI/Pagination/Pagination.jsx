import React from "react";
import "../Pagination/pagination.model.css";

const Pagination = ({ pagesArray, changePage, pagination }) => {
  return (
    <ul className="page_wrapper">
      {pagesArray.map((p) => (
        <li
          onClick={() => changePage(p)}
          className={p === pagination.page ? "page current_page" : "page"}
          key={p}
        >
          {p}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
