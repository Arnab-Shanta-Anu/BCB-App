export const getStaticProps = async () => {
  const response = await fetch("http://localhost:4000/api/companies");
  const companies = await response.json();
  return {
    props: {
      companies,
    },
    revalidate: 1,
  };
};
const IdPass = ({ companies }) => {
  return (
    <div className="companies-container">
      {companies.map((company) => (
        <div key={company._id} className="company">
          <h2>{company.name}</h2>
          <p>id: {company.ID}</p>
          <p>pass: {company.pass}</p>
        </div>
      ))}
    </div>
  );
};

export default IdPass;
