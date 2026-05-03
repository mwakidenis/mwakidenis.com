import Link from "next/link";
import usePagination from '../lib/usePagination.js'

export const dotts = '...'

const Pagination = ({ currentPage, totalItems, perPage, renderPageLink }) => {
    const pages = usePagination(totalItems, currentPage, perPage)

    return (
        <div className="col-lg-12">

            {/* pagination */}
            <div className="mil-pagination">
                {currentPage > 1 &&
                <Link key="pagination-item-prev" href={currentPage > 1 ? renderPageLink( currentPage - 1 ) : renderPageLink( currentPage )} className="mil-pagination-btn mil-pagination-btm--prev">&laquo;</Link>
                }
                {pages.map((pageNumber, i) =>
                    pageNumber === dotts ? (
                    <span
                        key={i}
                        className="mil-pagination-text"
                    >
                        {pageNumber}
                    </span>
                    ) : (
                    <Link
                        key={`pagination-item-${i}`}
                        href={renderPageLink(pageNumber)}
                        className={`${
                        pageNumber === currentPage ? 'mil-active' : ''
                        } mil-pagination-btn`}
                    >
                        {pageNumber}
                    </Link>
                    )
                )}
                {currentPage < pages.length &&
                <Link key="pagination-item-next" href={currentPage < pages.length ? renderPageLink( currentPage + 1 ) : renderPageLink( currentPage )} className="mil-pagination-btn mil-pagination-btn--next">&raquo;</Link>
                }
            </div>
            {/* pagination end */}

        </div>
    );
  };
  export default Pagination;