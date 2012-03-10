// how long the slide stays
var slideInterval = 5000;
// how fast the slide transitions
var animateInterval = 1500;

function simpleSlideshow() {
  // set opacity 0 by default
  $('#slideshow ul li').css({opacity: 0.0});
  // show first image
  $('#slideshow ul li:first').css({opacity: 1.0});
  // set rotator interval
  setInterval('rotate()',slideInterval);
}

function rotate() {
  // get image
  var current = ( $('#slideshow ul li.current') ? $('#slideshow ul li.current') : $('#slideshow ul li:first') );
  if ( current.length === 0 ) current = $('#slideshow ul li:first');
  
  // cycle slideshow
  var next = ( ( current.next().length ) ? (( current.next().hasClass('current')) ? $('#slideshow ul li:first') : current.next()) : $('#slideshow ul li:first'));
  next.css({opacity: 0.0}).addClass('current').animate({opacity: 1.0}, animateInterval);

  current.animate({opacity: 0.0}, animateInterval).removeClass('current');
}

// and boom
$(function() {
	simpleSlideshow();
	$('#slideshow').fadeIn(1000);
  $('#slideshow ul li').fadeIn(1000); // force for IE
});
