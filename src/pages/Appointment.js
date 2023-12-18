import React, { Component, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Appointment = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.send('service_ytws9ft','template_a5pjohh', form.current, 'I2gXrmkHRH1ZvdDVt')
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
                        <h1 className="main-title__primary">Appointment</h1>
                    </div>
                </div>
                <div className="container-fuild contact_section">
                        <form id="contact-form" action="/" onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="fname">First Name</label>
                                <input type="text" name="fname" placeholder="Your name" required/>
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" name="lname" placeholder="Your last name" required/>
                                <label htmlFor="aemail">Email</label>
                                <input type="text" name="email" placeholder="Your email" required/>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                                <label htmlFor="date">Date</label> <br/>
                                <input type="datetime-local" name="date" /> <br/><br/>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" placeholder="Subject.." required/>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" placeholder="Please give your message..." required/>
                                <input type="submit" value="Submit" />
                             </div>
                             </div>
                        </form>
                </div>
            </div>
        )
    }


export default Appointment