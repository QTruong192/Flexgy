import React, { useState, useEffect } from "react";
import "./SlideShow.scss";

const SlideShow = () => {
    const images = [
      "https://cdn.oneesports.gg/cdn-data/2023/10/LeagueofLegends_T1_Faker_Gumayusi_Keria_Oner_Zeus_GQKorea_Suits_Pictorial2-1024x576.jpg",
      "https://cdn.oneesports.gg/cdn-data/2023/10/LeagueofLegends_Faker_RalphLauren_Custom_Model_WallpaperSuit-1024x576.jpg",
      "https://cdn.oneesports.gg/cdn-data/2023/10/LeagueofLegends_Faker_PoloRalphLauren_Custom_GQKorea_Pictorial-1024x576.jpg",
      ];
  const [index, setIndex] = useState(0);
  const delay = 10000;
  const timeoutRef = React.useRef(null);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index, images.length]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((imageUrl, idx) => (
          <div
            className="slide"
            key={idx}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        ))}
      </div>
      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default SlideShow;
