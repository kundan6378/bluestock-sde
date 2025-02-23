document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".testimonials-cards");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (!container || !prevBtn || !nextBtn) {
        console.error("Elements not found! Check your HTML structure.");
        return;
    }

    let index = 0;
    const cardWidth = 320; // Adjust according to your card width
    const totalCards = container.children.length;
    const maxIndex = totalCards - 3; // Adjust for showing 3 at a time

    nextBtn.addEventListener("click", () => {
        if (index < maxIndex) {
            index++;
            container.style.transform = `translateX(-${index * cardWidth}px)`;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            container.style.transform = `translateX(-${index * cardWidth}px)`;
        }
    });

    console.log("Total Cards:", totalCards);
    console.log("Max Index:", maxIndex);
});
