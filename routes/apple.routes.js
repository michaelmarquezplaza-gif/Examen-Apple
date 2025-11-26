import { Router } from "express";
import {
    getAllApple,
    getAppleById,
    postApple,
    putApple,
    deleteApple
} from "../controllers/apple.controller.js";

const router = Router();

// Rutas GET, POST, PUT, DELETE
router.get("/", getAllApple);
router.get("/:id", getAppleById);
router.post("/", postApple);
router.put("/:id", putApple);
router.delete("/:id", deleteApple);

export default router;
