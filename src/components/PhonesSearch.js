import React, { useContext, useState } from "react";
import { PhoneContext } from "../context/PhoneContext";
import "../pages/PhoneSearch.css";

const PhonesSearch = () => {
  const { handleSearch, setDataDetails } = useContext(PhoneContext);
  const [form, setForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.search) return alert("Datos incompletos");
    handleSearch(form);
    setDataDetails(null);
  };

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  return (
    <article className="margin-bottom-1 main-content">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Telefono a buscar"
          onChange={handleChange}
          value={form}
        ></input>
        <input type="submit" value="Buscar"></input>
      </form>
    </article>
  );
};

export default PhonesSearch;
