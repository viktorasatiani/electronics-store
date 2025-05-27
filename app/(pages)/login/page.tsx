import { Sign } from "@/components/signUpandLogin/Sign";
import { Toaster } from "react-hot-toast";
import { getLoggedInUser } from "@/lib/appwrite/appwrite";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const user = await getLoggedInUser();
  if (user) redirect("/account");
  return (
    <div className="flex w-screen flex-1 items-center justify-center p-6">
      <Sign />
      <Toaster />
    </div>
  );
}
