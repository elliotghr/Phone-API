import { useState, useEffect } from "react";
// Los datos que traiga este hook personalizado los podremos guardar en una variable de estado, por eso hacemos uso de un custom hook y no del un helper
// Hooks personalizados usados para devolver logica
export const useFetch = (url) => {
  // Estados para guardar los datos, errores y la carga
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Creamos el abortController
    const abortController = new AbortController();
    // Creamos la propiedad signal
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          let err = new Error("Error en la petición Fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrió un error";
          throw err;
        }
        const json = await res.json();

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        console.log(error);
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };
    fetchData();

    // Fase de desmontaje
    return () => abortController.abort;
  }, [url]);

  return { data, error, loading };
};
