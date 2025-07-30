import { searchUrl } from "../constants/constants.js";
import { fetchOptions } from "../utils/fetchOptions.js";

export async function fetchSearch(query) {
  const options = fetchOptions("GET");

  const url = `${searchUrl}?q=${query}`;

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
