import React from "react";

const PhoneLinkGSMArena = ({ phone_name, slug }) => {
  return (
    <div className="gsm-link margin-bottom-5">
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
