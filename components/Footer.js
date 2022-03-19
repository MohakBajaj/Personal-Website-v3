import React from "react";
import { BsHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-20">
      <p className="font-primary text-gray-500 dark:text-gray-300 text-center ">
        Made with <BsHeartFill className="inline text-red-300" /> by Mohak Bajaj
      </p>
    </div>
  );
};

export default Footer;
