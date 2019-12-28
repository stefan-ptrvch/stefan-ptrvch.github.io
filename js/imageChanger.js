$(document).ready(function() {

  var images = [
    "img/left1.jpg",
    "img/left2.jpg",
    "img/left4.jpg",
    "img/left4.jpg"
  ];

  var imageIndex = 0;

  $("#previous").on("click", function() {
    imageIndex = (imageIndex + images.length - 1) % (images.length);
    $("#img").attr('src', images[imageIndex]);
  });

  $("#next").on("click", function() {
    imageIndex = (imageIndex + 1) % (images.length);
    $("#img").attr('src', images[imageIndex]);
  });

  $("#img").attr(images[0]);

});
