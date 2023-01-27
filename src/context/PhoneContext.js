import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const PhoneContext = createContext();

const PhoneProvider = ({ children }) => {
  const [search, setSearch] = useState(null);
  const [dataPhones, setDataPhones] = useState(null);
  const [dataDetails, setDataDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!search) return;
    setLoading(true);
    setDataDetails(null);
    let api = `https://phone-specs-api.azharimm.dev/search?query=${search}`;
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
  }, [search]);

  const handleSearch = (phone) => {
    setSearch(phone);
  };

  const handleViewSpecs = (url) => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (res.err) {
          setError(res);
        } else {
          setError(null);
          setDataDetails(res);
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
    handleViewSpecs,
    dataDetails,
    setDataDetails,
  };
  return <PhoneContext.Provider value={data}>{children}</PhoneContext.Provider>;
};

export { PhoneProvider };
export { PhoneContext };
