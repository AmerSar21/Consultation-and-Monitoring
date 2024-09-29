import express from "express";
import cors from "cors";
import { login } from "../controllers/login.controller.js";

const router = express.Router();

router.use(cors());

router.post("/", login);

export default router;