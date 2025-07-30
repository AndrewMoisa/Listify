import { fetchListings } from "../../api/fetchListings.js";
import { renderListings } from "../../../ui/listings/renderListings.js";
import { logOnScrollToBottom } from "./logOnScroll.js";

export async function listingsHandler(numberOfListings = 4) {
  try {
    const container = document.getElementById("listings-container");

    if (!container) {
      console.error("Listings container not found");
      return;
    }

    let limit = numberOfListings; // Set the limit for listings
    const listingsIndex = await fetchListings(limit);

    console.log("Fetched limited listings:", listingsIndex.data);
    // Clear the container before rendering new listings
    container.innerHTML = ""; // Clear previous listings

    renderListings(listingsIndex.data, container);

    // Initialize scroll listener for loading more listings
    logOnScrollToBottom(limit, container);
  } catch (error) {
    console.error("Error fetching listings:", error);
  }
}
