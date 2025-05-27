import { getLoggedInUser } from "@/lib/appwrite/appwrite";
import { redirect } from "next/navigation";
import { signOut } from "@/lib/appwrite/appwrite";

export default async function AccountPage() {
  const user = await getLoggedInUser();
  if (!user) redirect("/login");
  console.log("User data in AccountPage:", user);

  return (
    <>
      <ul>
        <li>
          <strong>Email:</strong> {user.email}
        </li>
        <li>
          <strong>Name:</strong> {user.name}
        </li>
        <li>
          <strong>ID: </strong> {user.$id}
        </li>
      </ul>

      <form action={signOut}>
        <button type="submit">Sign out</button>
      </form>
    </>
  );
}
