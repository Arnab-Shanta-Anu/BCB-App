import axios from "axios";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const DeleteUser = () => {
  const location = useLocation();
  if (location.state) {
    axios.delete(`http://localhost:4000/api/users/${location.state._id}`);
  }

  return <Navigate to="/users" />;
};

export default DeleteUser;
