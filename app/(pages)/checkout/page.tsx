import { redirect } from "next/navigation";
import { getLoggedInUser } from "@/lib/appwrite/appwrite";
import Checkout from "./Checkout";
export default async function CheckoutPage() {
  const user = await getLoggedInUser();
  if (!user) redirect("/login");

  return <Checkout />;
}
