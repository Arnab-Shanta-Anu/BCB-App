import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { MdMail } from "react-icons/md";
const Footer = () => {
  return (
    <footer>
      <hr className="w-2/3 border-1 border-gray-400 mx-auto mt-5" />
      <h3 className="text-center font-bold text-gray-500">
        Made by Arnab Shanta Anu
      </h3>
      <p className="flex justify-center">
        <FaFacebookSquare style={{ fontSize: "32px" }} />
        <a href="https://www.facebook.com/arnob.shanto.anu" className="text-xl">
          Arnob Shanto Anu
        </a>
      </p>
      <p className="flex justify-center">
        <FaGithubSquare style={{ fontSize: "32px" }} />
        <a href="https://github.com/Arnab-Shanta-Anu" className="text-xl">
          Arnab Shanta Anu
        </a>
      </p>
      <p className="flex justify-center">
        <MdMail style={{ fontSize: "32px" }} />
        <a href="mailto:arnabshantaanu@gmail.com" className="text-xl">
          arnabshantaanu@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
