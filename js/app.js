import { mobileMenuToggle, changeReview } from "./logic/shared/homepage.js";

function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/":
    case "/index.html":
      mobileMenuToggle();
      changeReview();
      break;
  }
}

router();
