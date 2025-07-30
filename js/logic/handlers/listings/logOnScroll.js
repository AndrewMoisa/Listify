import { fetchListings } from "../../api/fetchListings.js";
import { renderListings } from "../../../ui/listings/renderListings.js";

export function logOnScrollToBottom(limit, container) {
  let triggered = false;
  let pageId = 1;
  let throttleTimeout;

  async function handleScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.offsetHeight;

    if (scrollPosition >= pageHeight - 10 && !triggered) {
      triggered = true;
      pageId++;

      try {
        const newListings = await fetchListings(limit, pageId);
        if (newListings?.data?.length) {
          renderListings(newListings.data, container);
        } else {
          // No more data to load
          window.removeEventListener("scroll", throttledScroll);
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
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
}
