import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState("")
    console.log(process.env.REACT_APP_WHATSAPP);

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          process.env.REACT_APP_ID1,
          process.env.REACT_APP_ID2,
          form.current,
          process.env.REACT_APP_ID3
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessage({ success: true, message: 'Message successfully sent' });
            setTimeout(() => {
              setMessage('');
            }, 4000);
          },
          (error) => {
            console.log(error.text);
            setMessage({
              success: false,
              message: 'An error was encountered while trying to send',
            });
            setTimeout(() => {
              setMessage('');
            }, 4000);
          }
        );
        e.target.reset()
    };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ojotriumph4@gmail.com</h5>
            <a href={process.env.REACT_APP_EMAIL} target="_blank">
              Send a message
            </a>
          </article>

          {/* <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Triumph</h5>
            <a href="https://m.me/ernest.acheiver" target="_blank">
              Send a message
            </a>
          </article> */}

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href={process.env.REACT_APP_WHATSAPP} target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>

          {message !== '' ? (
            <p
              className={`message ${
                message.success ? 'success-message' : 'error-message'
              }`}
            >
              {message.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default Contact;