$(document).ready(function(){
	$('.players').slick({
		centerMode: true,
		centerPadding: '100px',
		slidesToShow: 6,
		dots: false,
  		infinite: true,
  	  	adaptiveHeight: true
	});
});

$(document).ready(function(){
	$('.carousel').slick({
		centerMode: false,
		slidesToShow: 1,
		dots: false,
  		infinite: true,
  	  	adaptiveHeight: true,
  	  	autoplay: true,
  	  	autoplaySpeed: 4000
	});
});