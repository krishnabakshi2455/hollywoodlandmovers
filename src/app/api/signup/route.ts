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

export const POST = async (req: Request) => {
    try {
        await connectDB();

        const body = await req.json();
        console.log("Received Data:", body);

        const { email, username, role, password } = body;

        if (!email || !username || !role || !password) {
            return NextResponse.json(
                { message: "All Fields Are Required" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, username, role, password: hashedPassword });

        await newUser.save();
        return NextResponse.json({ message: "User Created Successfully" }, { status: 201 });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { message: "Error Signing User" },
            { status: 500 }
        );
    }
};
