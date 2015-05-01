
define(function () {

  var crew = ["assets/img/crew-head0.jpg",
              "assets/img/crew-head1.jpg",
              "assets/img/crew-head2.jpg",
              "assets/img/cast-head0.jpg",
              "assets/img/contact-head.jpg",
              "assets/img/news-head.jpg",
             ];
  var current = 0;
  var next = ~~(Math.random() * crew.length);

  return {

    slideshow: function (klass, duration) {

      setInterval(function () {
        // We load 2 images at the same time to avoid flickering during transitions
        current = next;
        while (next == current) {
          next = ~~(Math.random() * crew.length);
        }
        console.log('next=' + next);
        var bg = "url(" + crew[current] + "), url(" + crew[next] + ")";
        document.getElementsByClassName(klass)[0].style.backgroundImage = bg;
      }, duration);
    }
  }
});
