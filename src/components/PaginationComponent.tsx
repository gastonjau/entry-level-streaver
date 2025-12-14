import { PaginationProps } from "../types/types";

const LIMIT = 10;

export const PaginationComponent = ({ page, setPage, total }: PaginationProps) => {
  const hasNextPage = page * LIMIT < total;

  return (
    <div className="flex items-center gap-4 my-8">
      <button
      aria-label="previous-page-button"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer
          bg-bkg-indigo-600 text-white hover:bg-bkg-indigo-700
          disabled:bg-bkg-gray-disable disabled:text-grayDisable disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <span className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 font-semibold min-w-25 text-center">
        Page {page}
      </span>
      <button
      aria-label="next-page-button"
        onClick={() => setPage(page + 1)}
        disabled={!hasNextPage}
        className="px-4 py-2 rounded-lg font-medium transition-all duration-200
          bg-bkg-indigo-600 text-white hover:bg-bkg-indigo-700 cursor-pointer
          disabled:bg-bkg-gray-disable disabled:text-grayDisable disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};
