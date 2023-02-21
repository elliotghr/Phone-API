import React from "react";

const HeroImage = ({ urlValue, options }) => {
  const { brand, name } = options;
  return (
    <section id="inicio" className="home margin-bottom-5">
      <article className="hero-image" style={{ backgroundImage: urlValue }}>
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
