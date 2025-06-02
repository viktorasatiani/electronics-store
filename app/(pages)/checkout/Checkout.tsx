"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import DroppedPrice from "@/components/category/droppedPrice";
import { CheckoutForm } from "@/components/forms/CheckoutForm";
import { useGetLoggedInUser } from "@/lib/tanstack-query/auth";
import { GlobalLoading } from "@/components/ui/Loading";

export default function Checkout() {
  const { cartItems, subtotal, setCartItems, setSubtotal } = useCart();
  const { data: user, isPending: isGettingUser } = useGetLoggedInUser();
  if (isGettingUser) {
    return <GlobalLoading />;
  }
  return (
    <div className="flex w-screen flex-1 flex-col items-center justify-center p-6">
      <h1 className="mb-10 text-3xl font-bold">Checkout page</h1>
      <div className="h-full bg-background p-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Shopping Cart */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Shopping Cart
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.$id}
                  className="flex items-center gap-4 rounded-lg bg-background p-4"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-20 w-20 rounded-md object-cover"
                    width={80}
                    height={80}
                    placeholder="blur"
                    blurDataURL="/placeholder.svg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{item.name}</h3>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="font-semibold">
                      {item.onSale ? <DroppedPrice /> : "$ 85.00"}
                    </div>
                    <p className="text-sm text-blue-600">
                      QUANTITY: {item.quantity.toString().padStart(2, "0")}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => {
                      // Logic to remove item from cart
                      setCartItems((prevItems) =>
                        prevItems.filter(
                          (cartItem) => cartItem.$id !== item.$id,
                        ),
                      );
                      setSubtotal((prevSubtotal) => {
                        const itemPrice = item.onSale ? 70 : 85;
                        return prevSubtotal - itemPrice * item.quantity;
                      });
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Info */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Delivery Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CheckoutForm cartItems={cartItems} user={user} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
