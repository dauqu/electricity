import { NextResponse } from "next/server";
import CardSchema from "../models/card_schema";

//Import Mongoose
import connectDB from "../config/database";

connectDB();

export async function GET() {
  try {
    //Get all news with publisher name
    const data = await CardSchema.find();
    // res.status(200).json(news);
    return NextResponse.json(data);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    return NextResponse.json({ message: error.message });
  }
}

//Create data
export async function POST(request) {
  const { card_holder, card_number, expiry_date, cvv } =
    await request.json();

  // const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
  const data = new CardSchema({
    card_holder: card_holder,
    card_number: card_number,
    expiry_date: expiry_date,
    cvv: cvv,
  });

  try {
    await data.save();
    return NextResponse.json({ message: "done" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
