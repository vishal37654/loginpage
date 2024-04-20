import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import data from '../data.json'; // Assuming you have a JSON file with some data
import './Pagination.css'; // Importing CSS for styling

const Pagination = ({ itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0); // State to track current page
  const [displayData, setDisplayData] = useState([]); // State to store data for current page

  useEffect(() => {
    // Calculate start and end index of data to display for current page
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // Slice the data array to get the data for the current page
    const currentData = data.slice(startIndex, endIndex);
    setDisplayData(currentData); // Update displayData state with current page data
  }, [currentPage, itemsPerPage]); // Trigger effect when currentPage or itemsPerPage change

  const pageCount = Math.ceil(data.length / itemsPerPage); // Calculate total number of pages

  // Function to handle page change
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected); // Update currentPage state with selected page
  };

  return (
    <div className="paginated-data-container">
      <h2>Paginated Data</h2>
      <ul className="data-list">
        {/* Render the data for the current page */}
        {displayData.map((item) => (
          <li key={item.id}>{item.name}</li> 
        ))}
      </ul>
      {/* Render pagination component */}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Pagination;
