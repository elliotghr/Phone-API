// Helper custom para peticiones Ajax
// Se usa en lugar de un hook personalizado porque no haremos uso de los hooks de React
// Escrito en vanilla js con posibilidad de reuso en cualquier framework
// Exportado de manera normal para llamarlo forzosamente con este nombre

export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    // DEFINIMOS LAS OPCIONES DE NUESTRA PETICIÓN FETCH
    // Cabeceras por defecto
    const defaultHeaders = {
      accept: "application/json",
    };
    // Opción para manejar errores cuando un endpoint no responde y poder cancelarla, puede cancelarse por el usuario o controlado por nosotros (setTimeOut)
    const controller = new AbortController();
    options.signal = controller.signal;
    // Si las opciones ya traen metodo... metodo || "GET"
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;
    // Cuando den body, body || falso
    options.body = JSON.stringify(options.body) || false;
    // Si no existe el body lo eliminamos del objeto
    if (!options.body) {
      delete options.body;
    }
    // console.log(options);
    // Si después de un segundo no recibo respuesta del servidor, ejecuto el metodo abort de mi controlador
    setTimeout(() => {
      controller.abort();
    }, 5000);

    // RETORNAMOS LA PETICIÓN FETCH
    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  };
  //   Metodos
  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
