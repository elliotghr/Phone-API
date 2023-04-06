import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PhoneContext } from "../context/PhoneContext";
import Loader from "../components/Loader";
import Message from "../components/Message";
import PhoneResultsContainer from "../components/PhoneResultsContainer";
import useFetchPhones from "../hooks/useFetchPhones";
import "./SearchPhone.css";

const SearchPhone = () => {
  const { search } = useContext(PhoneContext);
  let phone = useParams().phone;

  const { loading, error } = useFetchPhones({ phone });

  if (loading) return <Loader></Loader>;
  if (error) return <Message msg={error} bgColor={"red"}></Message>;

  return (
    <article className="search">
      <h2 className="margin-bottom-2">
        Resultados para la busqueda: "{phone}"
      </h2>
      <PhoneResultsContainer search={search}></PhoneResultsContainer>
    </article>
  );
};

export default SearchPhone;
