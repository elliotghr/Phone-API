import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h2>Error 404</h2>
      <p>Not found</p>
      <NavLink to="/">Regresar a Home</NavLink>
    </div>
  );
};

export default Error404;
