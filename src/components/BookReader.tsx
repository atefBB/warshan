import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import { PageViewer } from "./PageViewer";
import { Search } from "./Search";
import { Bookmark } from "./Bookmark";

import { pages } from "./pages";

export function BookReader() {
  const [currentPage, setCurrentPage] = useState(0);

  function goToNextPage() {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  function goToPreviousPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: goToPreviousPage,
    onSwipedRight: goToNextPage,
  });

  return (
    <main {...handlers} style={{ direction: "rtl", touchAction: "pan-y" }}>
      <Search />
      {pages.length > 0 ? (
        <PageViewer
          pageNumber={currentPage + 1}
          imageUrl={pages[currentPage].imageUrl}
        />
      ) : null}
      <nav style={{ display: "none" }}>
        <button onClick={goToPreviousPage} disabled={currentPage === 0}>
          {">>"}
        </button>

        <button
          onClick={goToNextPage}
          disabled={currentPage === pages.length - 1}
        >
          {"<<"}
        </button>
      </nav>
      <Bookmark currentPage={currentPage} />
    </main>
  );
}
