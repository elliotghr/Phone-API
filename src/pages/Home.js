import React from "react";
import Message from "../components/Message";
import Loader from "../components/Loader";
import PhonesResults from "../components/PhonesResults";
import HomeTitle from "../components/HomeTitle";
import useFetchPhones from "../hooks/useFetchPhones";
import "./Home.css";

const Home = () => {
  const { loading, error } = useFetchPhones();
  if (error) return <Message msg={error} bgColor={"red"}></Message>;
  if (loading) return <Loader></Loader>;
  const lsKeyword = localStorage.getItem("phone");

  return (
    <section className="home">
      <article className="home-container">
        <HomeTitle lsKeyword={lsKeyword}></HomeTitle>
        <PhonesResults></PhonesResults>
      </article>
    </section>
  );
};

export default Home;
