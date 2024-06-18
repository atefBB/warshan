import React from "react";
import { pdfjs, Document, Page } from "react-pdf";

import "./styles.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function App() {
  const [width, setWidth] = React.useState(1200);
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div id="quranContainer" className="mt-4">
      <Document
        file="https://qurancomplex.gov.sa/wp-content/uploads/isdarat/qiraat/warsh39.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          className="PDFPage PDFPageOne"
          renderTextLayer={false}
          renderAnnotationLayer={false}
          scale={width > 786 ? 1.7 : 0.6}
        />
      </Document>
      <div
        className="navigation__clz"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <div>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            {"<"}
          </button>
          <button
            type="button"
            disabled={pageNumber >= (numPages as unknown as number)}
            onClick={nextPage}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
