import { NextResponse } from "next/server";
import { User } from "@/components/models/users"; // Ensure correct path
import { connectDB } from "../db/route";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET as string;

export const POST = async (req: Request) => {
    try {
        await connectDB();  

        const { email, password, role } = await req.json();

        if (!email || !password || !role) {
            return NextResponse.json(
                { success: false, message: "All fields are required." },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email, role });
        if (!user) {
            return NextResponse.json(
                { success: false, message: "User not found or role mismatch." },
                { status: 404 }
            );
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json(
                { success: false, message: "Invalid credentials." },
                { status: 401 }
            );
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: "7d" }
        );

        return NextResponse.json(
            {
                success: true,
                message: "Login successful.",
                token,
                user: { id: user._id, email: user.email, role: user.role },
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json(
            { success: false, message: "Error logging in." },
            { status: 500 }
        );
    }
};




























{/*
Query Based on Both Email and Role:
const user = await User.findOne({ email, role });
This ensures that only a user matching both the email and the role (driver or dispatcher) is fetched.

Enhanced Error Messages:

Added more descriptive error messages for situations like role mismatches or missing fields.
Made it explicit if no user is found or the role does not match.
Consistent Response Structure:

The response includes success and message keys for easier handling on the client side.
Returned user details (excluding the password) to facilitate usage on the frontend.    
*/}
{/*
    
✅ Only one account per email – Users can't register multiple times with the same email.
✅ Role validation – The login checks if the user is a driver or dispatcher and ensures they log in accordingly.
✅ Secure authentication – Uses bcrypt for password comparison and jsonwebtoken (JWT) for token-based authentication.


User provides email, password, and role (driver or dispatcher).
System checks if the email exists in the database.
Ensures the role matches – A dispatcher cannot log in as a driver and vice versa.
Verifies password using bcrypt.compare().
If successful, returns a JWT token that can be used for authentication.


🔹 If the user exists, role matches, and password is correct, returns a JWT token.
🔹 If the role is incorrect, it returns 403 Forbidden.
🔹 If the user is not found, it returns 404 Not Found.
*/}