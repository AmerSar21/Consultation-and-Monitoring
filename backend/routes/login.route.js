import express from "express";
import cors from "cors";
import { login, decode } from "../controllers/login.controller.js";

const router = express.Router();

router.use(cors());

router.post("/", login);
router.post("/decode/", decode);

export default router;