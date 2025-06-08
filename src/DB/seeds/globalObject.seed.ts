import { config } from 'dotenv';
import path from 'path';

// Load environment variables from the root .env file
config({ path: path.resolve(__dirname, '../../../.env') });

import connectDB, { disconnectDB } from "../db";
import globalObject from "../models/global";

const globalObjectSeed = async () => {
  try{
    await connectDB();

    const existingGlobalObject = await globalObject.findOne();
    if(existingGlobalObject){
      console.log('Global object already exists');
      return;
    }

    await globalObject.create({
      favicon: "",
      header: {
        nameOfTheSite: "Astonoquegraphic",
        logoImage: {
          url: "",
          alt: "logo_image",
        },
        navBar: [
          {
            label: "Home",
            path: "/",
            name: "home",
            orderNumber: 1,
            isActive: true,
          },{
            label:"About",
            path: "/about",
            name: "about",
            orderNumber: 2,
            isActive: true,
          },{
            label: "What we do",
            path: "/what-we-do",
            name: "what-we-do",
            orderNumber: 3,
            isActive: true,
          },{
            label: "Contact Us",
            path: "/contact-us",
            name: "contact-us",
            orderNumber: 4,
            isActive: true,
          },{
            label: "Portfolio",
            path: "/portfolio",
            name: "portfolio",
            orderNumber: 5,
            isActive: true,
          }
        ],
      },
      footer: {
        logoImage:{
          url: "",
          alt: "footer_logo_image"
        },
        description: "Astonoquegraphic is a graphic design company that provides a wide range of graphic design services to its clients.",
        address: "123 Main St, Anytown, USA",
        phone: "+123 456 7890",
        email: "info@astonoquegraphic.com",
        socialMedia:[
          {
            name: "Facebook",
            url: "https://www.facebook.com",
            isActive: true,
            orderNumber: 1,
          },{
            name: "Twitter",
            url: "https://www.twitter.com",
            isActive: true,
            orderNumber: 2,
          },{
            name: "Instagram",
            url: "https://www.instagram.com",
            isActive: true,
            orderNumber: 3,
          },{
            name: "LinkedIn",
            url: "https://www.linkedin.com",
            isActive: true,
            orderNumber: 4,
          }
        ]
      },
      homeSections: [
        {
          key: "home",
          name: "Home",
          orderNumber: 1,
          isActive: true,
        }
      ]
    });

    await disconnectDB();

  }catch(error){
    console.log('Error while seeding global object:', error);
  }finally{
    console.log('End of Seeding Global Object.');
  }
}

globalObjectSeed();