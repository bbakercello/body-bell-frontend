import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";


const ContactUs = () => {
  const form = useRef();
  let [isOpen, setIsOpen] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ogkm0hv",
        "template_6cwqt8l",
        form.current,
        "3RtjBFIhL4T952m7s"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-neutral-400 rounded-lg p-1 mt-2">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col mt-4 pl-3 pr-3"
      >
        <label className="font-bold pb-2 ">Name</label>
        <input
          type="text"
          name="user_name"
          className="p-1 rounded-sm work text-xs"
        />
        <label className="font-bold pb-2 pt-2">Email</label>
        <input
          type="email"
          name="user_email"
          className="p-1 rounded-sm work text-xs"
        />
        <label className="font-bold pb-2 pt-2">Message</label>
        <textarea name="message" className="p-1 rounded-sm h-20 work text-xs" />
        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          className="flex justify-center pt-1 pb-1 "
        >
          <input
            className="rounded-lg mt-2 mb-1 bg-slate-700  text-slate-100 w-16 font-bold pt-2 pb-2"
            type="submit"
            value="Send"
          />
        </motion.div>
      </form>
    </div>
  );
};

export default ContactUs;
