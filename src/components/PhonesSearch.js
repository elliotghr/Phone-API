import React, { useContext, useState } from "react";
import { PhoneContext } from "../context/PhoneContext";

const initialForm = {
  search: "",
};

const PhonesSearch = () => {
  const { handleSearch, setDataDetails } = useContext(PhoneContext);
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    console.log("object");
    e.preventDefault();
    if (!form.search) return alert("Datos incompletos");
    handleSearch(form.search);
    setDataDetails(null);
  };

  const handleChange = (e) => {
    setForm({ search: e.target.value });
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
