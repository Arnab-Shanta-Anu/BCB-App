import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserInfo from "../components/UserInfo";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("fetching users...");
    axios.get("http://localhost:4000/api/users").then((response) => {
      setUsers(response.data);
      console.log(users);
    });
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="font-bold text-3xl">Users:</h1>
      <ol>
        {users.map((user) => {
          <li key={user._id} className="border border-black">
            <UserInfo user={user} full={false} />
            <Link>Update</Link> &nbsp;
            <Link>Delete</Link>
          </li>;
        })}
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
