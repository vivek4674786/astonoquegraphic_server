import {Schema, model} from 'mongoose';

const portfolioSchema = new Schema({
  image: String,
  group: String,
  description: String,
  title: String
});

export default model('portfolioSchema', portfolioSchema);