import { Client, Databases, ID, Query } from "appwrite";
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

function getOrderingQueries(filterValue: string): string[] {
  if (filterValue === "lowtohigh") {
    return [Query.orderDesc("onSale")];
  }
  if (filterValue === "hightolow") {
    return [Query.orderAsc("onSale")];
  }
  if (filterValue === "atoz") {
    return [Query.orderAsc("name")];
  }
  if (filterValue === "ztoa") {
    return [Query.orderDesc("name")];
  }
  // Default query if needed
  return [];
}

export async function getProducts({
  categoryName,
  filterValue,
  offSet,
  itemsCount,
}: getProductsProps) {
  try {
    let response;
    if (categoryName === "shopall") {
      const queries = getOrderingQueries(filterValue);
      response = await databases.listDocuments(
        process.env.APPWRITE_DATABASE_KEY!,
        process.env.APPWRITE_PRODUCTLIST_COLLECTION_KEY!,
        [...queries, Query.limit(itemsCount), Query.offset(offSet)],
      );
    } else {
      const orderingQueries = getOrderingQueries(filterValue);

      const queries = [
        ...orderingQueries,
        Query.equal("product_type", categoryName || ""),
      ];
      response = await databases.listDocuments(
        process.env.APPWRITE_DATABASE_KEY!,
        process.env.APPWRITE_PRODUCTLIST_COLLECTION_KEY!,
        queries,
      );
    }
    return response.documents;
  } catch (error) {
    console.error(error);
    return error;
  }
}
