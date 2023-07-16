function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(createH3("Discover"));
  home.appendChild(createH2("OUR STORY"));
  home.appendChild(
    createParagraph(
      "Welcome to The Grillsmith, a beloved local tavern where food, drink, and community converge with a simple vision: to create a gathering place that celebrates the joy of good company and delicious cuisine.\n\nWe take pride in offering a diverse menu that features both small and big plates of mouthwatering mixed grills, perfectly paired with an extensive selection of beers and beverages. Indulge in the enticing flavors of our expertly grilled dishes, carefully prepared to satisfy your cravings.\n\nJoin us for an unforgettable experience of great flavors, warm hospitality, and a journey of culinary delights."
    )
  );

  return home;
}

function createH3(text) {
  const h3 = document.createElement("h3");
  h3.textContent = text;

  return h3;
}

function createH2(text) {
  const h2 = document.createElement("h2");
  h2.textContent = text;

  return h2;
}

function createParagraph(text) {
  const p = document.createElement("p");
  p.textContent = text;

  return p;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
