import { IonImg } from "@ionic/react";

import "./styles.css";

type PropsType = {
  pageNumber: number;
  imageUrl: string;
};

export default function PageViewer({ pageNumber, imageUrl }: PropsType) {
  return (
    <div className="container">
      <header className="header"></header>
      <section className="content">
        <IonImg
          src={imageUrl}
          alt={`Page ${pageNumber}`}
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      </section>
      <footer className="page-info__clz"></footer>
    </div>
  );
}
