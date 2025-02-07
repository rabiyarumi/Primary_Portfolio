import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const SendEmail = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_daafkwz', 'template_i6c35rl', form.current, {
            publicKey: 'fBVFPX69ls7D3R5rS',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
   

    <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-lg ">
      <h1 className="text-3xl font-bold text-center mb-6">Get in Touch</h1>
      <p className="text-lg text-center mb-4">
        Have any questions or Feedback? Feel free to reach out!
      </p>


      <div className="flex mt-10">
      <div className="flex flex-col gap-4 justify-center md:w-1/2">
        <div className="flex items-center space-x-4">
          <FaEnvelope className=" text-xl" />
          <a href="mailto:example@email.com" className="text-lg  hover:underline">
            rabiyaarumi@email.com
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <FaPhone className="text-green-500 text-xl" />
          <a href="tel:+1234567890" className="text-lg ">
            +880 1234 567 890
          </a>
        </div>
        <div className="flex items-center space-x-4">
        <FaLocationDot className=" text-xl" />
         <p> Munshiganj, Dhaka, Bangladesh</p>
        </div>

        
      </div>
      <div className=" md:w-1/2">
        
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
        <label>Name</label>
        <input type="text" name="user_name" className="input input-bordered " />
        <label>Email</label>
        <input type="email" name="user_email" className="input input-bordered "/>
        <label>Message</label>
        <textarea name="message" className="textarea textarea-bordered"/>
        <input type="submit" value="Send" className="btn btn-primary mt-4"/>
      </form>
    </div>
      </div>
      
    </div>

    
  );
};

export default SendEmail;
