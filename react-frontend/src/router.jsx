import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Companies from "./views/Companies";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Form_4_3 from "./views/forms/Form-4-3";
import Form_6_2 from "./views/forms/Form-6-2";
import Form_9_1 from "./views/forms/Form-9-1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },

  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/form-9-1",
        element: <Form_9_1 />,
      },
      {
        path: "/form-6-2",
        element: <Form_6_2 />,
      },
      {
        path: "/form-4-3",
        element: <Form_4_3 />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
