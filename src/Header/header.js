"use client";


import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/header.module.css';

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image src="/tree.png" alt="logo" width={40} height={40} />
                <span>Flix</span>
            </Link>

            <button className={styles.menuButton} onClick={toggleSidebar}>
                ☰
            </button>

            <nav>
                <u className={styles.navList}>
                    <p><Link href="/">Home</Link></p>
                    <p><Link href="/about">About</Link></p>
                    <p><Link href="/movie">Movie</Link></p>
                    <p><Link href="/contect">Contect</Link></p>
                </u>
            </nav>

            {showSidebar && (
                <div className={styles.sidebar}>
                    <button className={styles.closeButton} onClick={toggleSidebar}>×</button>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/movie">Movie</Link></li>
                        <li><Link href="/contect">Contect</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
