import { lazy, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { IonApp, setupIonicReact } from "@ionic/react";

import { Search } from "./Search";
import { Bookmark } from "./Bookmark";

import { images as pages } from "./images";

const Page = lazy(() => import("./Page"));

setupIonicReact();

export function Main() {
  const lastOpenedPage = localStorage.getItem("currentPage") || 0;

  const [currentPage, setCurrentPage] = useState(Number(lastOpenedPage));

  useEffect(() => {
    localStorage.setItem("currentPage", String(currentPage));
  }, [currentPage]);

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
    <IonApp>
      <main {...handlers} style={{ direction: "rtl", touchAction: "pan-y" }}>
        <Search />
        {pages.length > 0 ? (
          <Page
            pageNumber={currentPage + 1}
            imageUrl={pages[currentPage].imageUrl}
          />
        ) : null}
        <Bookmark currentPage={currentPage} />
      </main>
    </IonApp>
  );
}
