import { mobileMenuToggle, changeReview } from "./logic/shared/homepage.js";
import { listingsHandler } from "./logic/handlers/listings/listingsHandler.js";

function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/":
    case "/index.html":
      mobileMenuToggle();
      changeReview();
      listingsHandler();
      break;
    case "/listings/index.html":
    case "/listings/":
      mobileMenuToggle();
      listingsHandler(20); // Fetch more listings for the listings page
      break;
  }
}

router();
