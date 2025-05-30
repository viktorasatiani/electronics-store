import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Recycle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OrderItem({ order }: { order: getOrderProps }) {
  const router = useRouter();

  const handleOrderDetails = () => {
    router.push(`/account/myOrders/${order.$id}`);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-myPrimary/10">
              <Recycle className="h-6 w-6 text-myPrimary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Order no #{order.$id}
              </h3>
              <p className="text-lg text-gray-900">${order?.price}.00</p>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              onClick={handleOrderDetails}
              className="hover:bg-mytext-myPrimary rounded-full bg-myPrimary px-6 py-2 text-white"
            >
              Order Details
            </Button>
          </div>
        </div>

        {/* Order Info */}
        <div className="text-sm text-gray-600">
          <span className="font-medium">{order.orderedItem.length} Items</span>
          <span className="mx-2">•</span>
          <span>Cash on Delivery</span>
          <span className="mx-2">•</span>
          <span>{order.address}</span>
        </div>
      </CardContent>
    </Card>
  );
}
