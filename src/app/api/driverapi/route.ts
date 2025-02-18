import { NextResponse } from "next/server";
import { User } from "@/components/models/users"; // Ensure correct path
import { connectDB } from "../db/route";// Ensure correct path
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const GET = async (req: Request) => {
    try {
        await connectDB();

        const authHeader = req.headers.get("authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            console.error("🚨 Missing or invalid Authorization header");
            return NextResponse.json(
                { success: false, message: "Unauthorized: No token provided." },
                { status: 401 }
            );
        }

        const token = authHeader.split(" ")[1];
        console.log("Authorization Header:", authHeader);
        console.log("Extracted Token:", token);
        console.log("JWT Secret:", JWT_SECRET);
        const decoded: any = jwt.verify(token, JWT_SECRET);
        if (!decoded) {
            console.log("decoded",decoded);
            
            return NextResponse.json(
                { success: false, message: "Invalid token." },
                { status: 403 }
            );
        }

        const driver = await User.findById(decoded.userId).select("-password");
        if (!driver) {
            return NextResponse.json(
                { success: false, message: "Driver not found." },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, data: driver },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error fetching driver data:", error);
        return NextResponse.json(
            { success: false, message: "Server error." },
            { status: 500 }
        );
    }
};
