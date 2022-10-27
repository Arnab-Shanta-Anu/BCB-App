export const getStaticProps = async () => {
  const response = await fetch("http://localhost:4000/api/companies");
  const companies = await response.json();

  return {
    props: {
      companies,
    },
  };
};

const Companies = ({ companies }) => {
  return (
    <div>
      <h1>All Companies</h1>
      {companies.map((company) => (
        <div key={company._id} className="company">
          <h2>{company.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Companies;
