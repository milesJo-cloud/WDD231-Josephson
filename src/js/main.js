// import { getParkData, parkInfoLinks } from "./parkService.mjs";
// import setHeaderFooter from "./setHeaderFooter.mjs";
// import { mediaCardTemplate } from "./templates.mjs";

// const parkData = getParkData();

// function setParkIntro(park) {
//   document.querySelector(".intro").innerHTML = `
//     <h2>${park.fullName}</h2>
//     <p>${park.description}</p>
//   `;
// }

// function setParkInfoLinks(infoLinks) {
//   const cards = infoLinks.map((link) => mediaCardTemplate(link)).join("");
//   document.querySelector(".info").innerHTML = cards;
// }

// setHeaderFooter(parkData);
// setParkIntro(parkData);
// setParkInfoLinks(parkInfoLinks);

import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

function setParkIntro(park) {
  document.querySelector(".intro").innerHTML = `
    <h2>${park.fullName}</h2>
    <p>${park.description}</p>
  `;
}

function setParkInfoLinks(links) {
  const cards = links.map((link) => mediaCardTemplate(link)).join("");
  document.querySelector(".info").innerHTML = cards;
}

// Step 03: The init function to coordinate the async data
async function init() {
  const parkData = await getParkData("yell"); // Fetch data
  const links = getInfoLinks(parkData.images); // Get links with API images

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
}

init();