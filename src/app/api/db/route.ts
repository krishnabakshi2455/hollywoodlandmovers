import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { User } from "@/components/models/users"; // Ensure correct import path
import bcrypt from "bcrypt";


const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    console.error("No MONGODB URI found.");
}

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) return;

    try {
        const db = await mongoose.connect(MONGODB_URI);
        isConnected = db.connections[0].readyState === 1;
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};