import { Router } from "express";
import heroSlides from "../controllers/heroslides";

const router = Router();

router.get('/',heroSlides);


export default router;
