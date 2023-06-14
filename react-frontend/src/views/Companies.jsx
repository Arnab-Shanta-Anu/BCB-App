import { Link } from "react-router-dom";
import axios from "axios";
import CompanyInfo from "../components/CompanyInfo";
import { useEffect, useState } from "react";

const Companies = () => {
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    console.log("fetching data");
    axios.get("http://localhost:4000/api/companies").then((response) => {
      setCompanyData(response.data);
    });
  }, []);

  return (
    <div className="text-center flex flex-col items-center">
      <h2 className="text-3xl font-semibold">List of Companies:</h2>
      <ol className="w-9/12 flex flex-col items-center">
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
              state={{ company: company }}
              className="bg-blue-500 font-semibold hover:text-white py-2 px-4 border-black rounded"
            >
              Summaries
            </Link>
          </li>
        ))}
      </ol>
      <Link
        to="/companies/add"
        className="sticky bottom-5 right-5 bg-red-500 font-semibold hover:text-white py-2 px-4
       border-black rounded place-self-end"
      >
        Add new
      </Link>
    </div>
  );
};

export default Companies;
