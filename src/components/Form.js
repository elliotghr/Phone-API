import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Form.css";

const Form = () => {
  let history = useHistory();
  const [form, setForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form) return;
    history.push(`/search/${form}`);
  };

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  return (
    <article className="margin-bottom-2 form">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Ej: samsung s23, iphone 14 pro..."
          onChange={handleChange}
          value={form}
        ></input>
        <button className="btn">Buscar</button>
      </form>
    </article>
  );
};

export default Form;
