import { getLoggedInUser } from "@/lib/appwrite/appwrite";
import { redirect } from "next/navigation";
import AccountCard from "@/components/account/AccountCard";

export default async function AccountPage() {
  const user = await getLoggedInUser();
  if (!user) redirect("/login");

  return <AccountCard user={user} />;
}
