import express from "express";
import { getProducts, createOrder } from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/order", createOrder);

export default router;
