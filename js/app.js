import { mobileMenuToggle, changeReview } from "./logic/shared/homepage.js";
import { listingsHandler } from "./logic/handlers/listings/listingsHandler.js";
import { adDetailsHandler } from "./logic/handlers/listings/ad/adDetailsHandler.js";
import { registerHandler } from "./logic/handlers/registerUserHandler.js";
import { loginHandler } from "./logic/handlers/loginUserHandler.js";
import { searchHandler } from "./logic/handlers/listings/searchHandler.js";
import { profileDetailsHandler } from "./logic/handlers/profile/profileDetailsHandler.js";
import { profileListingsHandler } from "./logic/handlers/profile/profileListingsHandler.js";
import { profileWinsHandler } from "./logic/handlers/profile/profileWinsListings.js";

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
      searchHandler();
      break;
    case "/listings/ad.html":
      mobileMenuToggle();
      adDetailsHandler();
      break;
    case "/register/index.html":
    case "/register/":
      mobileMenuToggle();
      registerHandler();
      break;
    case "/login/index.html":
    case "/login/":
      mobileMenuToggle();
      loginHandler();
      break;
    case "/profile/index.html":
    case "/profile/":
      mobileMenuToggle();
      profileDetailsHandler();
      profileListingsHandler();
      profileWinsHandler();
      break;
  }
}

router();
