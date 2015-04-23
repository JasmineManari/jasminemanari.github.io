
define(function () {

  var crew = ["assets/img/crew-head0.jpg", "assets/img/crew-head1.jpg", "assets/img/crew-head2.jpg", "assets/img/crew-head3.jpg"];
  var crewIdx = 1;

  return {

    slideshow: function (id, duration) {

      setInterval(function () {
        // We load 2 images at the same time to avoid flickering during transitions
        document.getElementById(id).style.backgroundImage = "url(" + crew[crewIdx % crew.length ] + "), url(" + crew[(crewIdx + 1) % crew.length ] + ")";
        crewIdx += 1;
      }, duration);
    }
  }
});
