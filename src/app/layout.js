import './globals.css';
import React from 'react';
import Header from '../Header/header';
import Footer from "@/Header/footer";

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <Header />
        <main>{children}</main>

        <Footer />
        </body>
        </html>
    );
}
