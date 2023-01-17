import mongoose, {Schema,model, Document } from "mongoose";

interface userData{
    fullname: string;
    email: string;
    password: string;
    stack: string;
};

interface iUserData extends userData, Document{};

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please enter a valid email address"],
        lowercase: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Please enter a strong password"],
        min: [6, "Please enter at least 6 characters"],
    },
    fullname: {
        type: String,
        required: [true, "Please enter your fullname"],
    },
    stack: {
        type: String,
    }
}, {timestamps: true});

const userModels = model<iUserData>("USERS", userSchema);

export default userModels;