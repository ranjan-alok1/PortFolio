import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { message } from "antd";
import { FaMessage } from "react-icons/fa6";
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
        console.log(result.text);
        message.success('Message sent successfully!');
      }, (error) => {
        console.error(error.text);
        message.error('Failed to send the message, please try again.');
      });

    e.target.reset();
  };


  return (
    <Fade>
      <div
        name="contact"
        className="min-h-screen max-w-[1366px] mx-auto flex flex-wrap justify-center items-center gap-12 p-6 delay-2"
      >
        <div className="w-full md:flex-1 flex flex-col gap-10 text-gray-300 font-bold">
          <Fade cascade direction="left" damping={0.05}>
            <h1 className="text-6xl font-bold">Let's work <span className="text-[#24ce6b]">together</span> </h1>
            <div>
              <div
                className="border-2 rounded m-4 p-4 inline-block border-gray-300 hover:cursor-pointer group hover:border-[#24ce6b]">
                <span className="inline-block mr-3">
                  <FaMessage size={20} className="text-gray-300 group-hover:text-[#24ce6b]" />
                </span>
                <p className="text-2xl text-gray-300 inline-block group-hover:text-[#24ce6b]">Say hello to me!</p>
              </div>
            </div>

          </Fade>
        </div>

        <div className="w-full md:flex-1">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 mt-12">
            <Fade cascade direction="right" damping={0.05}>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Name"
                className="p-5 w-full bg-transparent border border-white text-white rounded-md"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Email"
                className="p-5 w-full bg-transparent border border-white text-white rounded-md"
              />
              <textarea
                name="message"
                rows={10}
                placeholder="Message"
                className="p-5 w-full bg-transparent border border-white text-white rounded-md"
              />
              <button
                type="submit"
                className="p-3 w-full border-none bg-[#24ce6b] hover:bg-pink-600 cursor-pointer font-bold text-gray-300 text-2xl rounded-md"
              >
                Submit
              </button>
            </Fade>
          </form>
        </div>

      </div>
    </Fade>
  );
};

export default Contact;
