import hero from "../../DB/models/hero";
import { Request, Response } from "express";

const heroSlides = async (req: Request, res: Response) => {
  try { 
    const heroSlides = await hero.find();
    // console.log("data : ", heroSlides);
    res.status(200).json({heroSlides});
  } catch (error) {
    res.status(500).json({message: error});
  }
}

export default heroSlides;