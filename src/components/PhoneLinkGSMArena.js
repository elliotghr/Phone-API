import React from "react";
import "./PhoneLinkGSMArena.css";

const PhoneLinkGSMArena = ({ phone_name, slug }) => {
  return (
    <div className="gsm-link">
      <p>{`¿Necesitas más información del ${phone_name}?`}</p>
      <a
        href={`https://www.gsmarena.com/${slug}.php`}
        target="_blank"
        rel="noreferrer"
      >
        Haz click aqui 👈
      </a>
    </div>
  );
};

export default PhoneLinkGSMArena;
