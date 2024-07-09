import { useEffect } from "react";

import { Search } from "./Search";

import { images as pages } from "./images";

import "./carousel.css";
import "./grid.css";

export function Carousel() {
  useEffect(() => {
    const numSlides = pages.length;
    const duration = 15 * numSlides; // Adjust the duration as needed
    let keyframes = "@keyframes slide {";

    for (let i = 0; i < numSlides; i++) {
      const percentage = (100 / numSlides) * i;
      const nextPercentage = (100 / numSlides) * (i + 1);
      keyframes += `
        ${percentage}% { transform: translateX(-${i * 100}%); }
        ${nextPercentage}% { transform: translateX(-${i * 100}%); }
      `;
    }

    keyframes += `
      100% { transform: translateX(0); }
    }`;

    // Append the generated keyframes to the document's style
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    // Set the animation on the carousel track
    const carouselTrack = document.querySelector(
      ".carousel__track"
    ) as HTMLElement;
    carouselTrack.style.animation = `slide ${duration}s infinite`;
  }, []);

  return pages.length > 0 ? (
    <div className="container">
      <header className="search-wrapper__clz">
        <Search />
      </header>
      <section className="content">
        <div className="carousel">
          <div className="carousel__track">
            {pages.map((page, index) => (
              <div key={index} className="carousel__slide">
                <img
                  src={`http://localhost:3000/warshan${page.imageUrl}`}
                  alt={`الصفحة ${page.text}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="page-info__clz"></footer>
    </div>
  ) : null;
}
