import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <div className="w-[70%] mx-auto">
        <h2 className="text-4xl font-bold text-center  mb-8">Contact me</h2>
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
  );
};

export default SendEmail;
