import { Outlet, Navigate, ScrollRestoration } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const DefaultLayout = () => {
  const { user, token } = useStateContext();
  if (!token) return <Navigate to="/login" />;

  return (
    <>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
