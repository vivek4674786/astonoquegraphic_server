import { Schema } from "mongoose";

const homeSectionSchema = new Schema({
  key: String,
  name: String,
  orderNumber: Number,
  isActive: Boolean,
});

export default homeSectionSchema;