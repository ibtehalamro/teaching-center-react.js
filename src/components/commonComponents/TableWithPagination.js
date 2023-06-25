import React, { useState } from 'react';

const TableWithPagination = ({ id, data, itemsPerPage, headers, rowMethod }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages based on the data length and items per page
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Get the data for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    // Handle page navigation
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return (

        <div id={id || ""} className='table__with__pagination'>
            <div key={"head"} className='table-head'>
                <table >
                    <thead>
                        <tr>
                            {headers.map((header, index) => <th key={index}>{header}</th>)}
                        </tr>
                    </thead>
                </table>
            </div>
            <div key={"body"} className='table-body'>
                <table >
                    <tbody>
                        {currentData.map((item, index) => (
                            rowMethod(item)
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                {/* Render pagination */}
                <div className="pagination">
                    <button
                        className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => goToPage(index + 1)}
                            disabled={currentPage === index + 1}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TableWithPagination;
{/* <TableWithPagination data={courses.data} itemsPerPage={5} rowMethod={returnTableRow}  /> */ }
