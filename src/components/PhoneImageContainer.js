import React from "react";
import "./PhoneImageContainer.css";

const PhoneImageContainer = ({ phone_name, phone_images }) => {
  return (
    <article className="phone-img-container">
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
