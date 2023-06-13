import { Link } from "react-router-dom";
import axios from "axios";
import CompanyInfo from "../components/CompanyInfo";
import { useEffect, useState } from "react";

const Companies = () => {
  const [companyData, setCompanyData] = useState([
    {
      name: "abc",
      address: "abc",
      phone: "abc",
      email: "abc",
      BIN: "abc",
      ID: "abc",
      pass: "abc",
      circle: "abc",
      type: "abc",
    },
  ]);

  useEffect(() => {
    console.log("fetching data");
    axios.get("http://localhost:4000/api/companies").then((response) => {
      setCompanyData(response.data);
      console.log(response.data);
    });
    console.log(companyData);
  }, []);

  return (
    <div className="text-center flex flex-col items-center">
      List of Companies
      <ol className="w-9/12 flex flex-col items-center">
        {console.log(typeof companyData)}
        {companyData.map((company) => (
          <li key={companyData[0]._id} className="w-9/12 my-2">
            <CompanyInfo company={company} full={false} />;
            <br />
            <Link
              to="/company"
              state={{ company: company }}
              className="bg-green-500 font-semibold hover:text-white py-2 px-4 border-black rounded"
            >
              Details
            </Link>
            &nbsp;
            <Link
              to="/summaries"
              className="bg-blue-500 font-semibold hover:text-white py-2 px-4 border-black rounded"
            >
              Summaries
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Companies;
