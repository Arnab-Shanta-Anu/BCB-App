import { useRef } from "react";
import axios from "axios";
import { useStateContext } from "../contexts/ContextProvider";

const CompanyForm = () => {
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const binRef = useRef();
  const idRef = useRef();
  const passRef = useRef();
  const circleRef = useRef();
  const typeRef = useRef();

  const { token,setToken } = useStateContext();

  const submit = (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      address: addressRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      BIN: binRef.current.value,
      ID: idRef.current.value,
      pass: passRef.current.value,
      circle: circleRef.current.value,
      type: typeRef.current.value,
    };
    axios.post("http://localhost:4000/api/companies/add", payload, {
      authorization: "Bearer " + token,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Create new company:</h1>
      <form onSubmit={submit} className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          className="border-2 border-black rounded text-center"
        />
        <br />
        <label htmlFor="name">Address</label>
        <textarea
          ref={addressRef}
          type="text"
          name="name"
          className="border-2 border-black rounded text-center"
        />
        <br />
        <label htmlFor="name">Phone</label>
        <input
          ref={phoneRef}
          type="text"
          name="name"
          className="border-2 border-black rounded text-center"
        />
        <br />
        <label htmlFor="name">Email</label>
        <input
          ref={emailRef}
          type="email"
          name="name"
          className="border-2 border-black rounded text-center"
        />
        <br />
        <label htmlFor="name">BIN</label>
        <input
          ref={binRef}
          type="text"
          name="name"
          className="border-2 border-black rounded text-center"
        />
        <br />
        <label htmlFor="name">ID</label>
        <input
          ref={idRef}
          type="text"
          name="name"
          className="border-2 border-black rounded text-center"
        />
        <br />
        <label htmlFor="name">Pass</label>
        <input
          ref={passRef}
          type="text"
          name="name"
          className="border-2 border-black rounded text-center"
        />
        <br />
        <label htmlFor="name">Circle</label>
        <input
          ref={circleRef}
          type="text"
          name="name"
          className="border-2 border-black rounded text-center"
        />
        <br />
        <label htmlFor="name">Type</label>
        <select
          ref={typeRef}
          name="type"
          className="border-2 border-black rounded text-center"
        >
          <option value="importer">Importer</option>
          <option
            value="import { axios } from 'axios';
localTrader"
          >
            Local Traderimport {axios} from 'axios';
          </option>
          <option value="manufacturar">Manufacturar</option>
        </select>
        <br />
        <button
          className="bg-green-500 font-semibold hover:text-white py-2 px-4 border-black rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;
