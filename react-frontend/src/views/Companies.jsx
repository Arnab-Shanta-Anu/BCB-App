import { Link } from "react-router-dom";
import CompanyInfo from "../components/CompanyInfo";

const Companies = () => {

  const companyData = [
    {
      id: 1,
      name: "absdfassssssssssssssssssssssssssssssssssssssfdddddddddddddddddddddddddddddddddddddc",
      address: "abc",
      phone: "abc",
      email: "abc",
      BIN: "abc",
      ID: "abc",
      pass: "abc",
      circle: "abc",
      type: "abc",
    },
    {
      id: 2,
      name: "def",
    },
  ];
  return (
    <div className="text-center">
      List of Companies
      <ol>
        {companyData.map((company) => (
          <li key={company.id} className="flex justify-center my-5 text-center">
            <Link to="/company" state={{company: company, full: true}}>
              <CompanyInfo company={company} full={false} />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Companies;
