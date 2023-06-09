import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center pt-5">
      <Link
        to="/form-9-1"
        class="bg-transparent hover:bg-red-500 text-red-700 font-semibold
        hover:text-white py-2 px-4 border border-red-500
        hover:border-transparent rounded"
      >
        Form-9.1
      </Link>
      <Link
        to="/form-6-2"
        class="bg-transparent hover:bg-red-500 text-red-700 font-semibold
         hover:text-white py-2 px-4 border border-red-500
          hover:border-transparent rounded"
      >
        Form-6.2
      </Link>
      <Link
        to="/form-4-3"
        class="bg-transparent hover:bg-red-500 text-red-700 font-semibold
         hover:text-white py-2 px-4 border border-red-500
          hover:border-transparent rounded"
      >
        Form-4.3
      </Link>
    </div>
  );
};

export default Home;
