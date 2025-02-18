import { NextResponse } from "next/server";
import { connectDB } from "../db/route";
import { User } from "@/components/models/users";


export const GET =async (req: Request) => {
    try {
        await connectDB();
        console.log("Connected To data base");

        const data = await User.find({role: {$in: ["driver", "dispatcher"]}});
        return NextResponse.json(data, {status: 200}); 
    } catch (error) {
        return NextResponse.json({success: false, message: "Error fetching users."}, {status: 500});
    }
}