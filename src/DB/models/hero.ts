import {Schema, model} from 'mongoose';

const heroSchema = new Schema({
  title:{
    type: String,
  },
  description:{
    type: String,
  },
  image:{
    type: String,
  },
  quote:{
    type: String,
  }
});

export default model('hero',heroSchema);  