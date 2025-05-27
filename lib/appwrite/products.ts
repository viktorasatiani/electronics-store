"use server";
import { ID, Query } from "node-appwrite";
import { createAdminClient } from "./appwrite";
import toast from "react-hot-toast";

export async function createApplyJob(info: AboutFormProps) {
  try {
    const { database } = await createAdminClient();
    await database.createDocument(
      process.env.APPWRITE_DATABASE_KEY!,
      process.env.APPWRITE_JOBAPPLY_COLLECTION_KEY!,
      ID.unique(),
      info,
    );
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
    const { database } = await createAdminClient();

    await database.createDocument(
      process.env.APPWRITE_DATABASE_KEY!,
      process.env.APPWRITE_HELPMESSAGES_COLLECTION_KEY!,
      ID.unique(),
      info,
    );

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
    const { database } = await createAdminClient();

    let response;
    if (categoryName === "shopall") {
      const queries = getOrderingQueries(filterValue);
      response = await database.listDocuments(
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
      response = await database.listDocuments(
        process.env.APPWRITE_DATABASE_KEY!,
        process.env.APPWRITE_PRODUCTLIST_COLLECTION_KEY!,
        queries,
      );
    }
    return JSON.parse(JSON.stringify(response.documents));
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getSingleProduct({ productID }: { productID: string }) {
  try {
    const { database } = await createAdminClient();
    const response = await database.getDocument(
      process.env.APPWRITE_DATABASE_KEY!,
      process.env.APPWRITE_PRODUCTLIST_COLLECTION_KEY!,
      productID,
    );
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function updateProducts({
  productId,
  data,
}: {
  productId: string;
  data: SingleProductTypes;
}) {
  try {
    const { database } = await createAdminClient();
    await database.updateDocument(
      process.env.APPWRITE_DATABASE_KEY!,
      process.env.APPWRITE_PRODUCTLIST_COLLECTION_KEY!,
      productId,
      data,
    );
    return { success: true };
  } catch (error) {
    console.error(error);
    return error;
  }
}
