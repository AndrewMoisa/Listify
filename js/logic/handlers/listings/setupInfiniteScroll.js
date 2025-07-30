import { fetchListings } from "../../api/fetchListings.js";
import { fetchSearch } from "../../api/fetchSearch.js";
import { renderListings } from "../../../ui/listings/renderListings.js";
import { renderErrorMessage } from "../../../ui/shared/displayMessage.js";

export function setupInfiniteScroll(limit, container, searchInput) {
  let triggered = false;
  let pageId = 1;
  let searchPageId = 1;
  let mode = "default"; // 'default' or 'search'
  let searchQuery = "";
  let throttleTimeout;

  async function loadMoreData() {
    if (mode === "search") {
      searchPageId++;
      const results = await fetchSearch(searchQuery, limit, searchPageId);
      renderListings(results.data, container);
    } else {
      pageId++;
      const results = await fetchListings(limit, pageId);
      renderListings(results.data, container);
    }
  }

  async function handleScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.offsetHeight;

    if (scrollPosition >= pageHeight - 10 && !triggered) {
      triggered = true;

      try {
        await loadMoreData();
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }

    if (scrollPosition < pageHeight - 100) {
      triggered = false;
    }
  }

  function throttledScroll() {
    if (throttleTimeout) return;

    throttleTimeout = setTimeout(() => {
      handleScroll();
      throttleTimeout = null;
    }, 200);
  }

  window.addEventListener("scroll", throttledScroll);

  searchInput.addEventListener("input", async (e) => {
    const query = e.target.value.trim();

    // Switch mode
    if (query !== "") {
      mode = "search";
      searchQuery = query;
      searchPageId = 1;

      try {
        const results = await fetchSearch(query, limit, searchPageId);
        container.innerHTML = ""; // Clear current listings
        renderListings(results.data, container);
      } catch (error) {
        console.error("Search failed:", error);
      }
    } else {
      // Reset to default mode
      mode = "default";
      pageId = 1;
      container.innerHTML = "";

      try {
        const results = await fetchListings(limit, pageId);
        renderListings(results.data, container);
      } catch (error) {
        console.error("Failed to load default posts:", error);
      }
    }
  });
}
