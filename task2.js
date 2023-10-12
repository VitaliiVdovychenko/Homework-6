const bgcGreen = document.querySelector("h1");
bgcGreen.style.background = "lightgreen";

const myDiv = document.querySelector("#myDiv");
const myDivItems = myDiv.getElementsByTagName("p");
myDivItems[0].style.fontWeight = "bold";
myDivItems[1].style.color = "red";
myDivItems[2].style.textDecoration = "underline";
myDivItems[3].style.fontStyle = "italic";

const myList = document.querySelector("#myList");
const myListItems = myList.getElementsByTagName("li");
// myList.style.display = "flex";
// myList.style.listStyle = "none";
myList.style.cssText = "display: flex; list-style: none";