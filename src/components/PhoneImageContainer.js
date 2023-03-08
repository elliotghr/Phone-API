import React from "react";

const PhoneImageContainer = ({ phone_name, phone_images }) => {
  return (
    <article>
      <div className="img-section">
        <h3>Imagenes del {phone_name}</h3>
        <div className="img-container">
          {phone_images.map((el, index) => (
            <img key={index} src={el} alt={phone_name}></img>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PhoneImageContainer;
