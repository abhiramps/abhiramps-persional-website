import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

// import mail from '../assets/img/mail.jpg';
const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
       
        emailjs.sendForm('gmail', 'template_84kxoro', form.current, 'user_FJUXaGo5NtVXLwhQLoeRz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <section id="contactme" className='font-display container-sm py-[5rem]'>
            <div className='flex flex-col justify-center items-center '>
                <span className='uppercase text-4xl font-bold pb-4'>contact me</span>
                <span className='capitalize	font-light tracking-widest'>lets keep in touch</span>
            </div>

            <div className="container-sm bg-gray-800 rounded-md grid grid-cols-12 md:gap-8
                shadow-[0px_0px_44px_-9px_rgba(0,0,0,0.3)] py-5 mt-7">
                <div className="col-span-12 md:col-span-6">
                    <div className="col-12 ">
                        <h1 className='text-white text-4xl font-bold capitalize'>Get in <span className="text-brand">touch</span></h1>
                        <p className='text-white py-5 font-normal text-lg leading-7 text-justify'>Let's Get In Touch Hit me up if you have some question or want to work together 
                            Email me at <a className='text-blue-700' href='mailto:abhiramps776@gmail.com'>abhiramps776@gmail.com </a>or Contact me at 
                            <a className='text-blue-700' href='tel:+971564451682'> +971564451682</a>
                        </p>
                        {/* <img src={mail} className=''/> */}
                    </div>
                </div>

                <form action="#" ref={form} onSubmit={sendEmail} className="col-span-12 md:col-span-6 ">
                    <div className="py-2 ">
                        <input type="text" className="form-control py-3 bg-gray-100" placeholder="Enter your name" />
                    </div>
                    <div className="py-2">
                        <input type="email" className="form-control py-3 bg-gray-100" placeholder="Enter your email" />
                    </div>
                    <div className="py-2">
                        <textarea name="" id="" cols="30" rows="5" className="form-control bg-gray-100" placeholder="Enter Message"></textarea>
                    </div>
                    <div>
                        <button className="rounded px-4 py-3 bg-brand">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
