import React from 'react'
import './Contact.css'
import Title from '../title/Title'
import location from '../../../images/location-icon.png'
import mail from '../../../images/mail-icon.png'
import phone from '../../../images/phone-icon.png'
import arrow from '../../../images/white-arrow.png'

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "dd48860e-b3af-4ef5-b3dc-8ad93c545f95");

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
        <div id='contact' className='contact'>
            <Title Title={"CONTACT US"} subTitle={"Get in Touch"} />

            <div className="message-container">
                <div className="data">
                    <h1>Send us a message ✉️</h1>

                    <p>Feel free to reach out through contact form or find our contact information below. Your feedback,
                        questions, and suggestions are important to us as we strive to provide exceptional service to our
                        university community.
                    </p>

                    <div className="professional-data">

                        <div className="data-shape">
                            <img src={mail} alt="" />
                            <p>Contact@example.dev</p>
                        </div>

                        <div className="data-shape">
                            <img src={phone} alt="" />
                            <p>+1 123-456-7890</p>
                        </div>

                        <div className="data-shape">
                            <img src={location} alt="" />
                            <p>77 Massachusetts Ave, Cambridge<br />MA 02139, United States</p>
                        </div>

                    </div>

                </div>

                <form onSubmit={onSubmit} action="">
                    <label htmlFor="Name">Your name</label>
                    <input type="text" id='Name' placeholder='Enter your name' />

                    <label htmlFor="Phone-number">Phone number</label>
                    <input type="number" id='Phone-number' placeholder='Enter your mobile number' />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter your email id' id='email' />

                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message'>

                    </textarea>

                    <button type='submit'>
                        Submit now
                        <img src={arrow} alt="" />
                    </button>

                    <span>{result}</span>

                </form>

            </div>

        </div>
    )
}
