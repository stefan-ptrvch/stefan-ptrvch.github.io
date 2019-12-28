function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
  x = (x <= 0) ? images.length - 1 : x - 1;
  document.getElementById("img").src = images[x];
}

function startTimer() {
  setInterval(displayNextImage, 4000);
}

var images = [],
  x = -1;
images[0] = "img/left2.jpg";
images[1] = "img/left1.jpg";
images[2] = "img/left3.jpg";
images[3] = "img/left4.jpg";
