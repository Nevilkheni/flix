"use client";

import React, { useState } from 'react';
import styles from "@/styles/contact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ['latin'], weight: ['400', '600'] });

const ContactForm = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { ...user };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const responseData = await res.json();
            console.log("✅ Response:", responseData);

            // Optional: reset form or show success
            if (responseData.success) {
                alert("Message sent successfully!");
                setUser({ username: "", email: "", phone: "", message: "" });
            }
        } catch (err) {
            console.error("❌ Client Error:", err);
        }
    };

    return (
        <form className={`${styles.contact_form} ${mulish.className}`} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username">
                    <p>Enter your Name</p>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        required
                        className={mulish.className}
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email">
                    <p>Enter your Email</p>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                        className={mulish.className}
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone">
                    <p>Enter your Phone</p>
                    <input
                         type="text"
                         name="phone"
                         value={user.phone}
                         onChange={handleChange}
                         minLength={10}
                         maxLength={10}
                         pattern="\d{10}" 
                         required
                         className={mulish.className}
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message">
                    <p>Enter your Message</p>
                    <textarea
                        name="message"
                        rows={5}
                        value={user.message}
                        onChange={handleChange}
                        required
                        className={mulish.className}
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <button type="submit" className={`${styles.btn} ${mulish.className}`}>
                    Send Message
                </button>
            </div>

            <div className={styles.spece}></div>
        </form>
    );
};

export default ContactForm;
