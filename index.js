window.onload=function() {
  var $toggle = document.querySelector(".menue__toggle");
  var $slider = document.querySelector(".menue");
  var $burger = document.querySelector(".menue__burger");
  var $close = document.querySelector(".menue__close")
  var $overlay = document.querySelector(".overlay");
  var $body = document.querySelector(".body");

  $toggle.addEventListener('click', function() {
    $slider.id = 'slide-out';
    $burger.style.opacity = '0';
    $toggle.style.display = 'none';
    $overlay.style.display = 'block';
    $body.style.overflowY = 'hidden';
  });
  $close.addEventListener('click', function() {
    $slider.id = 'slide-in';
    setTimeout(() => { $burger.style.opacity = '1'; }, 500);
    $toggle.style.display = 'block';
    $overlay.style.display = 'none';
    $body.style.overflowY = 'auto';
  });
  $overlay.addEventListener('click', function() {
    $slider.id = 'slide-in';
    setTimeout(() => { $burger.style.opacity = '1'; }, 500);
    $toggle.style.display = 'block';
    $overlay.style.display = 'none';
    $body.style.overflowY = 'auto';
  });
}
