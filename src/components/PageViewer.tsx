import React from "react";

type PageViewerProps = {
  pageNumber: number;
  imageUrl: string;
};

export function PageViewer({ pageNumber, imageUrl }: PageViewerProps) {
  return (
    <React.Fragment>
      <h3>Page {pageNumber}</h3>
      <img
        src={imageUrl}
        alt={`Page ${pageNumber}`}
        style={{ width: "100%", height: "auto" }}
      />
    </React.Fragment>
  );
}
