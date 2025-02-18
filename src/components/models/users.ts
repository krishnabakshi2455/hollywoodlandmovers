// models/User.ts
import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    role: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
});

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
