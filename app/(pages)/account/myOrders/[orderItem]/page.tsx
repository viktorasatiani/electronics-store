"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";
import { useGetSingleOrder } from "@/lib/tanstack-query/useProducts";
import { GlobalLoading } from "@/components/ui/Loading";
import { format } from "date-fns";
import EachOrderedItem from "@/components/account/myOrders/eachOrderedItem/EachOrderedItem";
import { IoArrowBack } from "react-icons/io5";

export default function OrderDetail() {
  const params = useParams<{ orderItem: string }>();
  const { data: order, isPending: isGettingOrder } = useGetSingleOrder(
    params.orderItem,
  );
  if (isGettingOrder) return <GlobalLoading />;
  return <OrderChild order={order} id={params.orderItem} />;
}

function OrderChild({ order, id }: { order: getOrderProps; id: string }) {
  const router = useRouter();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="mt-6 text-2xl font-bold text-gray-900">Order Details</h1>
      </div>
      <div className="mx-auto max-w-4xl p-6">
        <Card className="w-full bg-white">
          <CardContent className="p-6">
            {/* Header */}
            <div className="mb-8 flex w-full items-center justify-stretch">
              <div className="flex w-full items-center justify-between gap-8">
                <div
                  className="text-sm text-gray-600 hover:cursor-pointer"
                  onClick={() => router.back()}
                >
                  <IoArrowBack size={24} />
                </div>
                <div>
                  <span className="text-sm text-gray-600">Order </span>
                  <span className="font-medium text-blue-500">#{id}</span>
                </div>
                <div className="text-sm text-gray-600">
                  Order Placed:{" "}
                  {format(new Date(order.$createdAt), "dd MMMM yyyy")}
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-8 space-y-6">
              {/* Item 1 */}
              {order.orderedItem.map((item) => (
                <EachOrderedItem key={item.$createdAt} orderedItem={item} />
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {order.price}.00 $
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
