var $ = require('jquery');
var _ = require('underscore');

var scrollHelper = module.exports = {
	scroll: function (event) {
		if (event.preventDefault) {
			event.preventDefault();
		}
		$('html, body').animate({
			scrollTop: $(event.target.getAttribute('href')).offset().top - 100
		}, 1000);
	},
	resumeScroll: function (func, event) {
		event.preventDefault();
		func(true);
		_.delay(scrollHelper.scroll, 50, {target: event.target});
	}
};