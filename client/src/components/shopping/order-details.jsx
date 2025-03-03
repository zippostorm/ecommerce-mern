import React from "react";
import { DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useSelector } from "react-redux";

const ShoppingOrderDetailsView = ({ orderDetails }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <DialogContent className="sm:max-w-[600px] ">
      <DialogTitle>Order Details</DialogTitle>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="flex mt-10 items-center justify-between">
            <p className="font-medium">Order ID</p>
            <Label>{orderDetails?._id}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Date</p>
            <Label>
              {new Date(orderDetails?.orderDate).toLocaleDateString("ru-RU")}
            </Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Price</p>
            <Label>${orderDetails?.totalAmount}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Payment Method</p>
            <Label>{orderDetails?.paymentMethod}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Payment Status</p>
            <Label>
              <Badge
                className={`py-1 px-3 ${
                  orderDetails?.paymentStatus === "paid"
                    ? "bg-green-500"
                    : "bg-black"
                }`}
              >
                {orderDetails?.paymentStatus}
              </Badge>
            </Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Status</p>
            <Label>
              <Badge
                className={`py-1 px-3 ${
                  orderDetails?.orderStatus === "confirmed"
                    ? "bg-green-500"
                    : orderDetails?.orderStatus === "rejected"
                    ? "bg-red-500"
                    : orderDetails?.orderStatus === "inProcess"
                    ? "bg-yellow-500"
                    : orderDetails?.orderStatus === "inShipping"
                    ? "bg-blue-500"
                    : orderDetails?.orderStatus === "delivered"
                    ? "bg-green-500"
                    : "bg-black"
                }`}
              >
                {orderDetails?.orderStatus}
              </Badge>
            </Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Order Details</div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-center">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderDetails?.cartItems && orderDetails?.cartItems.length > 0
                  ? orderDetails.cartItems.map((item) => (
                      <TableRow key={item?._id}>
                        <TableCell>{item?.title}</TableCell>
                        <TableCell className="text-center">
                          {item?.quantity}
                        </TableCell>
                        <TableCell className="text-center">
                          ${item?.price}
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Shipping Info</div>
            <div className="flex mt-4 items-center justify-between">
              <p className="font-medium">Username</p>
              <Label>{user?.username}</Label>
            </div>
            <div className="flex mt-2 items-center justify-between">
              <p className="font-medium">City</p>
              <Label>{orderDetails?.addressInfo?.city}</Label>
            </div>
            <div className="flex mt-2 items-center justify-between">
              <p className="font-medium">Address</p>
              <Label>{orderDetails?.addressInfo?.address}</Label>
            </div>
            <div className="flex mt-2 items-center justify-between">
              <p className="font-medium">Pincode</p>
              <Label>{orderDetails?.addressInfo?.pincode}</Label>
            </div>
            <div className="flex mt-2 items-center justify-between">
              <p className="font-medium">Phone</p>
              <Label>{orderDetails?.addressInfo?.phone}</Label>
            </div>
            <div className="flex mt-2 items-center justify-between">
              <p className="font-medium">Notes</p>
              <Label>{orderDetails?.addressInfo?.notes}</Label>
            </div>
          </div>
        </div>
      </div>
      <DialogDescription className="sr-only">
        Order Details Dialog
      </DialogDescription>
    </DialogContent>
  );
};

export default ShoppingOrderDetailsView;
