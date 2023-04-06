import { useContext, useEffect, useMemo, useState } from "react";
import { PhoneContext } from "../context/PhoneContext";
import { getPhones } from "../services/getPhones";
import { phonesRandom } from "../settings/settings";

const useFetchPhones = ({ phone: phoneKeyword } = {}) => {
  const { setSearch } = useContext(PhoneContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const phoneRandom = useMemo(
    () => Math.floor(Math.random() * phonesRandom.length),
    []
  );

  const phone =
    phoneKeyword || localStorage.getItem("phone") || phonesRandom[phoneRandom];

  useEffect(() => {
    setLoading(true);

    getPhones({ phone })
      .then((res) => {
        if (res.error) {
          setError(`Error: ${res.statusText}, status: ${res.status}`);
          setSearch(null);
          return;
        }
        setSearch(res.data.phones);
        if (phoneKeyword) localStorage.setItem("phone", phone);
        setError(false);
      })
      .finally((res) => setLoading(false));
  }, [phone, setSearch, phoneKeyword]);

  return {
    loading,
    error,
  };
};

export default useFetchPhones;
