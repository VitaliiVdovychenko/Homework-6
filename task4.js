
const newOut = document.querySelector(".btn");
newOut.addEventListener('click', function displayData() {
    const inputs = document.querySelectorAll('.arr');
    const outputDiv = document.querySelector('.out');
    const data = [];

    inputs.forEach((input) => {
        const fieldName = input.getAttribute('data-form');
        const value = input.value;
        data.push(`${fieldName}: ${value}`);
    });

    outputDiv.innerHTML = data.join('<br>');
});