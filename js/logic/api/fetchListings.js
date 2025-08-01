import { fetchOptions } from "../utils/fetchOptions.js";
import { baseUrl } from "../constants/constants.js";

export async function fetchListings(limit = 10, pageId = 1) {
  const options = fetchOptions("GET");

  const url = `${baseUrl}listings?limit=${limit}&_bids=true&page=${pageId}`;

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
