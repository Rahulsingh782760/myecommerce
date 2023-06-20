
import React from "react";
import './ContactPageStyle.css';
import { Button, styled } from "@mui/material";


const ContactBtn = styled(Button)`
      margin-bottom: 10px;
      font-weight: 600;
      width: 25%;
      font-size: 1.2rem;
      padding: 10px;
`;

const ContactPage = () => {
    return (
        <div className="contact_section">
            <h2 style={{ textAlign: 'center' }}>Contact Page</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14023.804594020767!2d77.31815135084543!3d28.511117461696337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6f6e692db21%3A0xf3f50300ee7d959!2sJaitpur%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1683483668627!5m2!1sen!2sin"
                width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div className="contact_form">
                <form action='https://formspree.io/f/xjvdlvka' method="POST">
                    <input className="input_txt" type='text' placeholder="username" name='username' required />
                    <input className="input_txt" type='email' placeholder="useEmail" name='email' required />
                    <textarea className="input_txt" name='message' rows="4" cols="50" required placeholder="Enter your message" />
                    <ContactBtn variant="contained" type="submit">Send</ContactBtn>
                </form>

            </div>
        </div>
    )
};

export default ContactPage