import React from "react";

type PropsType = {
  pageNumber: number;
  imageUrl: string;
};

export default function PageViewer({ pageNumber, imageUrl }: PropsType) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <h3 style={{ visibility: "hidden" }}>{pageNumber}</h3>
      <img
        src={imageUrl}
        alt={`Page ${pageNumber}`}
        style={{ width: "100%", height: "auto" }}
      />
      <strong
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {pageNumber}
      </strong>
    </div>
  );
}
