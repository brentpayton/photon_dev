$(document).ready(function() {
  $('#lightgallery').lightGallery({
      selector: '.light-link',
      thumbnail : true,
      download : false
  });

  $('#srcset').lightGallery({
    thumbnail: false,
    download: false
  });

  $('.light-link').mouseenter(function() {
    $(this).addClass('fadeImg');
  });
  $('.light-link').mouseleave(function() {
    $(this).removeClass('fadeImg');
  });
  if (location.pathname === '/') {
    $(".nav").find(".home").addClass("navbar-active");
  }
  if (location.pathname === '/nature') {
    $(".nav").find(".nature").addClass("navbar-active");
  }
  if (location.pathname === '/travel') {
    $(".nav").find(".travel").addClass("navbar-active");
  }
  if (location.pathname === '/other') {
    $(".nav").find(".other").addClass("navbar-active");
  }
  if (location.pathname === '/about') {
    $(".nav").find(".about").addClass("navbar-active");
  }
  $(".nav a").on("click", function(){
     $(".nav").find(".active").removeClass("navbar-active");
     //$(this).parent().addClass("navbar-active");
  });
});
