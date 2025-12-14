import { PaginationProps } from "../types/types";

export const PaginationComponent = ({ page, setPage, posts }: PaginationProps) => {
  return (
    <div className="flex items-center gap-4 my-8">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer
          bg-indigo-600 text-white hover:bg-indigo-700
          disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        Anterior
      </button>
      <span className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 font-semibold min-w-25 text-center">
        Página {page}
      </span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={posts?.length < 10}
        className="px-4 py-2 rounded-lg font-medium transition-all duration-200
          bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer
          disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        Siguiente
      </button>
    </div>
  );
};
