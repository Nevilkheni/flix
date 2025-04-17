import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/flixx");
        console.log("✅ MongoDB connection successful");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
    } finally {
        await mongoose.connection.close(); // make sure it waits for close
    }
};

connectDB();
