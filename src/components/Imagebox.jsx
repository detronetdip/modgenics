import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { textState } from "../store/index";
import ReactPaginate from "react-paginate";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";

const Imagebox = ({ itemsPerPage }) => {
  const items = [image1, image2, image3, image4];
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const { selected } = useRecoilValue(textState);
  const itemOffset = selected;
  const setItemOffset = useSetRecoilState(textState);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset((old) => {
      return {
        ...old,
        selected: newOffset,
      };
    });
  };
  return (
    <>
      <div className="imageslide">
        {currentItems &&
          currentItems.map((item) => <img src={item} alt="image" />)}
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagignation"
          pageClassName="pclass"
          previousClassName="lnone"
          nextClassName="lnone"
        />
      </div>
    </>
  );
};

export default Imagebox;
