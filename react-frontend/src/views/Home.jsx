import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-5">
      <p className="text-3xl pb-5">Forms: </p>
      <Link
        to="/form-9-1"
        className="bg-transparent hover:bg-red-500 text-red-700 font-semibold
        hover:text-white py-2 px-4 border border-red-500
        hover:border-transparent rounded"
      >
        Form-9.1
      </Link>
      &nbsp;&nbsp;
      <Link
        to="/form-6-2"
        className="bg-transparent hover:bg-red-500 text-red-700 font-semibold
         hover:text-white py-2 px-4 border border-red-500
          hover:border-transparent rounded"
      >
        Form-6.2
      </Link>
      &nbsp;&nbsp;
      <Link
        to="/form-4-3"
        className="bg-transparent hover:bg-red-500 text-red-700 font-semibold
         hover:text-white py-2 px-4 border border-red-500
          hover:border-transparent rounded"
      >
        Form-4.3
      </Link>
    </div>
  );
};

export default Home;
