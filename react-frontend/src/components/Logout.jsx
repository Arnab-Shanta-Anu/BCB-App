import { Navigate } from "react-router-dom";
import Login from "./../views/Login";

const Logout = () => {
  localStorage.removeItem("ACCESS_TOKEN");
  localStorage.removeItem("ADMIN");

  return <Login />;
};

export default Logout;
