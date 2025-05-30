import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { signOut } from "@/lib/appwrite/appwrite";
import Link from "next/link";

export default function AccountCard({ user }: { user: User }) {
  return (
    <Card className="mx-auto my-4 max-w-sm">
      <CardHeader>
        <CardTitle>Your Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p>Email: {user.email}</p>
        <p>UserID: {user.$id}</p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button
          variant={"default"}
          className="hover:bg-myPrimaryDark hover:text-white"
          asChild
        >
          <Link href={`/account/myOrders`}>My Orders</Link>
        </Button>
        <Button
          variant={"outline"}
          className="hover:bg-myPrimaryDark hover:text-white"
          onClick={signOut}
        >
          Log Out
        </Button>
      </CardFooter>
    </Card>
  );
}
