import React from "react";

const HeroImage = ({ urlBackgroundImage, options: { brand, name } }) => {
  let backgroundImageValue = `url('${urlBackgroundImage}')`;
  return (
    <section id="inicio" className="home margin-bottom-5">
      <article
        className="hero-image"
        style={{ backgroundImage: backgroundImageValue }}
      >
        <aside className="hero-image-opacity">
          <div className="hero-image-content">
            <h2 className="hero-image-title">{brand + " " + name}</h2>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default HeroImage;
