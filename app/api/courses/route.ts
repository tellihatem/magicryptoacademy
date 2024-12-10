import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server";

export async function POST (
    req : Request,
) {
    try {
        const { userId } = await auth()
        const { title } = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        const course = await db.course.create({
            data: {
                title,
                userId: userId,
            },
        });

        return NextResponse.json(course);
    } catch (error) {
        console.log("[COURSES]", error)
        return new NextResponse ("Internal server error occurred", { status : 500})
    }
}