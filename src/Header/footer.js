import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <h2 className={styles.footerTitle}>Flix</h2>

                <div className={styles.footerSection}>
                    <h3>Company</h3>
                    <ul>
                        <li>Home</li>
                        <li>Contact us</li>
                        <li>About us</li>
                        <li>Get started</li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Services</h3>
                    <ul>
                        <li>App design</li>
                        <li>Web design</li>
                        <li>Logo design</li>
                        <li>Banner design</li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Account</h3>
                    <ul>
                        <li>Profile</li>
                        <li>My account</li>
                        <li>Preferences</li>
                        <li>Purchase</li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Courses</h3>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>Photography</li>
                        <li>Photoshop</li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3>Subscribe</h3>
                    <input type="email" placeholder="Enter your email" className={styles.subscribeInput} />
                    <button className={styles.subscribeBtn}>Subscribe</button>
                </div>
            </div>

            <div className={styles.footerSocials}>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </footer>
    );
};

export default Footer;
