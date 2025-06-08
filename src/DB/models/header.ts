import { Schema } from "mongoose";

const navBarSchema = new Schema({
  label: String,
  path: String,
  name: String,
  orderNumber: Number,
  isActive: Boolean,
});

const headerSchema = new Schema({ 
  nameOfTheSite:{
    type: String,
  },
  logoImage:{
    url: {
      type: String,
      default: "https://img.freepik.com/premium-vector/test-icon-vector-design-templates_1172029-3113.jpg?w=900",
      get: (url: string) => {
        return url.startsWith('http') ? url : `http://localhost:3001/images/${url}`;
      }
    },
    alt: String
  },
  navBar:[navBarSchema]
}, {
  toJSON: { getters: true },
  toObject: { getters: true }
});

export default  headerSchema;