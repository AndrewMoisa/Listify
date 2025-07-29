import { mobileMenuToggle, changeReview } from "./logic/shared/homepage.js";
import { listingsHandler } from "./logic/handlers/listings/listingsHandler.js";
import { adDetailsHandler } from "./logic/handlers/listings/ad/adDetailsHandler.js";
import { registerHandler } from "./logic/handlers/registerUserHandler.js";
import { loginHandler } from "./logic/handlers/loginUserHandler.js";

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
  }
}

router();
