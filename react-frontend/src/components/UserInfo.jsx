import { useLocation } from "react-router-dom";

const UserInfo = ({ user }, full) => {
  let User = user;
  const location = useLocation();
  if (location.state) {
    User = location.state.user;
    full = true;
  }

  const { name, employee_id, pass } = User;
  if (full === true) {
    return (
      <div className="text-center">
        <h2>Name:{name}</h2>
        <p>ID: {employee_id}</p>
        <p>Pass: {pass}</p>
      </div>
    );
  } else {
    return (
      <div className="border border-black min-w-min text-center overflow-x-auto hover:bg-blue-400 hover:text-white">
        <h2>Name: {name}</h2>
      </div>
    );
  }
};

export default UserInfo;
