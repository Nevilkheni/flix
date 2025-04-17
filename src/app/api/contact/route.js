// src/app/api/contact/route.js

import { NextResponse } from 'next/server';
import dbconnect from '@/utils/dbconnect';
import Contact from '@/models/contact';

export async function POST(request) {
    try {
        await dbconnect();

        const body = await request.json();
        console.log("🔥 API HIT with body:", body);

        const { username, email, phone, message } = body;

        const newContact = new Contact({ username, email, phone, message });
        await newContact.save();

        console.log("✅ Contact saved:", newContact);

        return NextResponse.json({ success: true, message: "Contact saved!" });
    } catch (err) {
        console.error("❌ API Error:", err.message);
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
