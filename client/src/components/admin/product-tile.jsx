import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

const AdminProductTile = ({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) => {
  return (
    <Card>
      <div className="w-full max-w-sm mx-auto">
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[400px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-3">{product?.title}</h2>
          <div className="flex items-center">
            <span
              className={`${
                product?.salePrice > 0
                  ? "line-through font-semibold"
                  : "ml-auto font-bold"
              } text-lg text-primary`}
            >
              ${product?.price}
            </span>
            <span
              className={`${
                product?.salePrice > 0 ? "text-lg font-bold ml-auto" : "hidden"
              }`}
            >
              ${product?.salePrice}
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex- justify-between items-center">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
          >
            Edit
          </Button>
          <Button onClick={() => handleDelete(product?._id)}>Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default AdminProductTile;
