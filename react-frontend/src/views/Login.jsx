import { useRef } from "react";
import { useStateContext } from "../contexts/ContextProvider";
const Login = () => {
  const { user, token } = useStateContext();

  const idRef = useRef();
  const passwordRef = useRef();

  const submit = (ev) => {
    ev.preventDefault();
    
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col" onSubmit={submit}>
        <input
          ref={idRef}
          type="text"
          name="company_id"
          placeholder="ID"
          className="border-2 border-black rounded text-center"
        />
        <br />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Password"
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
    </div>
  );
};

export default Login;
