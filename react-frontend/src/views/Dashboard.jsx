import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const admin = localStorage.getItem("ADMIN");
  if (!admin)
    return (
      <div className="text-center text-3xl font-bold">
        "You Dont have permission"
      </div>
    );

  return (
    <div className="flex flex-col items-center">
      <Link
        to="/companies/add"
        className="bg-green-500 font-semibold hover:text-white py-2 px-4 border-black rounded"
      >
        Add a company
      </Link>
      <br />
      <Link
        to="/users"
        className="bg-blue-500 font-semibold hover:text-white py-2 px-4 border-black rounded"
      >
        Users
      </Link>
    </div>
  );
};

export default Dashboard;
