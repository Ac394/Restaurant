import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import logo from "./img/restaurant-logo.png";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  header.appendChild(createLogo());
  header.appendChild(createNav());

  return header;
}

function createLogo() {
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");

  const restaurantLogo = new Image();
  restaurantLogo.src = logo;
  logoContainer.appendChild(restaurantLogo);

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "The Grillsmith";

  logoContainer.appendChild(restaurantLogo);
  logoContainer.appendChild(restaurantName);

  return logoContainer;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("nav-button");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => createHome());

  const menuButton = document.createElement("button");
  menuButton.classList.add("nav-button");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => createMenu());

  const contactButton = document.createElement("button");
  contactButton.classList.add("nav-button");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => createContact());

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.id = "main";

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  footer.appendChild(createSocial());
  footer.appendChild(createInfo());
  return footer;
}

function createSocial() {
  const social = document.createElement("div");
  social.classList.add("social");

  const follow = document.createElement("h5");
  follow.classList.add("follow");
  follow.textContent = "Follow Us";

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");

  const fbButton = document.createElement("button");
  fbButton.classList.add("fb-button");

  const fbIcon = document.createElement("i");
  fbIcon.classList.add("fa-brands");
  fbIcon.classList.add("fa-facebook-f");
  fbIcon.classList.add("fa-lg");

  const instaButton = document.createElement("button");
  instaButton.classList.add("insta-button");

  const instaIcon = document.createElement("i");
  instaIcon.classList.add("fa-brands");
  instaIcon.classList.add("fa-instagram");
  instaIcon.classList.add("fa-lg");

  iconContainer.appendChild(fbButton);
  iconContainer.appendChild(instaButton);
  social.appendChild(follow);
  social.appendChild(iconContainer);
  fbButton.appendChild(fbIcon);
  instaButton.appendChild(instaIcon);

  return social;
}

function createInfo() {
  const info = document.createElement("div");
  info.classList.add("info");

  const infoTitle = document.createElement("h5");
  infoTitle.classList.add("info-title");
  infoTitle.textContent = "Contact Info";

  const address = document.createElement("p");
  address.classList.add("info-address");
  address.textContent = "123 Main Street, Riverside, USA";

  const addressIcon = document.createElement("i");
  addressIcon.classList.add("fa-solid");
  addressIcon.classList.add("fa-location-dot");

  const phone = document.createElement("p");
  phone.classList.add("info-phone");
  phone.textContent = "+1 (555) 123-4567";

  const phoneIcon = document.createElement("i");
  phoneIcon.classList.add("fa-solid");
  phoneIcon.classList.add("fa-phone");

  const hours = document.createElement("p");
  hours.classList.add("info-hours");
  hours.innerText = "Mon-Sun:12am-11pm";

  const hoursIcon = document.createElement("i");
  hoursIcon.classList.add("fa-solid");
  hoursIcon.classList.add("fa-clock");

  addressIcon.appendChild(address);
  phoneIcon.appendChild(phone);
  hoursIcon.appendChild(hours);
  info.appendChild(infoTitle);
  info.appendChild(addressIcon);
  info.appendChild(phoneIcon);
  info.appendChild(hoursIcon);
  return info;
}

function initializeWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

export default initializeWebsite;
