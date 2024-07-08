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
      <img
        src={imageUrl}
        alt={`Page ${pageNumber}`}
        style={{ width: "100%", height: "100vh" }}
      />
      <strong
        style={{
          display: "none",
        }}
      >
        {pageNumber}
      </strong>
    </div>
  );
}
