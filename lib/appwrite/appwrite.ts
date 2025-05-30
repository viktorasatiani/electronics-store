"use server";
import { Client, Account, Databases, ID } from "node-appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT!)
    .setProject(process.env.APPWRITE_PROJECT_ID!);

  const session = (await cookies()).get("my-custom-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT!)
    .setProject(process.env.APPWRITE_PROJECT_ID!)
    .setKey(process.env.APPWRITE_API_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
  };
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const result = await account.get();
    if (!result) {
      return null;
    }
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.log("Error getting logged in user:", error);
    return null;
  }
}

export async function signUpWithEmail(email: string, password: string) {
  try {
    const { account } = await createAdminClient();

    await account.create(ID.unique(), email, password);
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("my-custom-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      expires: 60 * 60 * 1000, // 1 hour
    });

    redirect("/account");
  } catch (error) {
    console.error("Error signing up with email:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}

export async function signInWithEmail(email: string, password: string) {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    // Set the session cookie
    (await cookies()).set("my-custom-session", session.secret, {
      // use the session secret as the cookie value
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(session.expire),
      path: "/",
      maxAge: 60 * 60 * 2, // 2 hours
    });

    redirect("/account"); // Redirect after successful login
  } catch (e) {
    // console.error("Error signing in with email:", e);
    throw e; // Re-throw to handle in calling function
  }
}

export async function signOut() {
  const { account } = await createSessionClient();

  (await cookies()).delete("my-custom-session");
  await account.deleteSession("current");

  redirect("/login");
}

export async function subscribeAccount(email: string) {
  try {
    const { database } = await createAdminClient();
    await database.createDocument(
      process.env.APPWRITE_DATABASE_KEY!,
      process.env.APPWRITE_SUBSCRIBED_ACCOUNTS_COLLECTION_KEY!,
      ID.unique(),
      { email },
    );
    return true;
  } catch (error) {
    console.log("Error getting subscribed account:", error);
    return null;
  }
}
