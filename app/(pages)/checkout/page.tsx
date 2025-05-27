import { redirect } from "next/navigation";
import { getLoggedInUser } from "@/lib/appwrite/appwrite";
export default async function CheckoutPage() {
  const user = await getLoggedInUser();
  if (!user) redirect("/login");

  return (
    <div className="flex w-screen flex-1 items-center justify-center p-6">
      <h1 className="text-3xl font-bold">Checkout page</h1>
    </div>
  );
}
