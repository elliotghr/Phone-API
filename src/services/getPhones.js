import { API } from "../settings/settings";

export const getPhones = ({ phone }) => {
  return fetch(`${API}/search?query=${phone}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else throw new Error("Ocurrió un error");
    })
    .then((res) => res)
    .catch(
      (err) =>
        (err = {
          error: true,
          status: err.status || "0",
          statusText: err.statusText || "Ocurrió un error",
        })
    );
};
