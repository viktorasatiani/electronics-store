import { Client, Databases, ID } from "appwrite";
import toast from "react-hot-toast";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.APPWRITE_API_KEY!); // Replace with your project ID

const databases = new Databases(client);
export async function createApplyJob(info: AboutFormProps) {
  try {
    const response = await databases.createDocument(
      process.env.APPWRITE_DATABASE_KEY!,
      process.env.APPWRITE_JOBAPPLY_COLLECTION_KEY!,
      ID.unique(),
      info,
    );
    console.log(response);
    toast.success("success.", {
      duration: 4000,
      position: "top-right",
      removeDelay: 2000,
    });
  } catch (error) {
    console.error(error);
    toast.error(`error ${error}`, {
      duration: 4000,
      position: "top-right",
      removeDelay: 2000,
    });
  }
}
