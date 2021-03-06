import React, { useRef } from "react";
import emailjs from "emailjs-com";

// import mail from '../assets/img/mail.jpg';
import ScrollAnimation from "react-animate-on-scroll";

import Swal from "sweetalert2";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_84kxoro",
        form.current,
        "user_FJUXaGo5NtVXLwhQLoeRz"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("Good job!", "form submited sucessfully", "success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section
      id="contactme"
      className="dark:bg-dark1 dark:text-white transition duration-500 "
    >
      <div className="font-display container mx-auto py-[5rem]">
        <div className="flex flex-col justify-center items-center ">
          <span className="uppercase text-4xl font-bold pb-4">contact me</span>
          <span className="capitalize	font-light tracking-widest">
            lets keep in touch
          </span>
        </div>
        <ScrollAnimation animateIn="fadeIn">
          <div
            className="container bg-gray-800 rounded-md grid grid-cols-12 md:gap-8
                shadow-[0px_0px_44px_-9px_rgba(0,0,0,0.3)] py-5 mt-7"
          >
            <div className="col-span-12 md:col-span-6">
              <div className="col-12 ">
                <h1 className="text-white text-4xl font-bold capitalize">
                  Get in <span className="text-brand">touch</span>
                </h1>
                <p className="text-white py-5 font-normal text-lg leading-7 text-justify">
                  Let's Get In Touch Hit me up if you have some question or want
                  to work together Email me at{" "}
                  <a
                    className="text-blue-700"
                    href="mailto:abhiramps776@gmail.com"
                  >
                    abhiramps776@gmail.com{" "}
                  </a>
                  or Contact me at
                  <a className="text-blue-700" href="tel:+971564451682">
                    {" "}
                    +971564451682
                  </a>
                </p>
                {/* <img src={mail} className=''/> */}
              </div>
            </div>

            <form
              action="#"
              ref={form}
              onSubmit={sendEmail}
              className="col-span-12 md:col-span-6 "
            >
              <div className="py-2 ">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className={InputStyle()}
                />
              </div>
              <div className="py-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={InputStyle()}
                />
              </div>
              <div className="py-2">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  as={"div"}
                  className={InputStyle()}
                  placeholder="Enter Message"
                />
              </div>
              <div className="flex justify-center sm:block">
                <button className="rounded-lg px-4 py-3 bg-brand ">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;


//styling input and textarea
const InputStyle = () => {
  return "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
};
