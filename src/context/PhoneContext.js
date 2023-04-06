import { createContext, useState } from "react";

const PhoneContext = createContext();

const PhoneProvider = ({ children }) => {
  const [search, setSearch] = useState([]);

  const data = {
    search,
    setSearch,
  };
  return <PhoneContext.Provider value={data}>{children}</PhoneContext.Provider>;
};

export { PhoneProvider };
export { PhoneContext };
