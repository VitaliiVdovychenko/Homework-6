const circleElements = document.querySelectorAll(".circle");

circleElements.forEach((element) => {
    const dataAnim = element.getAttribute("data-anim");

    if (dataAnim) {
        element.classList.add(dataAnim);
    }

    element.addEventListener("animationend", (event) => {
        if (event.animationName === dataAnim) {
            console.log(`Анімація "${dataAnim}" застосована.`);
        }
    });
});