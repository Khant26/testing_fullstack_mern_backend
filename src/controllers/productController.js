import { products } from "../data/products.js";

export const getProducts = (_req, res) => {
  res.json(products);
};

export const createOrder = (req, res) => {
  const { productId, quantity } = req.body;

  const product = products.find(item => item.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found|| ERROR" });
  }

  if (product.stock < quantity) {
    return res.status(400).json({ message: "Not enough stock|| ERROR" });
  }

  const totalPrice = product.price * quantity;
  product.stock -= quantity;

  res.json({
    message: "Order successful",
    total: totalPrice
  });
};
