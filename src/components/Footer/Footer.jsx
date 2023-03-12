import React from "react";
import Logo from "../../assets/Logo.svg"
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <img src ={ Logo } alt="Little Lemon's Logo" width="250"/>
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials</p>
            </div>
            <div className="footer-content">
                <div className="locations">
                    <h5>LOCATIONS</h5>
                    <ul>
                        <li>Accra</li>
                        <li>Kumasi</li>
                        <li>Cape Coast</li>
                        <li>Tamale</li>
                    </ul>
                </div>
                <div className="opening-times">
                    <h5>OPENING TIMES</h5>
                    <ul>
                        <li>Mon - Wed: 10:30am - 10:00pm</li>
                        <li>Fri: 12:00pm - 11:00pm</li>
                        <li>Sat - Sun: 9:30am - 9:00pm</li>
                    </ul>
                </div>
                <div className="contact">
                    <h5>CONTACT US</h5>
                    <ul>
                        <li>Address: 102 Formalis Ave, South Row - Accra</li>
                        <li>Phone: 030 3441 7622</li>
                        <li>Email: thelittlelemon@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </footer>

    )
}

export default Footer;