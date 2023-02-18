const NUMBER_OF_IMAGES = 5;
const images = [...Array(NUMBER_OF_IMAGES).keys()];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.src = `img/${chosenImage}.jpg`;
image.classList.add("background");
document.body.appendChild(image);