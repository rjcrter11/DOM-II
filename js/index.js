// Your code goes here

// ---------Makes images grow on hover----------
const imgTransform = document.querySelectorAll("img");

imgTransform.forEach((el) => {
  el.addEventListener("mouseenter", (event) => {
    el.style.transform = "scale(1.2)";
    el.style.transition = "transform  0.5s ";
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

// ----Scrolls to footer on double click-------
const scrollAnchors = document.querySelectorAll("a");
const footer = document.querySelector("footer");
const footerY = footer.getBoundingClientRect().top;

scrollAnchors.forEach((el) => {
  el.addEventListener("dblclick", (event) => {
    window.scrollBy(0, footerY);
    event.preventDefault();
  });
});

//----Underlines and changes anchor colors on hover-----
const animateAnchors = document.querySelectorAll("a");
animateAnchors.forEach((el) => {
  el.addEventListener("mouseover", (event) => {
    el.style.color = "blue";
    el.style.borderBottom = "2px solid blue";
    el.style.transition = " transform 0.5s ";
    el.style.fontSize = "2.5rem";
  });
});

//------Reverts changes to anchors-------
animateAnchors.forEach((el) => {
  el.addEventListener("mouseleave", (event) => {
    el.style.color = "black";
    el.style.borderBottom = "none";
    el.style.fontSize = "1.6rem";
  });
});

// -----Changes card color on click------
const destinations = document.querySelectorAll(".destination");
destinations.forEach((el) => {
  el.addEventListener("click", (event) => {
    el.style.backgroundColor = "#FFEBCD";
  });
});
// ----Changes button color on click, stops propagation-----
const clickButtons = document.querySelectorAll(".btn");
clickButtons.forEach((el) => {
  el.addEventListener("click", (event) => {
    el.style.backgroundColor = "#212529";
    el.style.color = "skyblue";
    el.style.marginLeft = "8%";
    event.stopPropagation();
  });
});

// --------blurs and unblurs imgages---------

const unblur = document.querySelectorAll("img");
const blur = document.querySelectorAll("img");

blur.forEach((el) => {
  el.style.filter = "blur(2px)";
});

unblur.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.style.filter = "none";
  });
});

// --------footer color change-------
const footerp = document.querySelector(".footer p");
const footerColor = document.querySelector("footer");

footerColor.addEventListener("mouseenter", () => {
  footerColor.style.backgroundColor = "#212529";
  footerColor.style.borderTop = "none";
});
footerp.addEventListener("mouseover", () => {
  footerp.style.color = "#17A2B8";
});

footerColor.addEventListener("mouseleave", () => {
  footerColor.style.backgroundColor = "#FFEBCD";
  footerColor.style.borderTop = "2px dashed #C0C0C0";
});

footerp.addEventListener("mouseleave", () => {
  footerp.style.color = "#212529";
});
