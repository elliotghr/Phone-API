import React, { useContext, useState } from "react";
import { PhoneContext } from "../context/PhoneContext";

const PhonesSearch = () => {
  const { handleSearch } = useContext(PhoneContext);
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.search) return alert("Datos incompletos");
    handleSearch(form.search);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <article className="margin-bottom-2">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="dispositivo"
          name="search"
          placeholder="Telefono a buscar"
          onChange={handleChange}
          value={form.search}
        ></input>
        <input type="submit" value="Buscar"></input>
      </form>
    </article>
  );
};

export default PhonesSearch;
