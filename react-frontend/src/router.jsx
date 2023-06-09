import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./views/Home";
import Form_9_1 from "./views/forms/Form-9-1";
import Form_6_2 from "./views/forms/Form-6-2";
import Form_4_3 from "./views/forms/Form-4-3";

const router = createBrowserRouter([
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
]);

export default router;
