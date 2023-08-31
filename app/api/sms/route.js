import { NextResponse } from "next/server";
import SmsSchema from "../models/sms";

//Import Mongoose
import connectDB from "../config/database";

connectDB();

export async function GET() {
  try {
    //Get all news with publisher name
    const data = await SmsSchema.find();
    // res.status(200).json(news);
    return NextResponse.json(data);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    return NextResponse.json({ message: error.message });
  }
}

//Create data
export async function POST(request) {
  const { body, sender } = await request.json();

  // const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
  const data = new SmsSchema({
    body: body,
    sender: sender,
  });

  try {
    await data.save();
    return NextResponse.json({ message: "done" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
