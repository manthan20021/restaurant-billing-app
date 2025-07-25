import { v2 } from 'cloudinary';
let cloudinary = v2
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uplodeFileOncloudinary = async (locelFilePaht) => {
    try {
        if(!locelFilePaht) return null
        //uplode the file on cloudinary
       const response = await cloudinary.uploader.upload(locelFilePaht, {
          resource_type: "Image"
        })
        console.log(response.url, "img response");
        return response.url;
    } catch (error) {
        fs.unlinkSinc(locelFilePaht)
        return null
    }
} 

export {uplodeFileOncloudinary}