import Link from "next/link";
const Home = () => {
  return (
    <div>
      <Link href="/companies">All Companies</Link>
      <br />
      <button>Address and Phone no.</button>
      <br />
      <button>Id and Password</button>
      <br />
    </div>
  );
};
export default Home;
