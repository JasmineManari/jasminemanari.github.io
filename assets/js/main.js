
require(["background"], function(background) {

  if (document.getElementsByClassName('animated-head').length > 0) {
    background.slideshow('animated-head', 8000);
  }

  var docs = document.getElementsByClassName("cs-button");
  if (docs.length > 0) {
    for (var i = 0; i < docs.length; i++) {
      docs[i].addEventListener("click", function (event) {

        document.getElementsByClassName('hidden-block')[0].style.visibility = 'visible';
        document.getElementsByClassName('hidden-block')[0].classList.add('animated', 'slideInUp', 't0');

        var toShow = document.getElementById(event.target.attributes['data-content-show-id'].value);
        var toHide = document.getElementsByClassName('cs-text-active');

        for (var j = 0; j < toHide.length; j++) {
          toHide[j].classList.add('cs-text-inactive');
          toHide[j].classList.remove('cs-text-active');
        }
        if (toShow) {
          toShow.classList.add('cs-text-active');
          toShow.classList.remove('cs-text-inactive');
        }
      });
    }
  }
});
