import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const PhoneContext = createContext();

const PhoneProvider = ({ children }) => {
  const [search, setSearch] = useState(null);
  const [dataPhones, setDataPhones] = useState(null);
  const [dataDetails, setDataDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (phone) => {
    setSearch(phone);

    setLoading(true);
    setDataDetails(null);
    let api = `https://phone-specs-api.azharimm.dev/search?query=${phone}`;
    helpHttp()
      .get(api)
      .then((res) => {
        if (res.err) {
          setError(res);
        } else {
          setError(null);
          setDataPhones(res);
        }
      })
      .finally((res) => {
        setLoading(false);
      });
  };

  const data = {
    handleSearch,
    loading,
    error,
    search,
    dataPhones,
    dataDetails,
    setDataDetails,
  };
  return <PhoneContext.Provider value={data}>{children}</PhoneContext.Provider>;
};

export { PhoneProvider };
export { PhoneContext };
