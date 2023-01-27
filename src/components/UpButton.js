import React, { useEffect, useState } from "react";
import "./UpButton.css";

const UpButton = () => {
  const [showTopBtn, setShowTopBtn] = useState("hidden");

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY < 300) {
        setShowTopBtn("hidden");
      } else {
        setShowTopBtn(null);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={goToTop} className={`scroll-top-btn ${showTopBtn}`}>
      &#11014;
    </button>
  );
};

export default UpButton;
