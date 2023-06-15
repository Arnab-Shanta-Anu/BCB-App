import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserInfo from "../components/UserInfo";

const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    console.log("fetching users...");
    axios.get("http://localhost:4000/api/users").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1>Users:</h1>
      <ol>
        {users &&
          users.map((user) => (
            <li key={user._id} className="w-9/12 my-5">
              <UserInfo user={user} full={false} />
              <br />
              <Link
                to="#"
                className="bg-blue-500 font-semibold hover:text-white py-2 px-4 border-black rounded"
              >
                Update
              </Link>
              &nbsp;
              <Link
                to="#"
                className="bg-red-500 font-semibold hover:text-white py-2 px-4 border-black rounded"
              >
                Delete
              </Link>
            </li>
          ))}
      </ol>
      <Link
        to="/signup"
        className="fixed top-5 right-5 bg-green-500 font-semibold hover:text-white py-2 px-4 border-black rounded"
      >
        Add user
      </Link>
    </div>
  );
};

export default Users;
