import React from "react";
import "./HeroImage.css";

const HeroImage = ({ urlBackgroundImage, options: { brand, name } }) => {
  let backgroundImageValue = `url('${urlBackgroundImage}')`;
  return (
    <section className="margin-bottom-5">
      <article
        className="hero-image"
        style={{ backgroundImage: backgroundImageValue }}
      >
        <aside className="hero-image-opacity">
          <div className="hero-image-content">
            <h2>{brand + " " + name}</h2>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default HeroImage;
