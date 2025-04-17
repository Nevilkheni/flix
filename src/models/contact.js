
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    message: String,
});

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);
