var $ = require('jquery');

$(window).load(function() {
	$('a[href^="#"]').click(function() {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		}, 1000);
		return false;
	});
});