import { Request, Response } from "express";
import globalObject from "../../../DB/models/global";

const addGlobalData = async (req : Request, res : Response) => {
  try {
    const data = {...req.body};
    const files = {...req.files} as {website_logo: any, website_favicon: any};
    // const {website_logo, website_favicon} = files;
   
    let globalDataObject = await globalObject.findOne();
    console.log("globalDataObject",globalDataObject);
    // if(globalDataObject?.header.navBar){
    // const header = {
    //     ...globalDataObject.header,
    //     nameOfTheSite: data.website_title,
    //     logoImage: {
    //       url: files.website_logo[0].path,
    //       alt: "logo_image"
    //     }
    //   }
    // const globalObject = JSON.parse(globalDataObject);
    // if(globalDataObject){
      if(globalDataObject !== null && globalDataObject.header){
        globalDataObject.header.nameOfTheSite = data.website_title;
        console.log("logoimage path",files?.website_logo[0]?.path);
        if(globalDataObject.header?.logoImage){
          globalDataObject.header.logoImage.url = files.website_logo[0].filename;
        }
        await globalDataObject.save();
      }
  // }
    console.log("req.files",files);
    res.status(200).json({ res: "globalData" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
}

export default addGlobalData;
