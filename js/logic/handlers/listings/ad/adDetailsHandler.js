import { fetchListings } from "../../../api/fetchListings.js";
import { renderListings } from "../../../../ui/listings/renderListings.js";

export async function adDetailsHandler(numberOfListings = 4) {
  try {
    const container = document.getElementById("more-listings");
    container.innerHTML = ""; // Clear previous content
    if (!container) {
      console.error("Listings container not found");
      return;
    }

    const limit = numberOfListings; // Set the limit for listings
    const listingsIndex = await fetchListings(limit);

    console.log("Fetched limited listings:", listingsIndex.data);

    renderListings(listingsIndex.data, container);
  } catch (error) {
    console.error("Error fetching listings:", error);
  }
}
