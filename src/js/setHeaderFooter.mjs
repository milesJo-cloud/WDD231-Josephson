import { parkInfoTemplate, parkFooterTemplate } from "./templates.mjs";

function setHeaderInfo(park) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = park.url;
  disclaimer.innerHTML = park.fullName;

  const heroImg = document.querySelector(".hero-banner > img");
  heroImg.src = park.images[0].url;
  heroImg.alt = park.images[0].altText;

  document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(park);
}

function setFooter(park) {
  document.querySelector("#park-footer").innerHTML = parkFooterTemplate(park);
}

export default function setHeaderFooter(park) {
  setHeaderInfo(park);
  setFooter(park);
}