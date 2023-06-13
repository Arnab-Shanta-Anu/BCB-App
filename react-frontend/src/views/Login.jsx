import { useRef } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
import { Link } from "react-router-dom";
const Login = () => {
  const { user, token, admin, setUser, setToken, setAdmin } = useStateContext();

  const idRef = useRef();
  const passwordRef = useRef();

  const submit = (ev) => {
    ev.preventDefault();
    const payload = {
      id: idRef.current.value,
      password: passwordRef.current.value,
    };
    axios
      .post("http://localhost:4000/api/users/login", payload, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setUser(data.name);
        setToken(data.token);
        setAdmin(data.admin);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col" onSubmit={submit}>
        <label htmlFor="employee_id">Employee ID</label>
        <input
          ref={idRef}
          type="text"
          name="employee_id"
          className="border-2 border-black rounded text-center"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          className="border-2 border-black rounded text-center"
        />
        <br />
        <button
          className="bg-green-500 font-semibold hover:text-white py-2 px-4 border-black rounded"
          type="submit"
        >
          Login
        </button>
      </form>
      <h3>
        Dont have an account?{" "}
        <Link className="text-blue-400" to="/signup">
          Signup
        </Link>
      </h3>
    </div>
  );
};

export default Login;
