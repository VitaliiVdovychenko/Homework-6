const colors = document.querySelectorAll(".color");
const outPrice = document.getElementById("outprice");
const colorPrices = {
    blue: 189.99,
    red: 229.99,
    green: 194.99,
    orange: 204.99,
    black: 179.99,
};
let totalPrice = 0;
function updateTotalPrice() {
    outPrice.innerText = totalPrice.toFixed(2);
}
colors.forEach((color) => {
    color.addEventListener("click", () => {
        const chosenColor = color.getAttribute("color");
        const price = colorPrices[chosenColor] || 0;
        totalPrice = price;
        updateTotalPrice();
    });
});