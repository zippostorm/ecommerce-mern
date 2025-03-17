import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  authMiddleware,
} from "../../controllers/auth/auth.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "User authenticated successfully",
    user,
  });
});

export default router;
