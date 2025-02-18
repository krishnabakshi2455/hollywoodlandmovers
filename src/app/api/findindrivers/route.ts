import { connectDB } from "../signup/route"; // Ensure this path is correct
import { User } from "@/components/models/users"; // Ensure correct import path
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const drivers = await User.find({ role: "driver" });
        return NextResponse.json({ success: true, data: drivers });
    } catch (error) {
        console.error("Error fetching drivers:", error);
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
