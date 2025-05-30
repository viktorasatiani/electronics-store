"use client";

import OrderItem from "@/components/account/myOrders/orderItem";
import { GlobalLoading } from "@/components/ui/Loading";
import { useGetLoggedInUser } from "@/lib/tanstack-query/auth";
import { useGetOrder } from "@/lib/tanstack-query/useProducts";

export default function MyOrdersPage() {
  const { data: user, isPending: isGettingLoggedInUser } = useGetLoggedInUser();
  const { data: orders, isPending: isGettingOrders } = useGetOrder(user?.email);
  if (isGettingLoggedInUser || isGettingOrders) return <GlobalLoading />;

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
            <p className="mt-1 text-gray-600">Track and manage your orders</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 border-b border-gray-200">
          <button className="border-b-2 border-myPrimary px-4 py-2 text-sm font-medium text-myPrimary">
            All Orders
          </button>
        </div>
      </div>
      {orders.map((order: getOrderProps) => (
        <OrderItem key={order.$id} order={order} />
      ))}
    </div>
  );
}
