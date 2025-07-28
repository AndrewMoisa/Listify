import { mobileMenuToggle, changeReview } from "./logic/shared/homepage.js";
import { listingsHandler } from "./logic/handlers/listings/listingsHandler.js";
import { adDetailsHandler } from "./logic/handlers/listings/ad/adDetailsHandler.js";

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
      adDetailsHandler();
      break;
    case "/listings/ad.html":
      mobileMenuToggle();
      adDetailsHandler();
      break;
  }
}

router();
