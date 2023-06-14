import { useLocation } from "react-router-dom";
import Summary from "../components/Summary";

const Summaries = () => {
  const location = useLocation();
  let company;
  if (location.state) {
    company = location.state.company;
  }

  return (
    <div className="text-center">
      <Summary company={company} />
    </div>
  );
};

export default Summaries;
