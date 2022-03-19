import React from "react";

const Textarea = ({ label, id, name, type = "text", placeholder, onChange, required }) => {
  return (
    <div className="mb-10">
      <label
        className="font-primary text-gray-500 dark:text-gray-300 block pb-4"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        id={id}
        className="font-primary text-gray-500 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 shadow-inner p-4 rounded-lg w-full transition duration-500 transform focus:outline-none focus:ring focus:ring-gray-500 focus:bg-white focus:shadow-lg focus:scale-105"
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
};

export default Textarea;
