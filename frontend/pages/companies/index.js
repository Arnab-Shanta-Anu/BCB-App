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

const Companies = ({ companies }) => {
  return (
    <div className="companies-container">
      {companies.map((company) => (
        <div key={company._id} className="company">
          <h2>{company.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Companies;
