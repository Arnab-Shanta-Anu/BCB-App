import { Link, useLocation } from "react-router-dom";

const CompanyInfo = ({ company }, full) => {
  let Company = company;
  const location = useLocation();
  if (location.state) {
    Company = location.state.company;
    full = true;
  }

  const { name, address, phone, email, BIN, ID, pass, circle, type } = Company;
  if (full === true) {
    return (
      <div className="text-center">
        <h2>Name:{name}</h2>
        <p>Address: {address}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>BIN: {BIN}</p>
        <p>ID: {ID}</p>
        <p>Pass: {pass}</p>
        <p>Circle: {circle}</p>
        <p>type: {type}</p>
      </div>
    );
  } else {
    return (
      <div className="border border-black w-2/3 min-w-max text-center overflow-x-auto hover:bg-blue-400 hover:text-white">
        <h2>Name: {name}</h2>
        <p>Address: {address}</p>
        <p>Phone: {phone}</p>
      </div>
    );
  }
};
export default CompanyInfo;
