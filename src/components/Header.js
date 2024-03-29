import React from 'react';

function Header() {
    return (
            <header className="header navbar-light" role="banner">
                <div className="container-fuild" id="head-stuff">
                    <div className="logo">
                        <a href="https://kidsvilledental.in">
                            <img src="/assets/img/kidsville logo-2.png" alt="kidsville Dental" className="img-responsive" width="250" height="120" />
                        </a>
                    </div>
                    <div className="header-widgets  header-widgets-desktop">
                        <div className="pink-offer widget  widget_black_studio_tinymce">
                            <div className="top-header-right">
                                <a href="/appointment/" className="btn appointment-btn white-text">APPOINTMENT</a>&emsp;<a className="white-text" href="https://www.1scriptics.com/appointment/"> Mon - Sat 10:30am to 8:30pm </a> | <a className="white-text" href="/"> Sunday By Appointment</a> | <a className="white-text" href="tel:+91 6358834088"> Emergency Treatment 24 x 7 - Call 6358834088</a>
                            </div>        
                        </div>        
                    </div>
                </div>
                <div className="container-fuild">  
                    <div className="navbar navbar-expand-lg" id="header">
                        <div className="kidsville-logo">
                            <a href="/">
                                <img src="/assets/img/kidsville logo-2.png" alt="kidsville Dental" className="img-responsive" width="180" height="100" />
                            </a>
                        </div>    
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                         </button>         
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="dropdown navbar-nav end">
                                <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/" data-toggle="dropdown" aria-expanded="false">Home</a>
                                    <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="/meet-our-team">Meet Our Team!</a>
                                        <a href="/about">About Us</a>
                                        <a href="/why-us">Why US?</a>
                                        <a href="/blogs">Blogs</a>
                                        <a href="/location">Location</a>
                                        <a href="/treating-children-at-kidsville">Our way of treating children at Kidsville</a>
                                    </div>
                                </button>
                            </div>
                            <div className="dropdown navbar-nav end">
                                <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/children-dentistry" data-toggle="dropdown" aria-expanded="false">Children's Dentistry</a>
                                    <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="/your-first-visit">Your First Visit</a>
                                        <a href="/fillings">Fillings</a>
                                        <a href="/root-canal-treatment-in-children">Root Canal Treatment in children</a>
                                        <a href="/children-crowns">Children's Crowns</a>
                                        <a href="/tooth-removal">Tooth Removal</a>
                                        <a href="/space-maintainer">Space Maintainer</a>
                                        <a href="/digital-xray">Digital X-ray</a>
                                        <a href="/emergency-dental-treatment">Emergency Dental Treatment</a>
                                    </div>
                                </button>
                            </div>
                            <div className="dropdown navbar-nav end">
                                <button className="dropbtn drop-down"><a className=" dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Preventive Dentistry</a>
                                    <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="/dental-hygiene-for-children">Dental Hygiene For Children</a>
                                        <a href="/dental-hypomineralization">Dental Hypomineralization</a>
                                        <a href="/dental-sealants">Dental Sealants</a>
                                        <a href="/fluoride-varnish">Fluoride Varnish</a>
                                        <a href="/sports-dentistry">Sports Dentistry</a>
                                        <a href="/brushing-techniques-for-all-ages">Brushing techniques for children</a>
                                        <a href="/pattern-of-tooth-decay">Pattern of tooth decay</a>
                                    </div>
                                </button>
                            </div>    
                            <div className="dropdown navbar-nav end">
                                <button className="dropbtn drop-down"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Sedation Services</a>
                                    <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="/treatment-under-iv-sedation">Treatment under IV Sedation</a>
                                        <a href="/treatment-under-gerenal-anesthesia">Treatment Under General Anesthesia</a>
                                    </div>
                                </button>
                            </div>    
                            <div className="dropdown navbar-nav end">
                                <button className="dropbtn drop-down"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Orthodontics</a>
                                    <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="/braces-consult">Braces Consult</a>
                                        <a href="/clear-aligner-or-braces">Clear Aligners or Braces?</a>
                                        <a href="/early-orthodontics">Early Orthodontics</a>
                                        <a href="management-of-oral-habits">Management of Oral Habits</a>
                                        <a href="orthodontics-for-teen">Orthodontics for Teens</a>
                                        <a href="myofunctional-treatment">MyoFunctional Treatment</a>
                                        <a href="/retainers">Retainers</a>
                                    </div>
                                </button>
                            </div>
                            <div className="dropdown navbar-nav">
                                <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/special-care-dentistry">Special Care Dentistry</a>
                                </button>
                            </div> 
                            <div className="dropdown navbar-nav end">
                                <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/contact-us" data-toggle="dropdown" aria-expanded="false">Contact</a>
                                    <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="/contact-us">Contact Us</a>
                                        <a href="/covid-19-update">Covid 19 Updates</a>
                                        <a href="/newsletter-sign-up">Newsletter Sign-Up</a>
                                        <a href='/faqs'>FAQs</a>
                                    </div>
                                </button>
                            </div>  
                        </div>
                    </div>
                </div>
            </header>






            



    )
}
        
export default Header                    