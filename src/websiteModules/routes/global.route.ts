import { Router } from "express";
import globalData from "../controllers/globalData";

const router = Router();

router.get('/',globalData);

export default router;  