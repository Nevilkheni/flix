import React from 'react';
import Contactcard from "@/Header/contactcard";
import styles from "@/styles/contact.module.css";
import Contactform from "@/Header/contactform";


const Page = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact US</h1>
                <Contactcard/>
                <section className={styles.contact_section}>
                    <h2>We&apos;d love to hear <span> from you </span></h2>
                    <Contactform/>

                </section>
            </div>
        </>
    );
};

export default Page;