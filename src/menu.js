import logo from "./img/restaurant-logo.png";
import grillS from "./img/S.jpg";
import grillM from "./img/M.jpg";
import grillL from "./img/L.jpg";
import grillXL from "./img/XL.jpg";

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  menuContainer.appendChild(
    createMenuItem(
      "Colossal Conquests",
      "20",
      "A mighty mixed grill platter with marinated steak, grilled chicken, lamb chops, and pork ribs. Served with flame-kissed vegetables and house-made barbecue sauce.",
      grillS
    )
  );

  menuContainer.appendChild(
    createMenuItem(
      "Mighty Monsters",
      "25",
      "An epic grill platter featuring char-grilled sausages, beef brisket, garlic prawns, and grilled vegetables. Drizzled with chimichurri sauce.",
      grillM
    )
  );

  menuContainer.appendChild(
    createMenuItem(
      "Titanic Tastes",
      "29",
      "A towering feast with baby back ribs, grilled salmon, chicken skewers, and seasoned fries. Served with tangy barbecue sauce.",
      grillL
    )
  );

  menuContainer.appendChild(
    createMenuItem(
      "Monstrous Morsels",
      "33",
      "Tenderloin steak medallions, BBQ chicken wings, garlic butter shrimp skewers, and grilled vegetables. Served with creamy mashed potatoes.",
      grillXL
    )
  );

  menu.appendChild(createSubTitle("Discover"));
  menu.appendChild(createTitle("OUR MENU"));
  menu.appendChild(menuContainer);

  return menu;
}

function createTitle(text) {
  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = text;

  return title;
}

function createSubTitle(text) {
  const subTitle = document.createElement("h3");
  subTitle.classList.add("sub-title");
  subTitle.textContent = text;

  return subTitle;
}

function createContainer() {
  const container = document.createElement("div");
  container.classList.add("menu-container");

  return container;
}

function createMenuItem(name, price, description, src) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodInfo = document.createElement("div");

  const foodImg = document.createElement("img");
  foodImg.src = src;
  foodImg.alt = `Image of ${name}`;

  const foodName = document.createElement("h4");
  foodName.textContent = name;

  const foodPrice = document.createElement("span");
  foodPrice.textContent = `$${price}`;

  const foodDetails = document.createElement("p");
  foodDetails.textContent = description;

  foodName.appendChild(foodPrice);
  foodInfo.appendChild(foodName);
  foodInfo.appendChild(foodDetails);
  menuItem.appendChild(foodImg);
  menuItem.appendChild(foodInfo);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
