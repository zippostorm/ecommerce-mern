import express from "express";
import {
  getAllOrdersOfAllUsers,
  getDetailsUsernameForAdmin,
  getOrderDetailsForAdmin,
} from "../../controllers/admin/order.controller.js";

const router = express.Router();

router.get("/get", getAllOrdersOfAllUsers);
router.get("/details/:id", getOrderDetailsForAdmin);
router.get("/user/:userId", getDetailsUsernameForAdmin);

export default router;
