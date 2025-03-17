import moongose from "mongoose";

const ProductSchema = new moongose.Schema(
  {
    image: String,
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
    salePrice: Number,
    totalStock: Number,
  },
  { timestamps: true }
);

const Product = moongose.model("Product", ProductSchema);
export default Product;
