import {
  FaInstagram,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";
import Button from "./Button";

const Social = () => {
  return (
    <>
      <Button href="https://github.com/Mohak-CODING-HEAVEN" target="_blank">
        <FaGithubAlt className="text-lg lg:text-xl" />
      </Button>
      <Button href="https://instagram.com/be.techie.with.mohak" target="_blank">
        <FaInstagram className="text-lg lg:text-xl" />
      </Button>
      <Button href="https://linkedin.com/in/mohak-bajaj" target="_blank">
        <FaLinkedinIn className="text-lg lg:text-xl" />
      </Button>
    </>
  );
};

export default Social;
