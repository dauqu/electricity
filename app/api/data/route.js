import { NextResponse } from "next/server";
import DataSchema from "../models/data";

//Import Mongoose
import connectDB from "../config/database";
connectDB();

export async function GET() {
  try {
    //Get all news with publisher name
    const data = await DataSchema.find();
    // res.status(200).json(news);
    return NextResponse.json(data);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    return NextResponse.json({ message: error.message });
  }
}

//Create data
export async function POST(request) {
  const { customer_name, mobile_no, consumer_id, reason } =
    await request.json();

  // const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
  const data = new DataSchema({
    customer_name: customer_name,
    mobile_no: mobile_no,
    consumer_id: consumer_id,
    reason: reason,
  });

  try {
    await data.save();
    return NextResponse.json({ message: "done" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
