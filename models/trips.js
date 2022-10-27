import mongoose from "mongoose";

const tripSchema = mongoose.Schema({
  name: { type: String },
  stops: [
    {
      city: String,
      date: Date,
    },
  ],
});

export default mongoose.model("trip", tripSchema);
