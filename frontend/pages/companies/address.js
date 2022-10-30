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

const Address = ({ companies }) => {
  return (
    <>
      {companies.map((company) => (
        <div key={company._id} className="companies">
          <h2>{company.name}</h2>
          <p>address: {company.address}</p>
          <p>phone: {company.phone}</p>
        </div>
      ))}
    </>
  );
};

export default Address;
