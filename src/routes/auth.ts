import express from "express";

// Routes Controllers
import { LoginAuthController, SignUpAuthController } from "../controllers/auth";

const router = express.Router();

// Login Routes
router.post("/login", LoginAuthController);

// SignUp Routes
router.post("/signup", SignUpAuthController);

export default router;
