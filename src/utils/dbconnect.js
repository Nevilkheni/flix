
import mongoose from "mongoose";

const dbconnect = async () => {
    if (mongoose.connection.readyState >= 1) return;

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB connected successfully!");
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message);
        throw err;
    }
};

export default dbconnect;
