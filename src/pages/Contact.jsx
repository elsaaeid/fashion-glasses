import {React, useRef} from 'react';
import emailjs from 'emailjs-com';
import "../styles/contact.css";

const Contact = () => {

  const form =useRef()
	const sendEmail = (e) => {
        e.preventDefault();

       emailjs.sendForm('service_1heos0l', 'template_gkno955', form.current, 'cnPFS7uNaxn0ShtpF')
		e.target.reset()
      };
  return (
    <section id='contact' >
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>	
            <button className="submit btn m-auto" type="submit">Send Message</button>
		      </form>
          </section>
  )
};

export default Contact;
