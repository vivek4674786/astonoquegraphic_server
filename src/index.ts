import express from 'express';
import connectDB from './DB/db';
import homeRoute from './websiteModules/routes/home.route';
import globalRoute from './websiteModules/routes/global.route';
import {config} from 'dotenv';
config();
import cors from 'cors';
import adminGlobalRoute from './adminModules/globalData/routes/adminGlobal.route';
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

// app.use(cors());
app.use(express.json());

//serving static folder
const isProduction = process.env.NODE_ENV === 'production';
const imagesPath = isProduction 
  ? path.join(__dirname, '../src/assets/images')  // Production path
  : path.join(__dirname, 'assets/images');        // Development path

console.log("Environment:", process.env.NODE_ENV);
console.log("Images directory path:", imagesPath);

app.use("/images", express.static(imagesPath));

app.use(express.urlencoded({ extended: true })); // For URL-encoded form data
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174','https://astonoquegraphic.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  // allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/hero', homeRoute);
app.use('/global',globalRoute);


app.use('/admin_global', adminGlobalRoute);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  connectDB();
} );