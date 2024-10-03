import express from "express";

import { createDepartment, deleteDepartment, getDepartments, updateDepartment } from "../controllers/department.controller.js";

const router = express.Router();

router.get("/", getDepartments);
router.post("/", createDepartment);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);

export default router;
