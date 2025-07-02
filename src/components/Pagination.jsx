export function Pagination({ currentPage, totalPages, goToPage }) {
  const renderPageNumbers = () => {
    const pages = [];

    // Always show first 3 pages
    for (let i = 1; i <= 3; i++) {
      pages.push(i);
    }

    // Add ellipsis in the middle if totalPages > 6
    if (totalPages > 6) {
      pages.push("...");

      // Show the last 3 pages
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // If few pages, show all
      for (let i = 4; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    return pages.map((page, index) => {
      if (page === "...") {
        return (
          <span key={`dots-${index}`} className="px-2 cursor-pointer">
            ...
          </span>
        );
      }

      return (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`px-3 py-1 border rounded ${
            currentPage === page ? "bg-blue-500 text-white" : "text-gray-700"
          }`}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-40 cursor-pointer"
      >
        Prev
      </button>

      <div className="flex gap-2">{renderPageNumbers()}</div>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
