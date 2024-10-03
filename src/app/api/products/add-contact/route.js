import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const data = await req.JSON();
        console.log("DATA", data);
           return NextResponse.json({ message: "Ok", data });
        } catch(error) {
                return NextResponse.json({ message: "Error", products });
        }   
}