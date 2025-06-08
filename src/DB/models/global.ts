import { Schema, model } from "mongoose";
import homeSectionSchema from "./homeSection";
import headerSchema from "./header";
import footerSchema from "./footer";


const globalSchema = new Schema({
  favicon:{
    type: String,
  },
  homeSections: [homeSectionSchema],
  header: headerSchema,
  footer: footerSchema,
}, {
  toJSON: { getters: true },
  toObject: { getters: true }
});

export default model("Global", globalSchema);

