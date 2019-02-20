$(document).ready(function() {
	$('.main > ul > li > a').click(function(event) {
		$(this).siblings('ul').slideToggle().parent().siblings().find('ul').slideUp();
		$(this).toggleClass('active').parent().siblings().find('a').removeClass('active');
	});
	 $(window).on('load', function(){  
    	$('#slider').nivoSlider(); 
  	});
	$('.top a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop:0
		}, 3000);
	});
});