import React, { useState } from "react";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import Button from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";


const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  let name;
  let email;
  let message;
  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    name = e.target[0].value;
    email = e.target[1].value;
    message = e.target[2].value;

    const data = {
      name: name,
      email: email,
      message: message,
    }
    const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })
    if (res.ok) {
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      setSuccess(true);
      setSubmitting(false);
    };


  }

  if (success === true) {
    return (
      <div className="font-primary text-center text-gray-500 dark:text-gray-300">
        Thank you for your message!<br></br>
        I'll get back to You as soon as possible.<br></br>❤️
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-4 md:gap-x-20 ">
      <div className="order-last md:order-first flex items-start md:items-end flex-col justify-center mt-10 md:mt-0">
        <div className="text-right flex md:flex-col items-center space-x-2 md:items-end">
          <BsTelephone className="text-2xl md:text-4xl md:items-end ml-auto text-gray-500 dark:text-gray-300" />
          <p className="md:mt-5 font-primary text-gray-500 dark:text-gray-300">
            +91 8368110739
          </p>
        </div>
        <div className="text-right flex md:flex-col items-center space-x-2 md:items-end mt-5 md:mt-20">
          <BsEnvelope className="text-2xl md:text-4xl ml-auto text-gray-500 dark:text-gray-300" />
          <p className="md:mt-5 font-primary text-gray-500 dark:text-gray-300">
            bmohak87@gmail.com
          </p>
        </div>
        <div className="text-right flex md:flex-col items-center space-x-2 md:items-end mt-5 md:mt-20">
          <BsGeoAlt className="text-2xl md:text-4xl ml-auto text-gray-500 dark:text-gray-300" />
          <p className="md:mt-5 font-primary text-gray-500 dark:text-gray-300">
            New Delhi, India
          </p>
        </div>
      </div>
      <div className="md:col-span-2 md:mt-0">
        <form onSubmit={handleSubmit}>
          <Input
            label="Enter your name"
            id="name"
            name="name"
            placeholder="your name"
            required={true}
          />

          <Input
            label="Enter your email"
            id="email"
            name="email"
            placeholder="youremail@example.com"
            required={true}
          />
          <Textarea
            label="Enter your message"
            id="message"
            type="textarea"
            name="message"
            placeholder="message description here"
            required={true}
          />
          <Button type="submit" disabled={submitting}>
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
