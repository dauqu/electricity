import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const NetBankingSchema = new mongoose.Schema(
  {
    bank_name: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.gtxppxlfzfnet || mongoose.model("gtxppxldfdfzfnet", NetBankingSchema);
