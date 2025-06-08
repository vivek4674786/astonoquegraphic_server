import globalObject from "../../DB/models/global";
import { Request, Response } from "express";

const globalData = async (req: Request, res: Response) => {
  try { 
    const globalData = await globalObject.findOne();
    // console.log("data : ", globalData);
    res.status(200).json({globalData});
  } catch (error) {
    res.status(500).json({message: error});
  }
}

export default globalData;