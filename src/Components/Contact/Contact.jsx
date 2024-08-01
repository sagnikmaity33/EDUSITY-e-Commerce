import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import React from 'react'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "79655820-c85c-4200-a0d9-e5cee434e8f7");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>
                    Send us a Message
                    <img src={msg_icon} alt="Message Icon" />
                </h3>
                <p>Feel free to reach out through contact from or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="Mail Icon" />
                        contact@gmail.com
                    </li>
                    <li>
                        <img src={phone_icon} alt="Mail Icon" />
                        123-456-789
                    </li>
                    <li>
                        <img src={location_icon} alt="Mail Icon" />
                        77 Massachusetts Avenue, Cambridge <br /> MA 02139, United States
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Enter Your Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter Your Name" required />
                    <label>Enter Your Phone Number</label>
                    <input type="tel" name="phone" id="phone" placeholder="Enter Your Phone Number" required />
                    <label>Write Your Message Here</label>
                    <textarea name="message" id="message" rows={6} placeholder="Enter Your Message Here...." required></textarea>
                    <button className="btn dark-btn" type="submit">
                        Submit Now
                        <img src={white_arrow} alt="White Arrow" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;