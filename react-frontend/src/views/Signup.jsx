import { useRef } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const { user, token, admin, setUser, setToken, setAdmin } = useStateContext();

  const nameRef = useRef();
  const idRef = useRef();
  const passwordRef = useRef();
  const adminRef = useRef();

  const submit = (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      employee_id: idRef.current.value,
      pass: passwordRef.current.value,
      admin: adminRef.current.checked
    };
    axios
      .post("http://localhost:4000/api/users/signup", payload, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setUser(data.name);
        setToken(data.token);
        if (data.admin === true) setAdmin(true);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold">Sign Up</h1>
      <form className="flex flex-col" onSubmit={submit}>
        <label htmlFor="name">Name</label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          className="border-2 border-black rounded text-center"
        />
        <br />
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
        <div>
          <input ref={adminRef} type="checkbox" id="admin" name="admin" value="admin" /> &nbsp;
          <label htmlFor="admin">Admin?</label>
        </div>
        <br />
        <button
          className="bg-green-500 font-semibold hover:text-white py-2 px-4 border-black rounded"
          type="submit"
        >
          Signup
        </button>
      </form>
      <h3>
        Have an account?
        <Link className="text-blue-400" to="/login">
          Login
        </Link>
      </h3>
    </div>
  );
};

export default Signup;
