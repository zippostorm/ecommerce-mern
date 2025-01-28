import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: "dliptwonq",
  api_key: "786629181392859",
  api_secret: "p7WUVG_pCStQV7md8VO-HsA8Zy4",
});

const storage = new multer.memoryStorage();

export const imageUploadUtil = async (file) => {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
};

export const upload = multer({ storage });
