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

export async function createHelpMessage(info: ContactFormProps) {
  try {
    const response = await databases.createDocument(
      process.env.APPWRITE_DATABASE_KEY!,
      process.env.APPWRITE_HELPMESSAGES_COLLECTION_KEY!,
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

function getCollectionKey(category: string): string {
  switch (category) {
    case "computers":
      return process.env.APPWRITE_COMPUTERS_COLLECTION_KEY!;
    case "tablets":
      return process.env.APPWRITE_TABLETS_COLLECTION_KEY!;
    case "drones-cameras":
      return process.env.APPWRITE_DRONES_COLLECTION_KEY!;
    case "headphones":
      return process.env.APPWRITE_HEADPHONES_COLLECTION_KEY!;
    case "mobiles":
      return process.env.APPWRITE_MOBILES_COLLECTION_KEY!;
    case "speakers":
      return process.env.APPWRITE_SPEAKERS_COLLECTION_KEY!;
    case "tv-cinemas":
      return process.env.APPWRITE_TVCINEMAS_COLLECTION_KEY!;
    case "wearables":
      return process.env.APPWRITE_WEARABLES_COLLECTION_KEY!;

    // Add more cases as needed
    default:
      throw new Error(`Unknown category: ${category}`);
  }
}

function getAllCollectionKey(category: string): string | Array<string> {
  switch (category) {
    case "shopall":
      return [
        process.env.APPWRITE_COMPUTERS_COLLECTION_KEY!,
        process.env.APPWRITE_TABLETS_COLLECTION_KEY!,
        process.env.APPWRITE_DRONES_COLLECTION_KEY!,
        process.env.APPWRITE_HEADPHONES_COLLECTION_KEY!,
        process.env.APPWRITE_MOBILES_COLLECTION_KEY!,
        process.env.APPWRITE_SPEAKERS_COLLECTION_KEY!,
        process.env.APPWRITE_TVCINEMAS_COLLECTION_KEY!,
        process.env.APPWRITE_WEARABLES_COLLECTION_KEY!,
      ];

    default:
      throw new Error(`Unknown category: ${category}`);
  }
}

export async function getProducts(category: string) {
  try {
    if (category === "shopall") {
      const collectionIds = getAllCollectionKey(category);
      let result;
      if (Array.isArray(collectionIds)) {
        result = await Promise.all(
          collectionIds.map((id) =>
            databases.listDocuments(
              process.env.APPWRITE_DATABASE_KEY!, // databaseId
              id, // collectionId
              [], // queries (optional)
            ),
          ),
        );
      } else {
        result = await databases.listDocuments(
          process.env.APPWRITE_DATABASE_KEY!, // databaseId
          collectionIds, // collectionId
          [], // queries (optional)
        );
      }

      return (Array.isArray(result) ? result : [result]).flatMap(
        (res) => res.documents,
      );
    } else {
      const result = await databases.listDocuments(
        process.env.APPWRITE_DATABASE_KEY!, // databaseId
        getCollectionKey(category), // collectionId
        [], // queries (optional)
      );

      console.log(result);
      return result.documents;
    }
  } catch (error) {
    console.log(error);
  }
}
