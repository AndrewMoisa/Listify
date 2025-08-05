import { fetchProfileDetails } from "../../api/fetchProfileDetails.js";
import { getUsername } from "../../utils/storage.js";
import { renderProfileDetails } from "../../../ui/profile/renderProfileDetails.js ";
import { baseUrl } from "../../constants/constants.js";

export async function profileWinsHandler() {
  const userName = getUsername();
  const url = `${baseUrl}profiles/${userName}/wins`;
  const container = document.querySelector("#won-listings-section");
  try {
    if (!userName) {
      throw new Error("Username not found in storage");
    }

    const profileDetails = await fetchProfileDetails(url);

    if (profileDetails.data.length === 0) {
      container.innerHTML +=
        "<p class='text-gray-500'>No won listings found.</p>";
      return;
    }

    renderProfileDetails(profileDetails.data);
    console.log("Fetched profile details:", profileDetails.data);
  } catch (error) {
    console.error("Error fetching profile details:", error);
  }
}
