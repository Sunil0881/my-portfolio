import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mtbxdwe', 'template_274jjsp', form.current, 'dHqWDQSysc65dG5Uv')
        .then((result) => {
            console.log(result.text);
            alert("message send");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  
    

    return (
        <div className="h-screen bg-indigo-950">
            <form className="flex-1 flex flex-col gap-6 w-full mx-auto" ref={form} onSubmit={sendEmail} >
                <center className="text-5xl font-bold text-white pt-14">Let's <span className="text-red-500">Connect</span></center>
                <div className="pt-10 flex gap-x-6 w-full justify-center">
                    <input type="text" name="user_name" placeholder="Your Name" className="border-3 bg-indigo-950 rounded-lg w-96 h-10 p-4  ring-2 "></input>
                    <input type="email" name="user_email" placeholder="Your Email" className="border-3 bg-indigo-950 rounded-lg w-96 h-10 p-4 ring-2"></input>

                </div>
                <div class="flex justify-center ">
                    <input type="text" name="message" placeholder="Write Message Here..."
                        class="bg-indigo-950 h-48 w-96 pl-2 text-lg text-white border-3 border-blue-800 rounded-lg ring-2"></input>
                </div>
                <div className="flex justify-center ">
                <button type="submit" value="Send" className="text-red-500 text-xl  font-bold text-white border-4 bg-red-500 rounded-full border-red-500 px-3 py-1  hover:bg-white hover:text-red-500 hover:border-white">Send Message</button></div>
            </form>
           
        </div>
        
    );
}

export default Contact;