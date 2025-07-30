import { fetchSearch } from "../../../logic/api/fetchSearch.js";
import { renderListings } from "../../../ui/listings/renderListings.js";

export function searchHandler() {
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector("#search-button");
  const listingsContainer = document.querySelector("#listings-container");

  const handleSearch = async () => {
    const query = searchInput.value.trim();

    if (!query) {
      searchInput.placeholder = "Please enter a search query";
      return;
    }

    try {
      const searchPosts = await getPosts(query);
      console.log("Search Results:", searchPosts);
      renderListings(searchPosts, listingsContainer);

      if (searchPosts.length === 0) {
        searchInput.placeholder = "No results found";
      }

      searchInput.value = "";
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  searchButton.addEventListener("click", handleSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSearch();
  });

  async function getPosts(query) {
    try {
      const inputQuery = await fetchSearch(query);
      return inputQuery.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }
}
