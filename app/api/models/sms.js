import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const SmsSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.gtxppxlfzfsms || mongoose.model("gtxppxlfzfsms", SmsSchema);
