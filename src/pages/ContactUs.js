import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs  = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.send('service_ytws9ft','template_pscmv6t', form.current, 'I2gXrmkHRH1ZvdDVt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

        return (
            <div className="box-container">
                <div className="main-title">
                    <div className="container">
                        <h1 className="main-title__primary">Contact Us</h1>
                    </div>
                </div>
                <div className="container contact_section">
                   <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 contact-left">
                            <h2 className="contact-left_heading">We Would Love to Hear from You</h2>
                            <p>Please write or call us with your questions or comments.</p>
                            <h4>Address:</h4>
                            <p>Kidsville Dental,  New Adhyashakti Society,  Beside Maharaja Complex, Near Balaji Restaurant,  Prernatirth Derasar Road,  Prahladnagar,<br/>Satellite, Ahmedabad -380015</p>
                            <h4>Contacts:</h4>
                            <p className="cnt-link"><i className="fa fa-phone"></i><span>&emsp;<a href="tel:+91 6358834088">+91 6358834088</a></span></p>
                            <p className="cnt-link"><i className="fa fa-envelope"></i><span>&emsp;<a href="mailto:kidsvilledental@gmail.com">kidsvilledental@gmail.com</a></span></p>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                            <form id="contact-form" action="/" onSubmit={sendEmail}>
                                <label htmlFor="fname">First Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Your name" required/>
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name" required/>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Subject.." required/>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Please give your message..." />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                   </div>
                </div>
            </div>
        )
    }


export default ContactUs