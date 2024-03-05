const images = ["0.jpg", "1.jpg", "2.jpg"];
const selectedImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${selectedImage})`;
document.body.style.backgroundPosition = "top";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";
