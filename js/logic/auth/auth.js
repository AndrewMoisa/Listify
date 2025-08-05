import { getUsername, removeAuthData } from "../utils/storage.js";

export function authUser() {
  const loginLink = document.getElementById("login-link");
  const loginLinkMobile = document.getElementById("login-link-mobile");

  const userName = getUsername();
  if (userName) {
    loginLink.textContent = "Log Out";
    loginLinkMobile.textContent = "Log Out";

    loginLink.addEventListener("click", () => {
      removeAuthData();
      location.reload();
    });

    loginLinkMobile.addEventListener("click", () => {
      removeAuthData();
      location.reload();
    });
  }
}
