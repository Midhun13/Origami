import React from 'react';
import './Css/Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4" id='ContactUs'>
                        <h4><b>CONTACT US</b></h4>
                        <ul className="list-unstyled">
                            <li>
                                <i className="bi bi-telephone"></i> +91 90754xxxx
                            </li>
                            <li>
                                <i className="bi bi-envelope"></i> info@origamienglish.com
                            </li>
                            <li>
                                <i className="bi bi-geo-alt"></i> 123 Origami St, Language City,Delhi
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 id='footerOrigami'><b>Origami English Training Institute</b></h4>
                        <p id='para1'>Empowering your English skills for a brighter future.</p>
                    </div>
                    <div className="col-md-4" id='SocialMedia'>
                        <h4><b>FOLLOW US</b></h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://facebook.com">
                                    <i className="bi bi-facebook"></i> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com">
                                    <i className="bi bi-twitter"></i> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com">
                                    <i className="bi bi-instagram"></i> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section>
                <p className="text-center mt-3">© 2024 Origami English Training Institute. All rights reserved.</p>
            </section>
        </footer>
    );
};

export default Footer;
