import React, { useState } from 'react';
import './contact.css'
import emailjs from "emailjs-com";

const Contact = () => {
    const [status, setStatus] = useState("");
    const sendEmail = (e) => {
        // setShowLoad(true);
        e.preventDefault();
        emailjs
            .sendForm(
                "service_fl1uc26",
                "template_cki2rch",
                e.target,
                "user_o7bRL2JlmvfEfaIv5l2z1"
            )
            .then(
                (result) => {
                    setInterval(() => {
                        console.log(result.text);
                        // setShowLoad(false);
                        setStatus("SUCCESS");
                    }, 4000);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <>
            <div className='c-container'>

                <div className="c-contactform">
                    {status && renderAlert()}
                    <h2>Contact Us</h2>
                    <form
                        onSubmit={sendEmail}
                    >
                        <div className="c-formbox">
                            <div className="c-inputbox w50">
                                <span>First Name</span>
                                <input type="c-text" required name="first_name" />
                            </div>
                            <div className="c-inputbox w50">
                                <span>Last Name</span>
                                <input type="c-text" required name="last_name" />
                            </div>
                            <div class="c-inputbox w50">
                                <span>Email Address </span>
                                <input type="c-email" required name="email" />
                            </div>
                            <div class="c-inputbox w50">
                                <span>Mobile No.</span>
                                <input type="c-text" required name="mobile" />
                            </div>
                            <div class="c-inputbox w100">
                                <span>Message</span>
                                <textarea
                                    required
                                    placeholder="Write your message here..."
                                    name="message"
                                />
                                {/* <span></span> */}
                            </div>
                            <div className="c-inputbox w100 cbtn">
                                <input type="submit" value="Send" required />
                                {/* <span>First Name</span>  */}
                            </div>
                        </div>
                    </form>
                </div>

            </div>


        </>
    );

};

export default Contact;
const renderAlert = () => (
    <div className="c-received">
        <p className="c-receivepara">Message send successfully</p>
    </div>
);