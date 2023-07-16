function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");

  infoContainer.appendChild(createInfo());
  infoContainer.appendChild(createForm());
  contactContainer.appendChild(infoContainer);
  contactContainer.appendChild(createMap());
  contact.appendChild(contactContainer);

  return contact;
}

function createTitle(text) {
  const title = document.createElement("h1");
  title.textContent = text;

  return title;
}

function createInfo() {
  const info = document.createElement("div");
  info.classList.add("info2");

  const address = document.createElement("p");
  address.textContent = "123 Main Street, Riverside, USA";

  const hours = document.createElement("p");
  hours.innerText = "Mon-Thurs:8am-8pm\nFri-Sun:8am-11pm";

  const phone = document.createElement("p");
  phone.textContent = "+1 (555) 123-4567";

  info.appendChild(address);
  info.appendChild(hours);
  info.appendChild(phone);

  return info;
}

function createForm() {
  const form = document.createElement("form");
  form.classList.add("contact-form");
  form.setAttribute("action", "#");

  const fullNameLabel = createFormLabel("fname", "Full Name");
  const fullNameInput = createFormInput("text", "fname", "John");

  const lastNameLabel = createFormLabel("lname", "Last Name");
  const lastNameInput = createFormInput("text", "lname", "Doe");

  const messageLabel = createFormLabel("message", "Message");
  const messageInput = document.createElement("textarea");
  messageInput.setAttribute("name", "message");
  messageInput.setAttribute("placeholder", "Type your message...");

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");

  form.appendChild(fullNameLabel);
  form.appendChild(fullNameInput);
  form.appendChild(lastNameLabel);
  form.appendChild(lastNameInput);
  form.appendChild(messageLabel);
  form.appendChild(messageInput);
  form.appendChild(submit);

  return form;
}

function createFormLabel(name, content) {
  const formLabel = document.createElement("label");
  formLabel.setAttribute("for", name);
  formLabel.textContent = content;

  return formLabel;
}

function createFormInput(type, name, placeholder, id) {
  const formInput = document.createElement("input");
  formInput.setAttribute("type", type);
  formInput.setAttribute("id", id);
  formInput.setAttribute("name", name);
  formInput.setAttribute("placeholder", placeholder);

  return formInput;
}

function createMap() {
  const mapDiv = document.createElement("div");
  mapDiv.classList.add("map");
  mapDiv.id = "map";

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9304242831545!2d-117.36875132390315!3d33.99432082078585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb20abfc8e1a5%3A0x3d2a2e685ccce29f!2sMain%20St%2C%20Riverside%2C%20CA%2C%20USA!5e0!3m2!1sen!2sgr!4v1689432632428!5m2!1sen!2sgr";
  mapDiv.appendChild(iframe);
  return mapDiv;
}

// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  // initMap();
  main.appendChild(createContact());
}

export default loadContact;
