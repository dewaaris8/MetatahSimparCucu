import mongoose from "mongoose";

const GuestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    attendance: { type: String, required: true },
    pax: { type: String, required: true },
    wishes: { type: String, required: true },
  },
  { timestamps: true }
);

// kalau model sudah ada, jangan buat ulang
export default mongoose.models.Guest || mongoose.model("Guest", GuestSchema);
