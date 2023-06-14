import { useLocation } from "react-router-dom";

const Summary = ({}) => {
  const location = useLocation();
  let company;
  if (location.state) {
    company = location.state.company;
  }
  return (
    <div>
      <h1 className="font-bold text-3xl">{company.name}</h1>
    </div>
  );
};
export default Summary;
