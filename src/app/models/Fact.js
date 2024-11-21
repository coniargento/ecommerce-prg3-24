import mongoose, { Schema } from "mongoose";

const factsSchema = new Schema({
  name: { type: String, required: true },
});

const Facts =
  mongoose.models.Facts || mongoose.model("Facts", factsSchema);

export default Facts;