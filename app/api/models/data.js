import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const DataSchema = new mongoose.Schema(
  {
    customer_name: {
      type: String,
      required: true,
    },
    mobile_no: {
      type: String,
      required: true,
    },
    consumer_id: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.gtxppxlfzf || mongoose.model("gtxppxlfzf", DataSchema);
