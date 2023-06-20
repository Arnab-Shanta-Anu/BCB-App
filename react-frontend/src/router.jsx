import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import CompanyInfo from "./components/CompanyInfo";
import DefaultLayout from "./components/DefaultLayout";
import DeleteUser from "./components/DeleteUser";
import GuestLayout from "./components/GuestLayout";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import Companies from "./views/Companies";
import CompanyForm from "./views/CompanyForm";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Summaries from "./views/Summaries";
import UserForm from "./views/UserForm";
import Users from "./views/Users";
import Form_4_3 from "./views/forms/Form-4-3";
import Form_6_2 from "./views/forms/Form-6-2";
import Form_9_1 from "./views/forms/Form-9-1";

const NavbarWrapper = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
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
        ],
      },

      {
        path: "/",
        element: <DefaultLayout />,
        children: [
          {
            path: "/",
            element: <Navigate to="/companies" />,
          },
          {
            path: "/companies",
            element: <Companies />,
          },
          {
            path: "/companies/add",
            element: <CompanyForm />,
          },
          {
            path: "/company",
            element: <CompanyInfo />,
          },
          {
            path: "/summaries",
            element: <Summaries />,
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
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/signup",
            element: <UserForm />,
          },
          {
            path: "/logout",
            element: <Logout />,
          },
          { path: "/users", element: <Users /> },
          { path: "/users/update", element: <UserForm /> },
          { path: "/users/delete", element: <DeleteUser /> },
        ],
      },
    ],
  },
]);

export default router;
