import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Link from 'next/link';
import styles from '../styles/contactcard.module.css';

const Contactcard = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid_card}>

                        <i><MdEmail/></i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected</p>
                        <p className={styles.last_para}>Response time: 72 hours</p>
                        <Link href="/flix/public">
                            <span>Send Email →</span>
                        </Link>
                    </div>
                    <div className={styles.grid_card}>
                        <i><MdPhone/></i>
                        <h2>Live Chat</h2>
                        <p>Weekdays: 9 AM - 6 AM ET</p>
                        <p className={styles.last_para}>Weekdays: 9 AM - 5 AM ET</p>
                        <Link href="/flix/public">
                            <span>Send Email →</span>
                        </Link>
                    </div>
                    <div className={styles.grid_card}>
                        <i><MdLocationOn/></i>
                        <h2>Community Forum</h2>
                        <p>Monday to Friday Expected</p>
                        <p className={styles.last_para}>Response time: 72 hours</p>
                        <Link href="/flix/public">
                            <span>Send Email →</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contactcard;
