const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const startPage = Math.min(
    currentPage,
    Math.max(1, totalPages - 3)
  );

  const visiblePages = Array.from(
    { length: Math.min(4, totalPages) },
    (_, i) => startPage + i
  );

  return (
    <div className="flex items-center rounded-md border border-gray-200 overflow-hidden w-fit">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 text-sm border-r border-gray-200 bg-gray-50 hover:bg-gray-100 disabled:opacity-50"
      >
        ← Previous
      </button>

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 text-sm border-r border-gray-200 transition-colors ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 text-sm bg-gray-50 hover:bg-gray-100 disabled:opacity-50"
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;