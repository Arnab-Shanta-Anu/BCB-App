import Summary from "../components/Summary";

const Summaries = () => {
  const company = {
    name: "abc",
    address: "a1b2c",
    phone: "01730909838",
    email: "a@b.com",
    BIN: "1234",
    ID: "1234",
    pass: "1234",
    circle: "abc",
    type: "12",
  };

  return (
    <div className="text-center">
      <Summary company={company} />
    </div>
  );
};

export default Summaries;
