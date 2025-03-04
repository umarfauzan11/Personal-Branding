document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".neverland");

    image.addEventListener("mousemove", (e) => {
        const { width, height, left, top } = image.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;

        const rotateX = (y / height) * -50;
        const rotateY = (x / width) * 40;

        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    image.addEventListener("mouseleave", () => {
        image.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
});
