import express from "express";
import cors from "cors";
import { createUser, deleteUser, getUsers, getUser, updateUser } from "../controllers/user.controller.js";
import { authenticateToken } from "../utils/auth.utils.js";

const router = express.Router();

router.use(cors());

router.get("/", authenticateToken, getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
