import React from "react";

type PropsType = {
  pageNumber: number;
  imageUrl: string;
};

export default function PageViewer({ pageNumber, imageUrl }: PropsType) {
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
