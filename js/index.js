// Your code goes here

// ---------Makes images grow on hover----------
const imgTransform = document.querySelectorAll("img");

imgTransform.forEach((el) => {
  el.addEventListener("mouseenter", (event) => {
    el.style.transform = "scale(1.2)";
    el.style.transition = "transform 0.5s";
  });
});

// ----Makes images shrink back down on leave-----
imgTransform.forEach((el) => {
  el.addEventListener("mouseleave", (event) => {
    el.style.transform = "scale(1)";
  });
});

// ------Makes logo rotate on click------

const funBusLogo = document.querySelector(".logo-heading");

funBusLogo.addEventListener("click", () => {
  gsap.to(".logo-heading", {
    duration: 1,
    rotationY: 360,
    yoyo: true,
    repeat: 1
  });
});

// ---Changes bus photo on window resize-----

const newBus = document.querySelector("img");
console.log(newBus);
window.addEventListener("resize", () => {
  newBus.src = "img/bus.jpg";
});

const scrollAnchors = document.querySelectorAll("a");
const footer = document.querySelector("footer");
const footerY = footer.getBoundingClientRect().top;

scrollAnchors.forEach((el) => {
  el.addEventListener("dblclick", (event) => {
    window.scrollBy(0, footerY);
    event.preventDefault();
  });
});

// const scrollToFooter = (event) => {
//   window.scrollBy(0, footerY);
//   event.preventDefault;
// }
