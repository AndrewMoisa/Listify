import { fetchListings } from "../../api/fetchListings.js";
import { renderListings } from "../../../ui/listings/renderListings.js";

export async function listingsHandler(numberOfListings = 4) {
  try {
    const limit = numberOfListings; // Set the limit for listings
    const listingsIndex = await fetchListings(limit);

    console.log("Fetched limited listings:", listingsIndex.data);

    renderListings(listingsIndex.data);
  } catch (error) {
    console.error("Error fetching listings:", error);
  }
}
