// Your code goes here
const imgTransform = document.querySelectorAll("img");

imgTransform.forEach((el) => {
  el.addEventListener("mouseenter", (event) => {
    el.style.transform = "scale(1.2)";
    el.style.transition = "transform 0.5s";
  });
});

imgTransform.forEach((el) => {
  el.addEventListener("mouseleave", (event) => {
    el.style.transform = "scale(1)";
  });
});

const funBusLogo = document.querySelector(".logo-heading");

funBusLogo.addEventListener("click", () => {
  gsap.to(".logo-heading", {
    duration: 1,
    rotationY: 360,
    yoyo: true,
    repeat: 1
  });
});

const newBus = document.querySelector("img");
newBus.addEventListener("resize", () => {
  newBus.src = "img/bus.jpg";
});
