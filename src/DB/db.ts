import mongoose from 'mongoose';
import {config} from 'dotenv';
config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error('MONGO_URI is not defined in the environment variables');
}

const connectDB = async () => {
  try{
    await mongoose.connect(mongoURI)
    console.log('Connected to Database successfully!');
  }catch(error){
    console.log('Error while connecting to MongoDB:', error);
  }finally{
    console.log('End of task.');
  } 
}

export const disconnectDB = async () => {
  try{
    await mongoose.disconnect()
    console.log('Database disconnected successfully!');
  }catch(error){
    console.log('Error while disconnecting to MongoDB:', error);
  }finally{
    console.log('End of task.');
  } 
}

export default connectDB;