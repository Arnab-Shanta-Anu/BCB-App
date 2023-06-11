import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const GuestLayout = () => {
  const { user, token } = useStateContext();
  if (token) return <Navigate to="/home" />;

  return (
    <>
      <Outlet />
    </>
  );
};

export default GuestLayout;
