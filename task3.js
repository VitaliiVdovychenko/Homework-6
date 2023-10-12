const mainElement = document.createElement("main");
mainElement.setAttribute("class", "mainClass check item");

const divElement = document.createElement("div");
divElement.setAttribute("id", "myDiv");

const pElement = document.createElement("p");
pElement.textContent = "First paragraph";

divElement.appendChild(pElement);
mainElement.appendChild(divElement);
document.body.appendChild(mainElement);