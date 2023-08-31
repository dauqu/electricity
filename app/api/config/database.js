import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://flutter:7388139606@cluster0.biu5l.mongodb.net/?retryWrites=true&w=majority");
    console.log("MongoDB connection SUCCESS");
    // require('../data/import');
  } catch (error) {
    console.error("MongoDB connection FAIL");
    // process.exit(1);
  }
};

export default connectDB;
