import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const CardSchema = new mongoose.Schema(
  {
    card_holder: {
      type: String,
      required: true,
    },
    card_number: {
      type: String,
      required: true,
    },
    expiry_date: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.gtxppxlfzfcard || mongoose.model("gtxppxlfzfdfdfcard", CardSchema);
