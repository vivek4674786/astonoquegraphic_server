import { Router } from "express";
import upload from "../../../middlewares/multer";
import addGlobalData from "../controllers/addGlobalData.controller";

const router = Router();

// add global data
router.post('/', upload.fields([{ name: 'website_logo', maxCount: 1 }, { name: 'website_favicon', maxCount: 1 }]), addGlobalData);

export default router;
