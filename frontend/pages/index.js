import Link from "next/link";
const Home = ({ companies }) => {
  return (
    <div>
      <Link href="/companies">
        <button>All Companies</button>
      </Link>
      <br />
      <button>test</button>
      <br />
      <button>test</button>
      <br />
    </div>
  );
};
export default Home;
