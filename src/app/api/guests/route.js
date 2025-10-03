import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Guest from "@/models/Guest";

// POST → simpan data
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newGuest = await Guest.create(body);
    return NextResponse.json({ success: true, data: newGuest });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// GET → ambil semua data
export async function GET() {
  try {
    await connectDB();
    const guests = await Guest.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: guests });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
