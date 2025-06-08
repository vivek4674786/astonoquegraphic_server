import { Router } from "express";
import heroSlides from "../controllers/heroSlides";

const router = Router();

router.get('/',heroSlides);


export default router;
