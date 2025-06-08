import { Schema } from "mongoose";

const footerSchema = new Schema({
  logoImage:{
    url: String,
    alt: String
  },
  description: String,
  address: String,
  phone: String,
  email: String,
  socialMedia:[
    {
      name: String,
      url: String,
      isActive: Boolean,
      orderNumber: Number,
    }
  ]
});

export default footerSchema;
