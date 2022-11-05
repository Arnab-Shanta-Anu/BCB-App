export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:4000/api/companies");
  const data = await response.json();

  const paths = data.map((company) => {
    return {
      params: {
        id: company._id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch("http://localhost:4000/api/companies/" + id);
  const company = await response.json();

  return {
    props: {
      company,
    },
    revalidate: 1,
  };
};

const CompanyDetails = ({ company }) => {
  return (
    <>
      <h1>{company.name}</h1>
    </>
  );
};

export default CompanyDetails;
