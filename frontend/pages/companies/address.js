import shortId from "short-id";
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
      {companies.map((company, i) => (
        <div key={companies._id}>
          <h2 key={shortId.generate()}>{company.name}</h2>
          <p key={shortId.generate()}>address: {company.address}</p>
          <p key={shortId.generate()}>phone: {company.phone}</p>
        </div>
      ))}
    </>
  );
};

export default Address;
