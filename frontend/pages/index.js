import Link from "next/link";
const Home = () => {
  return (
    <div>
      <Link href="/companies">
        <button>All Companies</button>
      </Link>
      <br />
      <Link href="/companies/address">
        <button>Address and Phone no.</button>
      </Link>
      <br />
      <Link href="/companies/id">
        <button>Id and Password</button>
      </Link>
      <br />
    </div>
  );
};
export default Home;
