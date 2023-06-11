import { useStateContext } from "../contexts/ContextProvider";

const Dashboard = () => {
  const { admin } = useStateContext();
  if (!admin)
    return (
      <div className="text-center text-3xl font-bold">
        "You Dont have permission"
      </div>
    );

  return "Dashboard";
};

export default Dashboard;
